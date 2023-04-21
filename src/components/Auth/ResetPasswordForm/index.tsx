import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";

export const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const usernameForSecurityQuestions = useUserStore(
    (state) => state.usernameForSecurityQuestions,
  );
  const firstQuestionAnswer = useUserStore(
    (state) => state.firstQuestionAnswer,
  );
  const secondQuestionAnswer = useUserStore(
    (state) => state.secondQuestionAnswer,
  );
  const thirdQuestionAnswer = useUserStore(
    (state) => state.thirdQuestionAnswer,
  );
  const { api } = useAPI();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await api.appUserResetPasswordCreate({
      username: usernameForSecurityQuestions,
      newPassword: password,
      firstQuestionAnswer: firstQuestionAnswer,
      secondQuestionAnswer: secondQuestionAnswer,
      thirdQuestionAnswer: thirdQuestionAnswer,
    });

    console.log(response);
  };

  return (
    <Style.Container onSubmit={submitHandler}>
      <h1>Password Reset</h1>
      <fieldset>
        <label>New Password</label>
        <Input
          type="password"
          width="55%"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </fieldset>
      <fieldset>
        <label>Retype Password</label>
        <Input
          type="password"
          width="55%"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
      </fieldset>
      <Button type="submit" fullWidth>
        Reset
      </Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)`
    ${glassBackground};
    width: 650px;
    height: auto;

    h1 {
      font-weight: 600;
      font-size: 33px;
      line-height: 40px;
      color: var(--neutral-900);
      margin-bottom: 32px;
    }

    fieldset {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      justify-content: space-between;
      height: 52px;

      label {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: var(--neutral-700);
      }
    }

    button {
      margin-top: 40px;
    }
  `,
};
