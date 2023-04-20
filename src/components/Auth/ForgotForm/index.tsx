import { motion } from "framer-motion";
import styled from "styled-components";
import { useUserStore } from "../../../stores/userStore";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";

export const ForgotForm = () => {
  const { forgetType } = useUserStore();
  function placeholderForSubmit() {
    return "clicked";
  }

  const title =
    forgetType === "password" ? "Forgot Password?" : "Forgot Username?";
  const subtitle =
    forgetType === "password"
      ? "Enter your Username so we can identify your account and provide you with your security questions."
      : "Enter the email that belongs to the account and we will send your username to you ";
  const label = forgetType === "password" ? "Username" : "Email";

  return (
    <Style.Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <form onSubmit={placeholderForSubmit}>
        <fieldset>
          <label>{label}</label>
          <Input height="52px" />
        </fieldset>
        {forgetType === "username" && (
          <span>
            If you’re not a professional user, contact your educator for
            assistance
          </span>
        )}
        <Button fullWidth>Submit</Button>
      </form>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)`
    ${glassBackground};
    width: 550px;

    h1 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      color: #2e2e2e;
      margin-bottom: 24px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #505050;
      margin-bottom: 32px;
    }

    fieldset {
      label {
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: #505050;
      }

      input {
        margin: 12px 0;
      }
    }

    span {
      font-size: 15px;
      line-height: 20px;
      margin-top: 12px;
      color: #646464;
    }

    button {
      margin-top: 32px;
    }
  `,
};
