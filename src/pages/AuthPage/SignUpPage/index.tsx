import { AnimatePresence } from "framer-motion";
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
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { StepsForSignUp, useSignUpStore } from "../../../stores/signUpStore";

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

const educatorAnimationProps = {
  style: {
    transformOrigin: "bottom right",
  },
  initial: { opacity: 0, x: "100vw", scale: 0.75 },
  animate: {
    opacity: 1,
    x: "70vw",
    scale: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
  exit: { opacity: 0, x: "100vw", scale: 0.75 },
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
      return <OrangeBG key="educator-recovery" {...educatorAnimationProps} />;
    default:
      return <LemonBG key="default" {...animationProps} />;
  }
}

export const SignUpPage = () => {
  const currentStep = useSignUpStore((state) => state.currentStep);

  return (
    <AuthLayout>
      <span className="sign-up-breadcrumb">
        <DirectionLeft />
        Back
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {switchSignUpView(currentStep)}
      </AnimatePresence>

      <div className={`auth-image ${currentStep}`}>
        <AnimatePresence mode="wait" initial={false}>
          {switchSignUpBG(currentStep)}
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
