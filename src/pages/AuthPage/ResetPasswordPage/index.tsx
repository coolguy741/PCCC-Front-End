import { useNavigate } from "react-router-dom";
import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { BackButton } from "../../../components/Global/BackButton";
import { OrangeBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { rightSideAnimationProps } from "../../../styles/animations/auth";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <BackButton />
      </span>
      <div className="auth-image">
        <OrangeBG key="educator-recovery" {...rightSideAnimationProps} />
      </div>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
