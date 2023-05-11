import { useNavigate } from "react-router-dom";
import { ForgotForm } from "../../../components/Auth/ForgotForm";
import { BackButton } from "../../../components/Global/BackButton";
import { AppleBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { useSignInStore } from "../../../stores/signInStore";
import { animationProps } from "../../../styles/animations/auth";

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
      <span className="auth-breadcrumb">
        <BackButton onClick={clickHandler} />
      </span>

      <ForgotForm key="forgot" />
      <AppleBG key="forgot" layout {...animationProps} />
    </AuthLayout>
  );
};
