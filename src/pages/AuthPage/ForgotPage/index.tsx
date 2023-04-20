import { useEffect } from "react";
import { ForgotForm } from "../../../components/Auth/ForgotForm";
import { ArrowLeft } from "../../../components/Icons";
import { useAPI } from "../../../hooks/useAPI";
import { AuthLayout } from "../../../layouts/AuthLayout/authLayout";
import { useUserStore } from "../../../stores/userStore";

export const ForgotPasswordPage = () => {
  const { setSecurityQuestions } = useUserStore();

  const { api } = useAPI();

  const getQuestions = async () => {
    const { data } =
      await api.appCustomSecurityQuestionChoicesSecurityQuestionsList();

    setSecurityQuestions(data);

    return data;
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <AuthLayout>
      <span className="auth-breadcrumb">
        <ArrowLeft />
        Back
      </span>
      <ForgotForm />
    </AuthLayout>
  );
};
