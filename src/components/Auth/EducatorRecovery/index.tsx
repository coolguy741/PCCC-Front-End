import { motion } from "framer-motion";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

export function EducatorRecovery() {
  return (
    <Style.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Educator Code Recovery</h1>
      <p>Contact your school’s administrator to get your educator code </p>
      <p> Reach us at Lorem@Ipsum.com</p>
    </Style.Container>
  );
}

const Style = {
  Container: styled(motion.main)`
    max-width: 36%;
    height: auto;

    h1 {
      font-weight: 600;
      font-size: ${convertToRelativeUnit(36, "vh")};
      line-height: 125%;
      color: var(--neutral-900);
      margin-bottom: ${convertToRelativeUnit(24, "vh")};
    }

    p {
      font-size: ${convertToRelativeUnit(24, "vh")};
      line-height: 125%;
      color: var(--neutral-700);
      margin-bottom: ${convertToRelativeUnit(12, "vh")};
    }
  `,
};
