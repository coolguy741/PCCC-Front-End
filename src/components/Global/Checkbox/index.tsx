/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

export type CheckboxSize = "small" | "large";
export type CheckboxColor = "primary" | "book" | "green" | "orange" | "yellow";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  sizeOption?: CheckboxSize;
  colorOption?: CheckboxColor;
};

export const Checkbox = ({
  sizeOption = "large",
  colorOption = "primary",
  ...props
}: CheckboxProps) => {
  return (
    <Style.Input
      type="checkbox"
      sizeOption={sizeOption}
      colorOption={colorOption}
      {...props}
    />
  );
};

const Style = {
  Input: styled.input<CheckboxProps>`
    &[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      background-color: #fff;
      padding: 0;
      margin: 0;
      width: ${convertToRelativeUnit(20, "vh")};
      height: ${convertToRelativeUnit(20, "vh")};
      transform-origin: left center;
      scale: ${({ sizeOption }) => (sizeOption === "small" ? "1" : "1.6666")};
      border-radius: ${convertToRelativeUnit(4, "vh")};
      position: relative;
      display: grid;
      place-items: center;
      border: ${convertToRelativeUnit(2, "vh")} solid
        ${({ colorOption }) =>
          colorOption === "primary"
            ? "var(--blue-300)"
            : colorOption === "green"
            ? "var(--green-400)"
            : colorOption === "orange"
            ? "var(--orange-400)"
            : colorOption === "yellow"
            ? "var(--yellow-400)"
            : "#A59176"};
      border-radius: ${convertToRelativeUnit(4, "vh")};

      &:disabled {
        background: white;
        border: ${convertToRelativeUnit(2, "vh")} solid var(--neutral-400);
      }

      &:disabled:checked::before {
        opacity: 1;
        transition: opacity 0.3s linear;
        background: var(--neutral-400);
      }

      &:checked::before {
        opacity: 1;
        background: ${({ colorOption }) =>
          colorOption === "primary"
            ? "var(--blue-300)"
            : colorOption === "green"
            ? "var(--green-400)"
            : colorOption === "orange"
            ? "var(--orange-400)"
            : colorOption === "yellow"
            ? "var(--yellow-400)"
            : "#A59176"};
      }

      &::before {
        content: "";
        width: ${convertToRelativeUnit(12, "vh")};
        height: ${convertToRelativeUnit(12, "vh")};
        border-radius: ${convertToRelativeUnit(2, "vh")};
        background: white;
        position: absolute;
        opacity: 0;
        transition: opacity 0.3s linear;
      }
    }
  `,
};
