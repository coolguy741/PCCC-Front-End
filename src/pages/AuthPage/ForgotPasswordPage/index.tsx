import { useEffect } from "react";
import styled from "styled-components";
import { ForgotPasswordForm } from "../../../components/Auth/ForgotPasswordForm";
import { useAPI } from "../../../hooks/useAPI";
import { useUserStore } from "../../../stores/userStore";

export const ForgotPasswordPage = () => {
  const { setSecurityQuestions } = useUserStore();

  const { api } = useAPI();

  const getQuestions = async () => {
    const { data } =
      await api.appCustomSecurityQuestionChoicesSecurityQuestionsList();

    setSecurityQuestions(data);

    return data;
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <Style.Container>
      <ForgotPasswordForm />
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15rem;
    padding-top: 5rem;

    background-size: cover;
    background-image: url("/images/background.svg");
    background-position: center center;
    background-repeat: no-repeat;
    color: #3d3d3d;
  `,
};
