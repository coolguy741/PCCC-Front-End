import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SignInSecurity } from "../../../components/Auth/SignInSecurity/signInSecurity";
import { BackButton } from "../../../components/Global/BackButton";
import { AppleBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { animationProps } from "../../../styles/animations/auth";

export const SecurityQuestionsPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <span className="auth-breadcrumb" onClick={() => navigate("/signin")}>
        <BackButton onClick={() => navigate("/signin")} />
      </span>
      <SignInSecurity />

      <div className="auth-image">
        <AnimatePresence mode="wait" initial={false}>
          <AppleBG key="security" {...animationProps} />
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
