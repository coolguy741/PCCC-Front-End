import { Form } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../Global/Button";
import { Input } from "../../Global/Input";

interface SignUpFormProps {
  setNav: (nav: number) => void;
  over18: boolean | null;
}

export const SignUpForm = ({ setNav, over18 }: SignUpFormProps) => {
  console.log(over18);
  return (
    <Container>
      <h1>Account Info</h1>
      <div className="signup-form">
        <div className="signup-form--left">
          {over18 && <Input type="text" placeholder="Name" />}
          {over18 && <Input type="text" placeholder="Title" />}
          <Input type="text" placeholder="Birth year" />
          {over18 && <Input type="text" placeholder="School ID Code" />}
          {over18 && <Input type="text" placeholder="School" />}
          <Input type="text" placeholder="Province" />
          {over18 && <Input type="text" placeholder="Email Address" />}
        </div>
        <div className="signup-form--right">
          <Input type="text" placeholder="User name" />
          Choose avatar
          <div className="avatars">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
      <div className="back-button">
        <Button onClick={() => (over18 ? setNav(1) : setNav(0))}>Back</Button>
      </div>
      <div className="next-button">
        <Button onClick={() => setNav(3)}>Next</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    position: absolute;
    top: 7rem;
    left: 15rem;
  }
  .signup-form {
    display: flex;
    gap: 20px;

    .signup-form {
      &--left,
      &--right {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &--right {
        .avatars {
          display: flex;
          gap: 5px;
          max-width: 300px;
          flex-wrap: wrap;

          div {
            width: 50px;
            height: 50px;
            background-color: #ff0000;
          }
        }
      }
    }
  }

  .back-button {
    position: absolute;
    top: 10rem;
    left: 2rem;
  }

  .next-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
`;
