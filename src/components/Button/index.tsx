import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
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
  icon?: string | JSX.Element;
  iconPosition?: string;
  dontRotate?: boolean;
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
      {icon &&
        typeof icon === "string" &&
        (iconPosition === "left" || !iconPosition) && <Icon name={icon} />}
      <div className="btn-content">{children}</div>
      {icon &&
        typeof icon === "string" &&
        (iconPosition === "right" || !iconPosition) && <Icon name={icon} />}
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
    transform: translateY(-3px);
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
    transform: translateY(-3px);
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
  box-shadow: 0px 4px 5px rgba(170, 137, 0, 0.3);
  color: var(--neutral-800);

  &:hover {
    box-shadow: 0px 9px 8px rgba(170, 137, 0, 0.3);
    transform: translateY(-3px);
  }

  &:active {
    background: linear-gradient(
      177.73deg,
      var(--yellow-500) 1.81%,
      #f19100 98.01%
    );
    box-shadow: 0px 5px 15px rgba(170, 137, 0, 0.3);
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

  &:hover {
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    transition: 0.2s all ease-in-out;
  }

  &:disabled {
    color: var(--neutral-400);
  }
`;

const smallSStyles = css`
  font-size: ${convertToRelativeUnit(16, "vh")};
  padding: ${convertToRelativeUnit(13, "vh")} ${convertToRelativeUnit(16, "vw")};

  .btn-content {
    padding: 0px ${convertToRelativeUnit(8, "vw")};
  }
`;

const mediumSStyles = css`
  font-size: ${convertToRelativeUnit(16, "vh")};
  padding: ${convertToRelativeUnit(12, "vh")} ${convertToRelativeUnit(18, "vw")};

  .btn-content {
    padding: 0px ${convertToRelativeUnit(12, "vw")};
  }
`;

const largeSStyles = css`
  font-size: ${convertToRelativeUnit(18, "vh")};
  padding: ${convertToRelativeUnit(14, "vh")} ${convertToRelativeUnit(20, "vw")};

  .btn-content {
    padding: 0px ${convertToRelativeUnit(16, "vw")};
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

function getButtonSVGAnim(props: ButtonProps) {
  const { iconPosition } = props;
  let rotateAngle = "0deg";

  if (iconPosition === "left") {
    rotateAngle = "45deg";
  } else if (iconPosition === "right") {
    rotateAngle = "-45deg";
  }

  return css`
    svg {
      transform: rotate(${rotateAngle});
      transition: transform 0.2s ease-out;
    }
  `;
}

const defaultButtonStyles = css`
  font-family: "Noir Std";
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 125%;
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.3s ease-out, color 0.3s ease-in,
    background 0.3s linear, transform 0.2s ease-in-out;

  .btn-content {
    display: flex;
    align-items: center;
  }

  &:hover {
    svg {
      transform: rotate(0deg);
    }
  }

  img {
    width: ${convertToRelativeUnit(24, "vw")};
    height: ${convertToRelativeUnit(24, "vh")};
  }

  ${getButtonSVGAnim}
  ${getButtonVariant}
  ${getButtonSize}
  ${checkFullWidth}
`;

export const Style = {
  Button: styled.button`
    ${defaultButtonStyles}
  `,

  Link: styled(Link)`
    ${defaultButtonStyles}
  `,
};
