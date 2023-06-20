import Cookies from "js-cookie";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { Api } from "../api";
import { BASE_API_URL } from "./consts";

export const getFoodway = async (id: string | undefined) => {
  if (id) {
    const { api } = new Api({
      baseURL: BASE_API_URL,
    });

    const response = await api.appFoodwaysDetail(id, {
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    });

    return response.data;
  }

  return null;
};
