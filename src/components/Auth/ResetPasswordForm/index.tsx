import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

export const ResetPasswordForm = () => {
  return (
    <Container>
      <div>
        <h1>Reset Password</h1>
        <label>
          <span>New Password</span>
          <Input type="username" />
        </label>
        <label>
          <span>Retype Password</span>
          <Input type="password" />
        </label>
        <div className="back-button">
          <Link to="/signin">
            <Button>Back</Button>
          </Link>
        </div>
        <Button onClick={() => {}}>Reset</Button>
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
        width: 11rem;
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

  .back-button {
    position: absolute;
    top: 8rem;
    left: 2rem;
  }
`;
