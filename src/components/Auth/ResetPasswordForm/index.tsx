import { motion } from "framer-motion";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";

export const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    usernameForSecurityQuestions,
    firstQuestionAnswer,
    secondQuestionAnswer,
    thirdQuestionAnswer,
  } = useUserStore();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { api } = useAPI();

  const submitHandler = async ({
    password,
    confirmPassword,
  }: {
    password: string;
    confirmPassword: string;
  }) => {
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
    <Style.Container onSubmit={handleSubmit(submitHandler)}>
      <h1>Password Reset</h1>
      <fieldset>
        <label htmlFor="new-password">New Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input
              width="55%"
              type="password"
              id="new-password"
              data-testid="password"
              className={errors.password ? "has-error" : ""}
              {...field}
            />
          )}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Retype Password</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: true,
            validate: (value: string) => watch("password") === value,
          }}
          render={({ field }) => (
            <Input
              width="55%"
              type="password"
              id="password"
              className={errors.confirmPassword ? "has-error" : ""}
              {...field}
            />
          )}
        />
      </fieldset>
      <Button type="submit" fullWidth data-testid="submit">
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
