import { motion } from "framer-motion";
import styled from "styled-components";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";
import { Input } from "../../Global/Input";

export const ResetPasswordForm = () => {
  function placeholderForReset() {
    return "clicked";
  }
  return (
    <Style.Container onSubmit={placeholderForReset}>
      <h1>Password Reset</h1>
      <fieldset>
        <label>New Password</label>
        <Input type="username" width="55%" />
      </fieldset>
      <fieldset>
        <label>Retype New: Password</label>
        <Input type="password" width="55%" />
      </fieldset>
      <Button type="submit" fullWidth>
        Reset
      </Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.form)`
    ${glassBackground};
    width: 650px;
    height: auto;

    h1 {
      font-weight: 600;
      font-size: 33px;
      line-height: 40px;
      color: #2e2e2e;
      margin-bottom: 32px;
    }

    fieldset {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      justify-content: space-between;
      height: 52px;

      label {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #505050;
      }
    }

    button {
      margin-top: 40px;
    }
  `,
};
