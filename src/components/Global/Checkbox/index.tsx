/* eslint-disable prettier/prettier */
import styled from "styled-components";

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
      background-color: #fff;
      padding: 0;
      margin: 0;
      width: 20px;
      height: 20px;
      transform-origin: left center;
      scale: ${({ sizeOption }) => (sizeOption === "small" ? "1" : "1.6666")};
      border-radius: 4px;
      position: relative;
      display: grid;
      place-items: center;
      border: 2px solid
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
      border-radius: 4px;

      &:disabled {
        background: white;
        border: 2px solid var(--neutral-400);
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
        width: 12px;
        height: 12px;
        border-radius: 2px;
        background: white;
        position: absolute;
        opacity: 0;
        transition: opacity 0.3s linear;
      }
    }
  `,
};
