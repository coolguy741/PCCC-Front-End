import { motion } from "framer-motion";
import styled from "styled-components";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Button from "../../Button";

export const IncorrectSecurityAnswers = () => {
  return (
    <Style.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Incorrect Security Answers</h1>
      <p>
        You’ve Answered two or more security questions wrong. Try again or
        notify your educator.
      </p>
      <Button fullWidth>Try Again</Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)`
    ${glassBackground};
    width: 500px;
    height: auto;

    h1 {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 24px;
    }

    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #505050;
    }

    button {
      margin-top: 40px;
    }
  `,
};
