import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
import { useSignUpStore } from "../../../stores/signUpStore";
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
  <OrangeBG key="educator-recovery" {...educatorAnimationProps} />,
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
    <Style.Container>
      <span className="sign-up-breadcrumb" onClick={clickHandler}>
        <DirectionLeft />
        Back
      </span>
      <AnimatePresence mode="wait" initial={false}>
        {SIGN_UP_VIEW_ARR[currentStep]}
      </AnimatePresence>

      <div className={`auth-image ${currentStep}`}>
        <AnimatePresence mode="wait" initial={false}>
          {SIGN_UP_BG_ARR[currentStep]}
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
