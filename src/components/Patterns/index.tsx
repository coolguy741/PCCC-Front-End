import { motion } from "framer-motion";
import styled from "styled-components";
import { patternArray } from "../../hooks/usePatterns";
import { PatternProps } from "./types";

export function Patterns(props: PatternProps) {
  const { pattern = 0, className, children } = props;
  return (
    <Style.Container
      pattern={pattern}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Style.Container>
  );
}

const Style = {
  Container: styled(motion.div)<PatternProps>`
    height: 100%;
    width: 100%;
    background: ${({ pattern }) =>
      `url(/patterns/${patternArray[pattern]}.png)`};
    background-position: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
    background-size: 350%;
    transition: background-image 0.3s ease-in-out;
  `,
};
