import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { MessageBox } from "../../Global/MessageBox";

export const SignInForm = () => {
  const { connect } = useAPI();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([STORAGE_KEY_JWT]);
  const { setForgetType } = useUserStore();
  const {
    control,
    handleSubmit,
    setError,
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
    connect
      .tokenCreate({
        username,
        password,
        grant_type: "password",
        client_id: "PccServer23_Web",
      })
      .then(({ data }) => {
        if (data.access_token) {
          setCookie(STORAGE_KEY_JWT, data.access_token, {});
          navigate("/dashboard");
        }
      })
      .catch(({ error }) => {
        setError("username", { type: "custom", message: "" });
        setError("password", {
          type: "custom",
          message: error.error_description,
        });
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
          {errors.password?.type === "custom" && (
            <MessageBox text={errors.password?.message ?? ""} />
          )}
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
  width: 500px;

  h1 {
    font-weight: 600;
    font-size: 33px;
    line-height: 40px;
    margin-bottom: 32px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    margin-bottom: 32px;
    &:last-of-type {
      margin-bottom: 0px;
    }

    label {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: var(--neutral-700);
    }

    input {
      margin-top: 15px;
    }
  }

  p.forgot {
    font-size: 15px;
    line-height: 20px;
    margin-top: 15px;
    width: 100%;
    color: var(--neutral-600);
    cursor: pointer;
  }

  button[type="submit"] {
    margin-top: 56px;
  }
`;
