import { useNavigate } from "react-router-dom";
import { SignInForm } from "../../../components/Auth/SignInForm";
import { BackButton } from "../../../components/Global/BackButton";
import { OrangeBG } from "../../../components/Icons";
import { rightSideAnimationProps } from "../../../styles/animations/auth";

export const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <span className="auth-breadcrumb">
        <BackButton onClick={() => navigate("/")} />
      </span>
      <SignInForm key="login" />

      <OrangeBG key="login" layout {...rightSideAnimationProps} />
    </>
  );
};
