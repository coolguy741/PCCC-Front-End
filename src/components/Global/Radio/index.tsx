/* eslint-disable prettier/prettier */
import styled from "styled-components";

export type RadioSize = "small" | "large";
export type RadioColor = "primary" | "book";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  sizeOption?: RadioSize;
  colorOption?: RadioColor;
};

export const Radio = ({
  sizeOption = "large",
  colorOption = "primary",
  ...props
}: RadioProps) => {
  return (
    <Style.Input
      type="radio"
      sizeOption={sizeOption}
      colorOption={colorOption}
      {...props}
    />
  );
};

const Style = {
  Input: styled.input<RadioProps>`
    width: 24px;
    height: 24px;
    padding: 2px;

    scale: ${({ sizeOption }) => (sizeOption === "small" ? "1" : "1.6666")};
    transform-origin: left center;

    &[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      padding: 0;
      margin: 0;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      position: relative;
      display: grid;
      place-items: center;
      border: 2px solid
        ${({ colorOption }) =>
          colorOption === "primary" ? "var(--blue-300)" : "#A59176"};
      border-radius: 4px;

      &:disabled {
        background: white;
        border: 2px solid var(--neutral-400);
      }

      &:disabled:checked::before {
        opacity: 1;
        border-radius: 2px;
        background: var(--neutral-400);
      }

      &:checked::before {
        opacity: 1;
        border-radius: 2px;
        background: ${({ colorOption }) =>
          colorOption === "primary" ? "var(--blue-400)" : "#D3BB90"};
      }

      &::before {
        content: "";
        width: 12px;
        height: 12px;
        background: white;
        position: absolute;
        opacity: 0;
        transition: opacity 0.3s linear;
      }
    }
  `,
};
