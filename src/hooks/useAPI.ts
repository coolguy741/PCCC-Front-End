import { Api } from "../lib/api/api";

export const useAPI = () => {
  const { api, connect } = new Api({
    baseUrl: "https://backend-dev.powerfullkids.ca",
  });

  return { api, connect };
};

// Imperative API
export const getAPI = () => {
  const { api, connect } = new Api({
    baseUrl: "https://backend-dev.powerfullkids.ca",
  });

  return { api, connect };
};
