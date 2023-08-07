import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useAPI } from "../../../hooks/useAPI";
import { useSignInStore } from "../../../stores/signInStore";
import { useUserStore } from "../../../stores/userStore";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ErrorMessage } from "../ErrorMessage";

export const ForgotForm = () => {
  const [error, setError] = useState("");
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
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
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

          navigate("/signin/security-questions");
        })
        .catch((error) => {
          setError(error.response.data.error.details);
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

  const getSecurityQuestions = useCallback(async () => {
    const { data } =
      await api.appSecurityQuestionChoicesSecurityQuestionsList();

    setSecurityQuestions(data);

    return data;
  }, [api, setSecurityQuestions]);

  useEffect(() => {
    getSecurityQuestions();
  }, [getSecurityQuestions]);

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
                  className={errors.email ? "has-error" : ""}
                  type="email"
                  id="email"
                  {...field}
                />
              )}
            />
          )}
          {error && <ErrorMessage error={error} />}
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
    width: ${convertToRelativeUnit(550, "vw")};

    h1 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(25, "vh")};
      color: var(--neutral-900);
      margin-bottom: ${convertToRelativeUnit(24, "vh")};
    }

    p {
      font-weight: 500;
      font-size: ${convertToRelativeUnit(16, "vh")};
      line-height: 125%;
      color: var(--neutral-700);
      margin-bottom: ${convertToRelativeUnit(32, "vh")};
    }

    fieldset {
      label {
        font-weight: 500;
        font-size: ${convertToRelativeUnit(15, "vh")};
        line-height: 125%;
        color: var(--neutral-700);
      }

      input {
        margin: ${convertToRelativeUnit(12, "vh")} 0;
      }
    }

    span {
      font-size: ${convertToRelativeUnit(15, "vh")};
      line-height: 125%;
      margin-top: ${convertToRelativeUnit(12, "vh")};
      color: var(--neutral-600);
    }

    button {
      margin-top: ${convertToRelativeUnit(56, "vh")};
    }
  `,
};
