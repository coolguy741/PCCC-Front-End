import Cookies from "js-cookie";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { Api } from "../api";
import { BASE_API_URL } from "./consts";

export const getGroups = async () => {
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  const response = await api.appGroupsMyCreatedGroupsList(
    {},
    {
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    },
  );

  if (response.status === 200) {
    return response.data.items;
  }
};
