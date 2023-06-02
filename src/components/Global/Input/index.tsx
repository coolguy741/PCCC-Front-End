import { forwardRef, Ref } from "react";
import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  ({ width, height, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Style.Input ref={ref} width={width} height={height} {...props} />;
  },
);

const Style = {
  Input: styled.input<InputProps>`
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "5vh")};
    background: var(--white);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: ${conv(5, "vh")} ${conv(15, "vh")};
    border: 1px solid white;
    transition: box-shadow 0.3s ease-out, border-color 0.3s ease-in;
    font-size: ${conv(16, "vh")};
    line-height: 125%;
    color: #1d2433;
    cursor: pointer;

    &:focus {
      border: ${conv(2, "vh")} solid var(--blue-500);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1),
        0px 0px 0px 4px rgba(31, 81, 229, 0.08);
    }

    &::placeholder {
      font-size: 100%;
      line-height: 125%;
      color: rgba(29, 36, 51, 0.8);
    }

    &:active {
      border: ${conv(2, "vh")} solid var(--blue-500);
    }

    &:disabled {
      background: var(--neutral-100);
      border: ${conv(1, "vh")} solid #e1e6ef;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    }

    &.has-error {
      border-color: var(--red-300);
      padding: ${conv(6, "vh")} ${conv(16, "vw")};
      border-width: ${conv(1, "vw")};
      outline-color: transparent;

      &:focus,
      &:active {
        padding: ${conv(5, "vh")} ${conv(15, "vw")};
        border-color: var(--red-500);
        border-width: ${conv(2, "vw")};
      }
    }

    &[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      padding: 0;
      margin: 0;
      width: ${conv(20, "vw")};
      height: ${conv(20, "vh")};
      border-radius: 4px;
      border: ${conv(3, "vh")} solid var(--blue-300);
      position: relative;
      display: grid;
      place-items: center;

      &:checked::before {
        opacity: 1;
      }

      &::before {
        content: "";
        width: ${conv(12, "vw")};
        height: ${conv(12, "vh")};
        background: var(--blue-500);
        position: absolute;
        opacity: 0;
        transition: opacity 0.3s linear;
      }

      &:focus {
        border: ${conv(2, "vh")} solid white;
        outline: max(2px, 0.15em) solid var(--blue-500);
        outline-offset: max(2px, 0.15em);
      }
    }

    /* CSS to hide arrows for numeric input */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    &[type="number"] {
      -moz-appearance: textfield; /* Firefox */
      appearance: textfield;
    }
  `,
};
