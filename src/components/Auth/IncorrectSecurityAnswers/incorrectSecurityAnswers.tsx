import { motion } from "framer-motion";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
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
    width: ${convertToRelativeUnit(500, "vw")};
    height: auto;

    h1 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(25, "vh")};
      line-height: 125%;
      margin-bottom: ${convertToRelativeUnit(24, "vh")};
    }

    p {
      font-weight: 500;
      font-size: ${convertToRelativeUnit(16, "vh")};
      line-height: 125%;
      color: var(--neutral-700);
    }

    button {
      margin-top: ${convertToRelativeUnit(40, "vh")};
    }
  `,
};
