import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

export const SignInForm = () => {
  function placeholderForSignIn() {
    return "clicked";
  }
  return (
    <Container>
      <div>
        <h1>Sign in</h1>
        <label>
          <span>Username</span>
          <Input type="username" />
        </label>
        <label>
          <span>Password</span>
          <Input type="password" />
        </label>
        <Link to="forgot-password">Forgot password?</Link>
        <Button onClick={placeholderForSignIn}>Sign In</Button>
      </div>
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

  div {
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
