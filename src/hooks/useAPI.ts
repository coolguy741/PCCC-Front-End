import { Api } from "../APIs/AuthApis";

export const useAPI = () => {
  const { api } = new Api({ baseUrl: "https://backend-dev.powerfullkids.ca" });

  return api;
};
