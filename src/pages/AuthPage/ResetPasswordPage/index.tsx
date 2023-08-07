import { useNavigate } from "react-router-dom";
import { ResetPasswordForm } from "../../../components/Auth/ResetPasswordForm";
import { BackButton } from "../../../components/Global/BackButton";
import { OrangeBG } from "../../../components/Icons";
import { rightSideAnimationProps } from "../../../styles/animations/auth";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <span className="auth-breadcrumb">
        <BackButton onClick={() => navigate("/signin/security-questions")} />
      </span>

      <ResetPasswordForm />
      <OrangeBG key="educator-recovery" {...rightSideAnimationProps} />
    </>
  );
};
