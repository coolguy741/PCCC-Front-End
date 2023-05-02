import { Api } from "../api";
import { BASE_API_URL } from "./consts";

export const getGroupInvitations = async () => {
  const { api } = new Api({
    baseUrl: BASE_API_URL,
  });

  const name = "PCCC_TOKEN=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      const response = await api.appCustomGroupsMyGroupsJoinRequestsList(
        {},
        {
          headers: {
            Authorization: `Bearer ${c.substring(name.length, c.length)}`,
          },
        },
      );

      if (response.status === 200) {
        return response.data.items;
      }
    }
  }

  return;
};
