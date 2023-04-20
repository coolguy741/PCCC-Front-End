import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { ArrowLeft } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";

export const ResetPasswordPage = () => {
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
