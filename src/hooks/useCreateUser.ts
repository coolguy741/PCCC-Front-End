import { useEffect, useState } from "react";
import { Api } from "../lib/api/api";

export const useCreateUser = () => {
  const [user, setUser] = useState(null);
  const { api } = new Api({ baseUrl: "https://backend-dev.powerfullkids.ca" });

  const getQuestions = async () => {
    const questions =
      await api.appCustomSecurityQuestionChoicesSecurityQuestionsList();

    console.log(questions);

    return questions;
  };

  const getUserNames = async () => {
    const usernames = await api.appCustomUsernameChoicesUsernameChoicesList();

    console.log(usernames);

    return usernames;
  };

  useEffect(() => {
    // getQuestions();
    getUserNames();

    // api.appUserCreate({
    //   birthYear: 1990,
    //   province: "Saskatchewan",
    //   username: "AwesomeApple",
    //   password: "Testpass123!",
    //   firstSecurityQuestionId: "3a0a65d5-23ce-381f-f537-2c5cb0a81649",
    //   firstSecurityQuestionAnswer: "testAnswer",
    //   secondSecurityQuestionId: "3a0a65d5-270f-19c7-c4ef-718d72acf155",
    //   secondSecurityQuestionAnswer: "testAnswer",
    //   thirdSecurityQuestionId: "3a0a65d5-29b3-20b8-659a-059d0beafbcc",
    //   thirdSecurityQuestionAnswer: "testAnswer",
    // });
  }, []);

  return user;
};
