import Cookies from "js-cookie";
import { useEffect, useReducer, useRef } from "react";
import { BASE_API_URL } from "../lib/api/helpers/consts";
import { STORAGE_KEY_JWT } from "../pages/consts";
import { Api } from "./../lib/api/api";

interface State<T> {
  data?: T;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

// discriminated union type
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

type ApiName = keyof Api<any>["api"];

export function useFetch<T = unknown>(
  handler: ApiName | undefined,
  body: any,
  params?: URLSearchParams,
): State<T> {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const { api } = new Api({
    headers: {
      baseURL: BASE_API_URL,
    },
  });

  useEffect(() => {
    // Do nothing if the url is not given
    if (!handler) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      // If a cache exists for this url, return it
      if (cache.current[handler]) {
        dispatch({ type: "fetched", payload: cache.current[handler] });
        return;
      }

      try {
        if (!handler) return;

        const apiFunc = api[handler] as any;
        const response = await apiFunc.call(api, body, {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
          ...params,
        });
        if (response.statusText !== "OK") {
          throw new Error(response.statusText);
        }

        const data = (await response.data) as T;
        cache.current[handler] = data;
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler]);

  return state;
}
