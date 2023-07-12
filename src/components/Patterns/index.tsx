import styled from "styled-components";
import { patternArray } from "../../hooks/usePatterns";
import { PatternProps } from "./types";

export function Patterns(props: PatternProps) {
  const { pattern = 0, className, children } = props;
  return (
    <Style.Container pattern={pattern} className={className}>
      {children}
    </Style.Container>
  );
}

const Style = {
  Container: styled.div<PatternProps>`
    height: 100%;
    width: 100%;
    background: ${({ pattern }) =>
      `url(/patterns/${patternArray[pattern]}.png)`};
    background-position: center;
  `,
};
