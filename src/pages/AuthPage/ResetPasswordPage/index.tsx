import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { DirectionLeft } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";

export const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <DirectionLeft />
        Back
      </span>
      <ResetPasswordForm />
    </AuthLayout>
  );
};
