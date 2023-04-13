import React from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "orange" | "yellow" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps<As extends React.ElementType = "button"> = {
  className?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  as?: As;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: (e: any) => void;
};

function ForwardedButton<
  T extends Element = HTMLButtonElement,
  As extends React.ElementType = "button",
>({ as, children, ...props }: ButtonProps<As>, ref: React.ForwardedRef<T>) {
  const Component: React.ElementType = as ?? "button";

  return (
    <Style.Container {...props} ref={ref} forwardedAs={Component}>
      {children}
    </Style.Container>
  );
}

// Basic accessible button component.

export const Button = React.forwardRef(ForwardedButton) as <
  T extends Element = HTMLButtonElement,
  As extends React.ElementType = "button",
>(
  props: ButtonProps<As> & { ref?: React.Ref<T> },
) => React.ReactElement | null;

export default Button;

const orangeVStyles = css`
  background: linear-gradient(109.03deg, #f87c56 3.03%, #f65321 103.97%);
  color: white;
  box-shadow: 0px 4px 5px rgba(248, 124, 86, 0.4);

  &:hover {
    box-shadow: 0px 9px 8px rgba(248, 124, 86, 0.4);
  }

  &:active {
    background: linear-gradient(177.73deg, #f65321 1.81%, #b62217 98.01%);
    box-shadow: 0px 5px 15px rgba(214, 57, 9, 0.4);
  }

  &:disabled {
    background: #c2ced6;
    box-shadow: 0px 5px 15px rgba(141, 141, 141, 0.3);
  }
`;

const yellowVStyles = css`
  background: linear-gradient(182.85deg, #ffe166 2.47%, #eabc00 97.72%);
  box-shadow: 0px 4px 5px rgba(255, 209, 54, 0.4);
  color: white;

  &:hover {
    box-shadow: 0px 9px 8px rgba(255, 217, 89, 0.4);
  }

  &:active {
    background: linear-gradient(177.73deg, #f3d03e 1.81%, #f19100 98.01%);
    box-shadow: 0px 5px 15px rgba(255, 207, 47, 0.4);
  }

  &:disabled {
    background: #c2ced6;
    box-shadow: 0px 5px 15px rgba(141, 141, 141, 0.3);
  }
`;

const ghostVStyles = css`
  background: transparent;
  color: black;

  svg {
    path {
      fill: black;
    }
  }

  &:disabled {
    color: #8b8b8b;
  }
`;

const smallSStyles = css`
  width: 130px;
  height: 44px;
  font-size: 16px;
  line-height: 24px;
`;

const mediumSStyles = css`
  width: 154px;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
`;

const largeSStyles = css`
  width: 176px;
  height: 52px;
  font-size: 18px;
  line-height: 24px;
`;

function getButtonVariant(props: ButtonProps) {
  const { variant } = props;
  switch (variant) {
    case "ghost":
      return ghostVStyles;
    case "yellow":
      return yellowVStyles;
    case "orange":
    default:
      return orangeVStyles;
  }
}

function checkFullWidth(props: ButtonProps) {
  const { fullWidth } = props;
  if (fullWidth) {
    return css`
      width: 100%;
    `;
  }
}

function getButtonSize(props: ButtonProps) {
  const { size } = props;
  switch (size) {
    case "small":
      return smallSStyles;
    case "large":
      return largeSStyles;
    case "medium":
    default:
      return mediumSStyles;
  }
}

export const Style = {
  Container: styled.button`
    font-family: "Noir Std";
    font-style: normal;
    font-weight: 500;
    letter-spacing: -0.02em;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: box-shadow 0.3s ease-out, color 0.3s ease-in,
      background 0.3s linear;
    border: 0;

    ${getButtonVariant}
    ${getButtonSize}
    ${checkFullWidth}
  `,
};
