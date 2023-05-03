import { useNavigate } from "react-router-dom";
import { ForgotForm } from "../../../components/Auth/ForgotForm";
import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { AppleBG, ArrowLeft, OrangeBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { useSignInStore } from "../../../stores/signInStore";
import { rightSideAnimationProps } from "../../../styles/animations/auth";

const FORGOT_VIEW_ARR = [
  <ForgotForm key="forgot" />,
  <SignInSecurity key="security" />,
  <ResetPasswordForm />,
];

const FORGOT_BG_ARR = [
  <OrangeBG key="login" layout {...rightSideAnimationProps} />,
  <AppleBG key="forgot" layout />,
  <OrangeBG />,
];

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const currentStep = useSignInStore((state) => state.currentStep);
  const changeStep = useSignInStore((state) => state.changeStep);

  const clickHandler = () => {
    if (currentStep === 0) {
      navigate("/signin");
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
      {FORGOT_VIEW_ARR[currentStep]}

      <div className="auth-image">{FORGOT_BG_ARR[currentStep]}</div>
    </AuthLayout>
  );
};
