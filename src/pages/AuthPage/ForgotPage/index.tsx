import { AnimatePresence } from "framer-motion";
import { ForgotForm } from "../../../components/Auth/ForgotForm";
import { ArrowLeft, OrangeBG } from "../../../components/Icons";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { rightSideAnimationProps } from "../../../styles/animations/auth";

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <ArrowLeft />
        Back
      </span>
      <ForgotForm />

      <div className="auth-image">
        <AnimatePresence mode="wait" initial={false}>
          <OrangeBG key="login" {...rightSideAnimationProps} />,
        </AnimatePresence>
      </div>
    </AuthLayout>
  );
};
