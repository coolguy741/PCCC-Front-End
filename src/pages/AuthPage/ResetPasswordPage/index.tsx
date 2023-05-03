import { useNavigate } from "react-router-dom";
import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { BackButton } from "../../../components/Global/BackButton";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <BackButton />
      </span>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
