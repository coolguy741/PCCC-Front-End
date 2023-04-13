import { FormEvent } from "react";
import styled from "styled-components";
import { StepsForSignUp } from "../../../stores/signUpStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";
import { ArrowRight } from "../../Icons";

interface AgeGateProps {
  setOver18: (over18: boolean) => void;
  birthYear: number | null;
  setBirthYear: (birthYear: number | null) => void;
  changeCurrentStep: (step: StepsForSignUp) => void;
}

export const AgeGate = ({
  setOver18,
  birthYear,
  setBirthYear,
  changeCurrentStep,
}: AgeGateProps) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentYear = new Date().getFullYear();

    if (birthYear !== null) {
      if (currentYear - birthYear >= 18) {
        setOver18(true);
      } else {
        setOver18(false);
      }
    }
    changeCurrentStep("role");
  };

  return (
    <Style.Container>
      <h1>Welcome</h1>
      <p>We will need some basic information to setup your account</p>
      <form onSubmit={submitHandler}>
        <h2>Sign up</h2>
        <fieldset>
          <label>What year were you born?</label>
          <Input type="text" />
        </fieldset>
        <fieldset>
          <label>What is your province?</label>
          <Input type="text" />
        </fieldset>
        <Button size="small" fullWidth type="submit">
          Continue to the next step
          <ArrowRight width="15" />
        </Button>
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    width: 440px;
    height: 540px;
    ${glassBackground}

    label {
      font-family: "NoirStd-Regular";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 32px;
    }

    fieldset {
      margin: 0;
      padding: 0;
      border: none;
      margin-bottom: 15px;
    }

    form {
      padding: 0;
      height: 350px;
      display: flex;
      margin-top: 15px;
      flex-direction: column;
    }

    button {
      margin-top: auto;
      svg {
        margin-left: 10px;
      }
    }
  `,
};
