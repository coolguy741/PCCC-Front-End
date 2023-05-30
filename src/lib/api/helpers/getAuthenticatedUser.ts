import Cookies from "js-cookie";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { setUser } from "../../../stores/userStore";
import { Api } from "../api";
import { BASE_API_URL } from "./consts";

export const getAuthenticatedUser = async () => {
  const { api } = new Api({
    baseUrl: BASE_API_URL,
  });

  try {
    const response = await api.appUserUserProfileList({
      headers: {
        Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
      },
    });

    if (response.status === 200) {
      setUser(response.data);
    }
  } catch (error: unknown) {
    console.warn(error);
  }

  return;
};
