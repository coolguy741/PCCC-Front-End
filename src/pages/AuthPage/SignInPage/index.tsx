import { AnimatePresence } from "framer-motion";
import { SignInForm } from "../../../components/Auth/SignInForm";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { AppleBG, DirectionLeft, OrangeBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { StepsForSignIn, useSignInStore } from "../../../stores/signInStore";

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

function switchSignInView(step: StepsForSignIn) {
  switch (step) {
    case "login":
      return <SignInForm key="login" />;
    case "security":
      return <SignInSecurity key="security" />;
    default:
      return <SignInForm key="login" />;
  }
}

function switchSignInBG(step: StepsForSignIn) {
  switch (step) {
    case "login":
      return <OrangeBG key="login" {...rightSideAnimationProps} />;
    case "security":
      return <AppleBG key="security" {...animationProps} />;
    default:
      return <OrangeBG key="login" {...rightSideAnimationProps} />;
  }
}

export const SignInPage = () => {
  const currentStep = useSignInStore((state) => state.currentStep);

  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <DirectionLeft />
        Back
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {switchSignInView(currentStep)}
      </AnimatePresence>

      <div className={`auth-image ${currentStep}`}>
        <AnimatePresence mode="wait" initial={false}>
          {switchSignInBG(currentStep)}
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
