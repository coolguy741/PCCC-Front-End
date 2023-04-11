import { z } from 'zod';
import { STORAGE_KEY_JWT } from '../../pages/consts';
import { setUser, User } from '../../stores/userStore';
import { hasProp } from '../util/hasProp';

/** Prod URL for backend */
export const BACKEND_BASE_URL = 'https://backend.todo';
export const ENDPOINTS = {
  REGISTER: 'User/register',
  ME: 'me',
};

/** Default error message if we can't infer anything useful. */
const GENERIC_ERROR_MESSAGE = 'Something went wrong.';

/** Persist jwt in localstorage */
const persistJwt = (jwt: string) => {
  localStorage.setItem(STORAGE_KEY_JWT, jwt);
};
/** Retrieve jwt from localstorage */
export const getPersistedJwt = () => {
  return localStorage.getItem(STORAGE_KEY_JWT);
};
/** Unpersist the jwt */
const destroyJwt = () => {
  localStorage.removeItem(STORAGE_KEY_JWT);
};

/**
 * @param endpoint Endpoint to call, after .../api/ usually ENDPOINTS.SOMETHING from this module
 * @param options - configure the request
 * @param options.auth - if true, JWT will be retrieved and added to headers
 * @param options.body - JSON-serializable object to send
 * @param options.method - POST, GET or any other valid HTTP method
 * @param options.stub - If set, fetcher will NOT call the endpoint, but will run this function and return its response
 * @example

 * @note For typesafety, the generics should be the RequestBodyType expected by the endpoint and the ResponseBodyType returned by the endpoint, when successful
 * @note If you are considering using this function,
 * you should probably use add a utility function to this file instead that wraps it
 * That way we can keep all the validation, sanitization and error handling in one place
 * e.g. API_doTheThing()
 * @note Expect this function to throw errors, should be caught by the caller.  These errors will include a cause with {json, response} so that you can use that info to reshape the error message.
 *
 * @returns Promoise<ResponseBodyType>
 */
async function fetcher<RequestBodyType, ResponseBodyType>(
  endpoint: string,
  {
    auth = false,
    body,
    method = 'GET',
    stub,
  }: {
    auth?: boolean;
    body?: RequestBodyType;
    method?: 'GET' | 'POST';
    stub?: () => ResponseBodyType;
  } = {},
): Promise<ResponseBodyType> {
  const jwt = getPersistedJwt();

  // If we are testing with a stub, simulate API call
  if (typeof stub !== 'undefined') {
    console.warn('STUBBED API CALL', endpoint, body);
    await delay(500);
    return stub();
  } else {
    console.log(`Fetching API ${BACKEND_BASE_URL}${endpoint}`, {
      method,
      auth,
      jwt,
      body,
    });

    // Otherwise, make a real API call
    const response = await fetch(`${BACKEND_BASE_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(auth && jwt ? { Authorization: `Bearer ${jwt}` } : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    let json: any;
    try {
      json = await response.json();
    } catch {
      console.warn(`Invalid JSON response`);
      json = {};
    }

    // console.log("Response:", response, json);

    // Return the json of a good response
    if (response.ok) {
      return json;

      // Otherwise, throw an error
    } else {
      // Let's do a littl basic reshaping of the error message
      let message: string;
      if (response.statusText) message = response.statusText;
      else if (json?.message) message = json.message;
      else if (response.status === 401) message = 'Unauthorized request.';
      else if (response.status === 400)
        message = 'Something went wrong with the request.';
      else if (response.status === 500)
        message = 'Something went wrong on the server.';
      else message = GENERIC_ERROR_MESSAGE;

      // Throw the error, but include the response and json so that it might be reshaped by the caller
      throw new Error(message, { cause: { response, json } });
    }
  }
}

/**
 * Once authed with a persisted jwt, this will fetch the user's profile/info and send it to the global userStore
 */
export const API_getUser = async (): Promise<void> => {
  try {
    // if (!getPersistedJwt()) throw new Error("No JWT");

    const response = await fetcher<undefined, User>(ENDPOINTS.ME, {
      auth: true,
    });

    // Validate with zod. Why? Because we want to make sure the API response is what we expect.
    // If it's not, we want to throw an error.
    // We can also use this to sanitize the data.
    try {
      const user = z
        .object({
          id: z.string(),

          // TODO: These are in the API response, but should not be.
          qrImageEmail: z.any().optional(),
          qrImageText: z.any().optional(),
        })
        // TODO: removing qr codes from the response... but they shouldnt be there in the first place.
        // We don't want or need them.
        .transform(({ qrImageEmail, qrImageText, ...userData }) => ({
          ...userData,
        }))
        .parse(response);

      // Set our user in the userStore
      setUser(user);
    } catch (err) {
      console.error('Error parsing user data from API response', err);
      throw new Error(
        'Error parsing user data from API response. See the console.',
      );
    }
  } catch (err) {
    reshapeFetcherError(err);
  }
};

/**
 * Fetcher will throw errors if the server response comes back with an error.
 * It will try its best to provide a useful error message.
 * But in specific cases, we want to handle the error ourselves.
 * Fetcher returns the server response and json in err.cause {response, json}
 * This function handles the type guarding and will execute you handler throwBasedOnResponse.
 * In this, you'll want to throw a more use-case specific error based on the server response.
 * @example
  try {
    fetcher(...);
  } catch(err) {
    throwBasedOnResponse(err, (response,json) => {
      if(response.status === 401) throw new Error("Wrong keycode.")
    };
  }
 */
const reshapeFetcherError = (
  err: unknown,
  // TODO: Look into empty arrow function
  throwBasedOnResponse: (response: Response, json: unknown) => void = () => {
    return 'void';
  },
) => {
  // If this is somehow not an Error, throw generically.
  if (!(err instanceof Error)) throw new Error(GENERIC_ERROR_MESSAGE);

  // If this was thrown by fetcher with a response in the cause, reshape the error based on the response
  if (
    typeof err.cause === 'object' &&
    err.cause !== null &&
    hasProp(err.cause, 'response') &&
    err.cause.response instanceof Response &&
    hasProp(err.cause, 'json')
  ) {
    const { response, json } = err.cause;
    throwBasedOnResponse(response, json);
  }

  // If we haven't thrown yet, rethrow the original error message (but omit the response)
  throw new Error(err.message);
};

type SanitizationStrategy = 'phone' | 'email' | 'username' | 'scan';
/**
 * Currently a trivial wrapper with the intent to centralize sanitization logic.
 * One day we can add XSS and profanity filtering here.
 * @param dirty The string to sanitize
 * @param strategy which sanitization strategy to use (different for different types of data)
 * @returns a cleaned string
 */
export function sanitize(
  dirty: string,
  strategy: SanitizationStrategy,
): string {
  // TODO: sanitize XSS and profanity
  return dirty;
}

/**
 * A delay async utility for testing/stubbing
 * @param time ms to delay
 */
export async function delay(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}
