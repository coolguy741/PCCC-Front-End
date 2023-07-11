import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useState } from "react";
import { useAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ErrorMessage } from "../ErrorMessage";

export const SignInForm = () => {
  const { connect } = useAPI();
  const navigate = useNavigate();
  const { setForgetType } = useUserStore();
  const [error, setError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      username: "",
    },
  });

  const submitHandler = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    setError("");

    connect
      .tokenCreate({
        username,
        password,
        grant_type: "password",
        client_id: "PccServer23_Web",
      })
      .then(({ data }) => {
        console.log(data);

        if (data.access_token) {
          Cookies.set(STORAGE_KEY_JWT, data.access_token, {});
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        setError(error.response.data.error_description);
      });
  };

  function forgotPassword() {
    setForgetType("password");
  }

  function forgotUsername() {
    setForgetType("username");
  }

  return (
    <Container
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>Log in</h1>
        <fieldset>
          <label htmlFor="username">Username</label>
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
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <Input
                type="password"
                id="password"
                {...field}
                height="52px"
                className={errors.password ? "has-error" : ""}
              />
            )}
          />
          {error && <ErrorMessage error={error} />}
        </fieldset>
        <p className="forgot">
          Forgot your{" "}
          <Link
            to="forgot-password"
            onClick={forgotUsername}
            data-testid="forgot-username"
          >
            <u>username</u>
          </Link>{" "}
          or{" "}
          <Link
            to="forgot-password"
            onClick={forgotPassword}
            data-testid="forgot-password"
          >
            <u>password</u>
          </Link>
          ?
        </p>
        <Button type="submit" fullWidth data-testid="submit">
          Login
        </Button>
      </form>
    </Container>
  );
};

const Container = styled(motion.main)`
  ${glassBackground}
  width: ${convertToRelativeUnit(500, "vw")};

  h1 {
    font-weight: 600;
    font-size: ${convertToRelativeUnit(33, "vh")};
    line-height: 125%;
    margin-bottom: ${convertToRelativeUnit(32, "vh")};
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    margin-bottom: ${convertToRelativeUnit(32, "vh")};
    &:last-of-type {
      margin-bottom: 0px;
    }

    label {
      font-weight: 500;
      font-size: ${convertToRelativeUnit(16, "vh")};
      line-height: 125%;
      color: var(--neutral-700);
    }

    input {
      margin-top: ${convertToRelativeUnit(15, "vh")};
    }
  }

  p.forgot {
    font-size: ${convertToRelativeUnit(15, "vh")};
    line-height: 125%;
    margin-top: ${convertToRelativeUnit(15, "vh")};
    width: 100%;
    color: var(--neutral-600);
    cursor: pointer;
  }

  button[type="submit"] {
    margin-top: ${convertToRelativeUnit(56, "vh")};
  }
`;
