import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Icon } from "../Global/Icon";

export type ButtonVariant = "orange" | "yellow" | "ghost" | "green";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  size?: ButtonSize;
  to?: string;
  fullWidth?: boolean;
  icon?: string;
  iconPosition?: string;
}

function Button({
  children,
  to,
  onClick,
  icon,
  iconPosition,
  ...props
}: ButtonProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    to && navigate(to);
  };

  return (
    <Style.Button onClick={to ? handleNavigate : onClick} {...props}>
      {iconPosition === "left" && icon && <Icon name={icon} />}
      <p>{children}</p>
      {iconPosition === "right" && icon && <Icon name={icon} />}
    </Style.Button>
  );
}

export default Button;

const orangeVStyles = css`
  background: linear-gradient(
    109.03deg,
    var(--orange-500) 3.03%,
    var(--orange-600) 103.97%
  );
  color: white;
  box-shadow: 0px 4px 5px rgba(248, 124, 86, 0.4);

  &:hover {
    box-shadow: 0px 9px 8px rgba(248, 124, 86, 0.4);
  }

  &:active {
    background: linear-gradient(
      177.73deg,
      var(--orange-600) 1.81%,
      var(--red-600) 98.01%
    );
    box-shadow: 0px 5px 15px rgba(214, 57, 9, 0.4);
  }

  &:disabled {
    background: #c2ced6;
    box-shadow: 0px 5px 15px rgba(141, 141, 141, 0.3);
  }
`;

const greenVStyles = css`
  background: linear-gradient(
    200deg,
    var(--green-500) 3.03%,
    var(--green-600) 103.97%
  );
  color: white;
  box-shadow: 0px 4px 5px var(--green-300);

  &:hover {
    box-shadow: 0px 9px 8px var(--green-300);
  }

  &:active {
    background: linear-gradient(
      177.73deg,
      var(--green-600) 1.81%,
      var(--green-700) 98.01%
    );
    box-shadow: 0px 5px 15px var(--green-500);
  }

  &:disabled {
    background: #c2ced6;
    box-shadow: 0px 5px 15px rgba(141, 141, 141, 0.3);
  }
`;

const yellowVStyles = css`
  background: linear-gradient(
    182.85deg,
    var(--yellow-300) 2.47%,
    var(--yellow-600) 97.72%
  );
  box-shadow: 0px 4px 5px rgba(255, 209, 54, 0.4);
  color: var(--neutral-800);

  &:hover {
    box-shadow: 0px 9px 8px rgba(170, 137, 0, 0.3);
  }

  &:active {
    background: linear-gradient(
      177.73deg,
      var(--yellow-500) 1.81%,
      #f19100 98.01%
    );
    box-shadow: 0px 5px 15px rgba(255, 207, 47, 0.4);
  }

  &:disabled {
    background: #c2ced6;
    box-shadow: 0px 5px 15px rgba(141, 141, 141, 0.3);
  }
`;

const ghostVStyles = css`
  background: transparent;
  color: var(--neutral-500);

  svg {
    path {
      fill: var(--neutral-500);
    }
  }

  &:disabled {
    color: var(--neutral-400);
  }
`;

const smallSStyles = css`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 16px;
  p {
    padding: 0px 8px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

const mediumSStyles = css`
  font-size: 16px;
  line-height: 24px;
  padding: 12px 18px;
  p {
    padding: 0px 12px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

const largeSStyles = css`
  font-size: 18px;
  line-height: 24px;
  padding: 14px 20px;
  p {
    padding: 0px 16px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

function getButtonVariant(props: ButtonProps) {
  const { variant } = props;
  switch (variant) {
    case "ghost":
      return ghostVStyles;
    case "yellow":
      return yellowVStyles;
    case "green":
      return greenVStyles;
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
  Button: styled.button`
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
    display: flex;

    ${getButtonVariant}
    ${getButtonSize}
    ${checkFullWidth}
  `,

  Link: styled(Link)`
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
