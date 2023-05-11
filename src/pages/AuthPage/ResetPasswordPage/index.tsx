import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { BackButton } from "../../../components/Global/BackButton";
import { AppleBG } from "../../../components/Icons";
import { animationProps } from "../../../styles/animations/auth";

export const ResetPasswordPage = () => {
  return (
    <>
      <span className="auth-breadcrumb">
        <BackButton />
      </span>
      <ResetPasswordForm />
      <AppleBG key="forgot" layout {...animationProps} />
    </>
  );
};
