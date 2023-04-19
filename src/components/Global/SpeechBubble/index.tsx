import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { Color } from "../../../pages/types";

interface SpeechBubbleProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: Color;
  left?: number;
  top?: number;
  position?: "fixed" | "absolute";
  unit?: "px" | "%";
}

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  children,
  ...props
}) => {
  return <Style.Container {...props}>{children}</Style.Container>;
};

const greenVStyles = css`
  background: var(--green-600);
  color: white;
  filter: drop-shadow(0px 2px 10px rgba(32, 173, 103, 0.3));

  &:after {
    background: var(--green-600);
  }

  &:hover,
  &:hover:after {
    background: var(--green-700);
    filter: drop-shadow(0px 8px 15px rgba(25, 139, 83, 0.3));
  }

  &:active,
  &:active:after {
    background: var(--green-600);
    filter: drop-shadow(0px 2px 10px rgba(32, 173, 103, 0.3));
  }
`;

const orangeVStyles = css`
  background: var(--orange-600);
  color: white;
  filter: drop-shadow(0px 2px 10px rgba(246, 83, 33, 0.3));

  &:after {
    background: var(--orange-600);
  }

  &:hover,
  &:hover:after {
    background: var(--orange-700);
    filter: drop-shadow(0px 8px 15px rgba(246, 83, 33, 0.3));
  }

  &:active,
  &:active:after {
    background: var(--orange-600);
    filter: drop-shadow(0px 2px 10px rgba(246, 83, 33, 0.3));
  }
`;

const redVStyles = css`
  background: var(--red-600);
  color: white;
  filter: drop-shadow(0px 2px 10px rgba(182, 34, 23, 0.3));

  &:after {
    background: var(--red-600);
  }

  &:hover,
  &:hover:after {
    background: var(--red-700);
    filter: drop-shadow(0px 8px 15px rgba(145, 27, 19, 0.3));
  }

  &:active,
  &:active:after {
    background: var(--red-600);
    filter: drop-shadow(0px 2px 10px rgba(182, 34, 23, 0.3));
  }
`;

const blueVStyles = css`
  background: var(--blue-600);
  color: white;
  filter: drop-shadow(0px 2px 10px rgba(0, 117, 189, 0.3));

  &:after {
    background: var(--blue-600);
  }

  &:hover,
  &:hover:after {
    background: var(--blue-700);
    filter: drop-shadow(0px 8px 15px rgba(0, 103, 166, 0.3));
  }

  &:active,
  &:active:after {
    background: var(--blue-600);
    filter: drop-shadow(0px 2px 10px rgba(0, 117, 189, 0.3));
  }
`;

const neutralVStyles = css`
  background: #ffffff;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.3));

  &:after {
    background: #ffffff;
  }

  &:hover,
  &:hover:after {
    background: var(--neutral-100);
    filter: drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.3));
  }

  &:active,
  &:active:after {
    background: #ffffff;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.3));
  }
`;

function getButtonVariant(props: SpeechBubbleProps) {
  const { variant = "green" } = props;
  switch (variant) {
    case "neutral":
      return neutralVStyles;
    case "blue":
      return blueVStyles;
    case "green":
      return greenVStyles;
    case "red":
      return redVStyles;
    default:
      return orangeVStyles;
  }
}

const Style = {
  Container: styled.button`
    border-radius: 0.5rem;
    padding: 14px 1rem;
    white-space: nowrap;
    position: ${({ position = "absolute" }) => position};
    border: none;
    left: ${({ left = 0, unit = "px" }) => `${left}${unit}`};
    top: ${({ top = 0, unit = "px" }) => `${top}${unit}`};

    &:after {
      position: absolute;
      content: "";
      width: 30px;
      height: 28px;
      top: 90%;
      left: 50%;
      transform: translate(-50%);
      clip-path: polygon(0% 0%, 100% 0%, 56% 96%, 50% 97%, 44% 96%, 0% 0%);
    }
    ${getButtonVariant}
  `,
};
