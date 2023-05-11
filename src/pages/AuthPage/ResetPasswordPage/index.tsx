import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { BackButton } from "../../../components/Global/BackButton";
import { OrangeBG } from "../../../components/Icons";
import { rightSideAnimationProps } from "../../../styles/animations/auth";

export const ResetPasswordPage = () => {
  return (
    <>
      <span className="auth-breadcrumb">
        <BackButton />
      </span>

      <ResetPasswordForm />
      <OrangeBG key="educator-recovery" {...rightSideAnimationProps} />
    </>
  );
};
