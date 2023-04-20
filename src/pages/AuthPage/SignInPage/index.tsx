import { AnimatePresence } from "framer-motion";
import { SignInForm } from "../../../components/Auth/SignInForm";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { AppleBG, ArrowLeft, OrangeBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { useSignInStore } from "../../../stores/signInStore";
import {
  animationProps,
  rightSideAnimationProps,
} from "../../../styles/animations/auth";

const SIGN_IN_VIEW_ARR = [
  <SignInForm key="login" />,
  <SignInSecurity key="security" />,
];

const SIGN_IN_BG_ARR = [
  <OrangeBG key="login" {...rightSideAnimationProps} />,
  <AppleBG key="security" {...animationProps} />,
];

export const SignInPage = () => {
  const currentStep = useSignInStore((state) => state.currentStep);
  const changeStep = useSignInStore((state) => state.changeStep);

  return (
    <AuthLayout>
      <span
        className="auth-breadcrumb"
        onClick={() => changeStep(currentStep - 1)}
      >
        <ArrowLeft />
        Back
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {SIGN_IN_VIEW_ARR[currentStep]}
      </AnimatePresence>

      <div className="auth-image">
        <AnimatePresence mode="wait" initial={false}>
          {SIGN_IN_BG_ARR[currentStep]}
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
