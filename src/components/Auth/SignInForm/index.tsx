import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAPI } from "../../../hooks/useAPI";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import Button from "../../Button";
import { Input } from "../../Global/Input";

export const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { connect } = useAPI();
  const [cookies, setCookie] = useCookies([STORAGE_KEY_JWT]);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await connect.tokenCreate({
      username,
      password,
      grant_type: "password",
      client_id: "PccServer23_Web",
    });

    setCookie(STORAGE_KEY_JWT, data.access_token, {});
  };

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <h1>Sign in</h1>
        <label>
          <span>Username</span>
          <Input
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <label>
          <span>Password</span>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <Link to="forgot-password">Forgot password?</Link>
        <Button type="submit">Sign In</Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    h1 {
      align-self: flex-start;
    }

    label {
      display: flex;
      align-items: center;

      span {
        width: 7rem;
        font-size: 1.2rem;
      }

      input,
      select {
        width: 18rem;
      }
    }
    button {
      margin-top: 2rem;
    }
  }
`;
