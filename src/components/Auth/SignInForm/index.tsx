import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useSignInStore } from "../../../stores/signInStore";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";

export const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const changeStep = useSignInStore((state) => state.changeStep);

  const { connect } = useAPI();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies([STORAGE_KEY_JWT]);
  const { setUsernameForSecurityQuestions, setForgetType } = useUserStore();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await connect.tokenCreate({
      username,
      password,
      grant_type: "password",
      client_id: "PccServer23_Web",
    });

    console.log(data);

    if (data.access_token) {
      setCookie(STORAGE_KEY_JWT, data.access_token, {});
    }
  };

  function forgotPassword() {
    setForgetType("password");
    navigate("forgot");
  }

  function forgotUsername() {
    setForgetType("username");
    navigate("forgot");
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <h1>Log in</h1>
        <fieldset>
          <label>Username</label>
          <Input
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            height="52px"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            height="52px"
          />
        </fieldset>
        <p className="forgot">
          Forgot your{" "}
          <button onClick={forgotUsername}>
            <u>username</u>
          </button>{" "}
          or{" "}
          <button onClick={forgotPassword}>
            <u>password</u>
          </button>
          ?
        </p>
        <Button type="submit" fullWidth>
          Login
        </Button>
      </form>
    </Container>
  );
};

const Container = styled.main`
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
    label {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      color: #505050;
    }

    input {
      margin: 15px 0;
      margin-top: 7.5px;
    }
  }

  p.forgot {
    font-size: 15px;
    line-height: 20px;
    width: 100%;
    color: #646464;
    cursor: pointer;
  }

  button[type="submit"] {
    margin-top: 56px;
  }
`;
