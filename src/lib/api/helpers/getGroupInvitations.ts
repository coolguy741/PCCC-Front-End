import Cookies from "js-cookie";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { Api } from "../api";
import { BASE_API_URL } from "./consts";

export const getGroupInvitations = async () => {
  const { api } = new Api({
    baseUrl: BASE_API_URL,
  });

  const response = await api.appGroupsMyGroupsJoinRequestsList(
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
