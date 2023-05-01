import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../../components/Auth/SignInForm";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { BackButton } from "../../../components/Global/BackButton";
import { AppleBG, OrangeBG } from "../../../components/Icons";
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
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <BackButton onClick={() => navigate("/")} />
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <SignInForm key="login" />
      </AnimatePresence>

      <div className="auth-image">
        <AnimatePresence mode="wait" initial={false}>
          <OrangeBG key="login" {...rightSideAnimationProps} />
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
