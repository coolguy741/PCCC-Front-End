import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
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
  const { setUsernameForSecurityQuestions } = useUserStore();

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const { data } = await connect.tokenCreate({
    //   username,
    //   password,
    //   grant_type: "password",
    //   client_id: "PccServer23_Web",
    // });

    // setCookie(STORAGE_KEY_JWT, data.access_token, {});
    // console.log("clicked!!");
    changeStep("security");
  };

  const forgotPasswordHandler = () => {
    setUsernameForSecurityQuestions(username);

    console.log(username);

    navigate("forgot-password");
  };

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
        <Link to="forgot-password">Forgot password?</Link>
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

  a {
    font-size: 15px;
    line-height: 20px;
    width: 100%;
    text-align: right;
    color: #646464;
  }

  button {
    margin-top: 56px;
  }
`;
