import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AgeGate } from "../../../components/Auth/AgeGate";
import { EducatorRecovery } from "../../../components/Auth/EducatorRecovery";
import { RoleGate } from "../../../components/Auth/RoleGate";
import { SecurityQuestions } from "../../../components/Auth/SecurityQuestions";
import { SignUpForm } from "../../../components/Auth/SignUpForm";
import {
  AppleBG,
  ArrowLeft,
  GrapeBG,
  LemonBG,
  OrangeBG,
} from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
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
    <AuthLayout>
      <span className="auth-breadcrumb" onClick={clickHandler}>
        <ArrowLeft />
        Back
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {SIGN_UP_VIEW_ARR[currentStep]}
      </AnimatePresence>

      <div className="auth-image">
        <AnimatePresence mode="wait" initial={false}>
          {SIGN_UP_BG_ARR[currentStep]}
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
