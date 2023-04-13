import { useState } from "react";
import styled from "styled-components";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { RoleGate } from "../../../components/Auth/RoleGate";
import { SignUpForm } from "../../../components/Auth/SignUpForm";
import { DirectionLeft } from "../../../components/Icons";
import { StepsForSignUp, useSignUpStore } from "../../../stores/signUpStore";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";

function switchSignUpView(step: StepsForSignUp) {
  switch (step) {
    case "age":
      return <AgeGate />;
    case "role":
      return <RoleGate />;
    case "input-information":
      return <SignUpForm />;
    default:
      return <AgeGate />;
  }
}

export const SignUpPage = () => {
  const [nav, setNav] = useState(0);
  const [eng, useEng] = useState(true);
  const currentStep = useSignUpStore((state) => state.currentStep);

  return (
    <Style.Container>
      <span className="sign-up-breadcrump">
        <DirectionLeft />
        Back
      </span>
      {switchSignUpView(currentStep)}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    position: relative;
    padding: 32px;
    padding-top: 108px;

    .sign-up-breadcrump {
      font-family: "Noir Std";
      position: absolute;
      left: 32px;
      top: 162px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      display: flex;
      align-items: center;
    }

    ${() => animatedbackgroundGradient("#c4e8ff", "#fff9e0")}
  `,
};
