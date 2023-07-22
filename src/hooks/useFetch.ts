/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from "js-cookie";
import { useCallback, useEffect, useReducer, useRef } from "react";

import { BASE_API_URL } from "../lib/api/helpers/consts";
import { STORAGE_KEY_JWT } from "../pages/consts";
import { Api } from "./../lib/api/api";

interface State<T> {
  data?: T;
  isLoading?: boolean;
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
  handler: ApiName,
  body?: any,
  params?: URLSearchParams,
  initialLoad?: boolean,
): State<T> & {
  fetchData?: (
    body?: any,
    params?: URLSearchParams,
    manualReload?: boolean,
    id?: string,
  ) => Promise<void>;
} {
  const cache = useRef<Cache<T>>({});
  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    isLoading: false,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, isLoading: true };
      case "fetched":
        return { ...initialState, isLoading: false, data: action.payload };
      case "error":
        return { ...initialState, isLoading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });
  const fetchData = useCallback(
    async (
      fetchBody?: any,
      fetchParams?: URLSearchParams,
      manualReload?: boolean,
      id?: string,
    ) => {
      cancelRequest.current = false;
      dispatch({ type: "loading" });

      // If a cache exists for this url, return it
      if (cache.current[handler] && !manualReload) {
        dispatch({ type: "fetched", payload: cache.current[handler] });
        return;
      }

      try {
        if (!handler) return;

        const apiFunc = api[handler] as any;
        const response = id
          ? await apiFunc.call(api, id, fetchBody ?? body, {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
              ...(fetchParams ?? params),
            })
          : await apiFunc.call(api, fetchBody ?? body, {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
              ...(fetchParams ?? params),
            });

        if (response.status > 300) {
          throw new Error(response.status);
        }

        const data = (await response.data) as T;

        cache.current[handler] = data;
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error as Error });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handler, state],
  );

  useEffect(() => {
    // Do nothing if the url is not given
    if (!handler) return;
    initialLoad && void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler, initialLoad]);

  return { ...state, fetchData };
}
