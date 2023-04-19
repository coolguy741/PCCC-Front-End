import { AnimatePresence } from "framer-motion";
import { SignInForm } from "../../../components/Auth/SignInForm";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { AppleBG, DirectionLeft, OrangeBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { useSignInStore } from "../../../stores/signInStore";

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

const rightSideAnimationProps = {
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
        <DirectionLeft />
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
