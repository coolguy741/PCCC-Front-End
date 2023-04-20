import { useNavigate } from "react-router-dom";
import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { ArrowLeft } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <ArrowLeft />
        Back
      </span>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
