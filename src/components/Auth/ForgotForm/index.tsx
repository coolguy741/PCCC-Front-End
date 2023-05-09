import { motion } from "framer-motion";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { useSignInStore } from "../../../stores/signInStore";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { MessageBox } from "../../Global/MessageBox";

export const ForgotForm = () => {
  const { changeStep } = useSignInStore();
  const {
    forgetType,
    setUsernameForSecurityQuestions,
    setSecurityQuestions,
    setFirstQuestionId,
    setSecondQuestionId,
    setThirdQuestionId,
  } = useUserStore();
  const { api } = useAPI();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const submitHandler = ({
    email,
    username,
  }: {
    email?: string;
    username?: string;
  }) => {
    if (forgetType === "username") {
      console.log(`Send email to ${email} with password reset link`);
    }

    if (forgetType === "password") {
      setUsernameForSecurityQuestions(username ?? "");
      api
        .appUserQuestionIdsList({
          Username: username,
        })
        .then(({ data }) => {
          const { firstQuestionId, secondQuestionId, thirdQuestionId } = data;

          setFirstQuestionId(firstQuestionId ?? "");
          setSecondQuestionId(secondQuestionId ?? "");
          setThirdQuestionId(thirdQuestionId ?? "");
          changeStep(1);
        })
        .catch(({ error: { error } }) => {
          setError("username", {
            type: "custom",
            message: error.details,
          });
        });
    }
  };

  const title =
    forgetType === "password" ? "Forgot Password?" : "Forgot Username?";
  const subtitle =
    forgetType === "password"
      ? "Enter your Username so we can identify your account and provide you with your security questions."
      : "Enter the email that belongs to the account and we will send your username to you ";
  const label = forgetType === "password" ? "Username" : "Email";

  const getSecurityQuestions = async () => {
    const { data } =
      await api.appSecurityQuestionChoicesSecurityQuestionsList();

    setSecurityQuestions(data);

    return data;
  };

  useEffect(() => {
    getSecurityQuestions();
  }, []);

  return (
    <Style.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <fieldset>
          <label>{label}</label>
          {forgetType === "password" ? (
            <Controller
              name="username"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  height="52px"
                  className={errors.username ? "has-error" : ""}
                  type="text"
                  id="username"
                  {...field}
                />
              )}
            />
          ) : (
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  height="52px"
                  className={errors.email ? "has-error" : ""}
                  type="email"
                  id="email"
                  {...field}
                />
              )}
            />
          )}
          {(errors.username?.type ?? errors.email?.type) === "custom" && (
            <MessageBox
              text={errors.username?.message ?? errors.email?.message ?? ""}
            />
          )}
        </fieldset>
        {forgetType === "username" && (
          <span>
            If you’re not a professional user, contact your educator for
            assistance
          </span>
        )}
        <Button fullWidth>Submit</Button>
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)`
    ${glassBackground};
    width: 550px;

    h1 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      color: var(--neutral-900);
      margin-bottom: 24px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--neutral-700);
      margin-bottom: 32px;
    }

    fieldset {
      label {
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: var(--neutral-700);
      }

      input {
        margin-top: 12px;
      }
    }

    span {
      font-size: 15px;
      line-height: 20px;
      margin-top: 12px;
      color: var(--neutral-600);
    }

    button {
      margin-top: 56px;
    }
  `,
};
