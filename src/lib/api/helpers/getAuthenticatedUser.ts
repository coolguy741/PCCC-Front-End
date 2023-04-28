import { getAPI } from "../../../hooks/useAPI";
import { setUser } from "../../../stores/userStore";

export const getAuthenticatedUser = async () => {
  const { api } = getAPI();
  const cookies = document.cookie;
  const value = `; ${cookies}`;
  const parts = value.split("; PCCC_TOKEN=");

  if (parts.length === 2) {
    const token = parts?.pop()?.split(";").shift();

    if (token) {
      const response = await api.appUserUserProfileList({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("SET USER");

        setUser(response.data);
      }
    }
  }
};
