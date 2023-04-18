import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { RoleGate } from "../../../components/Auth/RoleGate";
import { SecurityQuestions } from "../../../components/Auth/SecurityQuestions";
import { SignUpForm } from "../../../components/Auth/SignUpForm";
import {
  AppleBG,
  DirectionLeft,
  GrapeBG,
  LemonBG,
} from "../../../components/Icons";
import { StepsForSignUp, useSignUpStore } from "../../../stores/signUpStore";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";

const Motion = {
  AgeGate: motion(AgeGate),
  RoleGate: motion(RoleGate),
  SignUpForm: motion(SignUpForm),
  SecurityQuestions: motion(SecurityQuestions),
};

function switchSignUpView(step: StepsForSignUp) {
  switch (step) {
    case "age":
      return (
        <Motion.AgeGate
          key="age"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        />
      );
    case "role":
      return <Motion.RoleGate key="role" exit={{ opacity: 0 }} />;
    case "input-information":
      return (
        <Motion.SignUpForm key="input-information" exit={{ opacity: 0 }} />
      );
    case "input-security":
      return (
        <Motion.SecurityQuestions key="input-security" exit={{ opacity: 0 }} />
      );
    default:
      return (
        <Motion.AgeGate
          key="age"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        />
      );
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
