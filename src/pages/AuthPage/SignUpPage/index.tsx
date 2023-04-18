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

const animationProps = {
  style: {
    transformOrigin: "bottom left",
  },
  initial: { opacity: 0, x: "-95%", scale: 0.75 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
  exit: { opacity: 0, x: "-95%", scale: 0.75 },
  transition: { ease: "linear" },
};

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
      return <LemonBG key="age" {...animationProps} />;
    case "role":
      return <GrapeBG key="role" {...animationProps} />;
    case "input-information":
      return <AppleBG key="input-information" {...animationProps} />;
    case "input-security":
      return <GrapeBG key="input-security" {...animationProps} />;
    case "educator-recovery":
      return <OrangeBG key="educator-recovery" {...animationProps} />;
    default:
      return <LemonBG key="default" {...animationProps} />;
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

      <div className="auth-image">
        <AnimatePresence mode="wait" initial={false}>
          {switchSignUpBG(currentStep)}
        </AnimatePresence>
      </div>
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
    perspective: 1000px;

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
      perspective: 500px;

      svg {
        width: 100%;
      }
    }

    main,
    form {
      z-index: 1;
      perspective: 250px;
    }

    ${() => animatedbackgroundGradient("#c4e8ff", "#fff9e0")}
  `,
};
