import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { EducatorRecovery } from "../../../components/Auth/EducatorRecovery";
import { RoleGate } from "../../../components/Auth/RoleGate";
import { SecurityQuestions } from "../../../components/Auth/SecurityQuestions";
import { SignUpForm } from "../../../components/Auth/SignUpForm";
import { BackButton } from "../../../components/Global/BackButton";
import { AppleBG, GrapeBG, LemonBG, OrangeBG } from "../../../components/Icons";
import { useSignUpStore } from "../../../stores/signUpStore";
import {
  animationProps,
  rightSideAnimationProps,
} from "../../../styles/animations/auth";

const SIGN_UP_VIEW_ARR = [
  <AgeGate key="age" />,
  <RoleGate key="role" />,
  <SignUpForm key="input-information" />,
  <SecurityQuestions key="input-security" />,
  <EducatorRecovery />,
];

const SIGN_UP_BG_ARR = [
  <LemonBG key="age" {...animationProps} />,
  <GrapeBG key="role" {...animationProps} />,
  <AppleBG key="input-information" {...animationProps} />,
  <GrapeBG key="input-security" {...animationProps} />,
  <OrangeBG key="educator-recovery" {...rightSideAnimationProps} />,
];

export const SignUpPage = () => {
  const currentStep = useSignUpStore((state) => state.currentStep);
  const changeStep = useSignUpStore((state) => state.changeStep);
  const over18 = useSignUpStore((state) => state.over18);

  const navigate = useNavigate();

  const clickHandler = () => {
    if (currentStep === 0) {
      navigate("/");
    } else if (currentStep === 2 && !over18) {
      changeStep(0);
    } else {
      changeStep(currentStep - 1);
    }
  };

  return (
    <>
      <span className="auth-breadcrumb">
        <BackButton onClick={clickHandler} />
      </span>
      <AnimatePresence mode="wait">
        {SIGN_UP_VIEW_ARR[currentStep]}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {SIGN_UP_BG_ARR[currentStep]}
      </AnimatePresence>
    </>
  );
};
