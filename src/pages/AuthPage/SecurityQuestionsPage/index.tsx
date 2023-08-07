import { useNavigate } from "react-router-dom";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { BackButton } from "../../../components/Global/BackButton";
import { AppleBG } from "../../../components/Icons";
import { animationProps } from "../../../styles/animations/auth";

export const SecurityQuestionsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <span
        className="auth-breadcrumb"
        onClick={() => navigate("/signin/forgot-password")}
      >
        <BackButton onClick={() => navigate("/signin")} />
      </span>

      <SignInSecurity />
      <AppleBG key="security" {...animationProps} />
    </>
  );
};
