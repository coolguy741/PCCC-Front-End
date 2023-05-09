import { redirect } from "react-router-dom";
import { getUserOrFetchUserIfFirstLoad } from "../../../stores/userStore";

export const redirectIfNotLoggedIn = async (path = "/signin") => {
  const user = await getUserOrFetchUserIfFirstLoad();

  console.log("USER", user);

  if (!user) {
    throw redirect(path);
  }
};
