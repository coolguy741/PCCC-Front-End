import { getAPI } from "../../../hooks/useAPI";
import { setUser } from "../../../stores/userStore";

export const getAuthenticatedUser = async () => {
  const { api } = getAPI();
  // const cookies = document.cookie;
  // const value = `; ${cookies}`;
  // const parts = value.split("; PCCC_TOKEN=");

  // console.log(cookies);

  // if (parts.length === 2) {
  //   const token = parts?.pop()?.split(";").shift();

  //   if (token) {
  //     const response = await api.appUserUserProfileList({
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.status === 200) {
  //       console.log("SET USER");

  //       setUser(response.data);
  //     }
  //   }
  // }

  const name = "PCCC_TOKEN=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      const response = await api.appUserUserProfileList({
        headers: {
          Authorization: `Bearer ${c.substring(name.length, c.length)}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      }
    }
  }

  return "";
};
