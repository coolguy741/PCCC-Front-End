import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { EducatorRecovery } from "../../../components/Auth/EducatorRecovery";
import { RoleGate } from "../../../components/Auth/RoleGate";
import { SecurityQuestions } from "../../../components/Auth/SecurityQuestions";
import { SignUpForm } from "../../../components/Auth/SignUpForm";
import {
  AppleBG,
  DirectionLeft,
  GrapeBG,
  LemonBG,
  OrangeBG,
} from "../../../components/Icons";
import { StepsForSignUp, useSignUpStore } from "../../../stores/signUpStore";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";

function switchSignUpView(step: StepsForSignUp) {
  switch (step) {
    case "age":
      return <AgeGate key="age" />;
    case "role":
      return <RoleGate key="role" />;
    case "input-information":
      return <SignUpForm key="input-information" />;
    case "input-security":
      return <SecurityQuestions key="input-security" />;
    case "educator-recovery":
      return <EducatorRecovery />;
    default:
      return <AgeGate key="age" />;
  }
}

function switchSignUpBG(step: StepsForSignUp) {
  switch (step) {
    case "age":
      return <LemonBG />;
    case "role":
      return <GrapeBG />;
    case "input-information":
      return <AppleBG />;
    case "input-security":
      return <GrapeBG />;
    case "educator-recovery":
      return <OrangeBG />;
    default:
      return <LemonBG />;
  }
}

export const SignUpPage = () => {
  const currentStep = useSignUpStore((state) => state.currentStep);

  return (
    <Style.Container>
      <span className="sign-up-breadcrumb">
        <DirectionLeft />
        Back
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {switchSignUpView(currentStep)}
      </AnimatePresence>

      <div className="auth-image">{switchSignUpBG(currentStep)}</div>
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

    .sign-up-breadcrumb {
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

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }

    .auth-image {
      position: absolute;
      bottom: -10px;
      left: 0;
      z-index: 0;
      max-width: 30%;

      svg {
        width: 100%;
      }
    }

    main,
    form {
      z-index: 1;
    }

    ${() => animatedbackgroundGradient("#c4e8ff", "#fff9e0")}
  `,
};
