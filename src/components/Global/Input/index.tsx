import { forwardRef, Ref } from "react";
import styled from "styled-components";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  ({ width, height, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return <Style.Input ref={ref} width={width} height={height} {...props} />;
  },
);

const Style = {
  Input: styled.input<InputProps>`
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
    background: var(--white);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 5px 15px;
    border: 1px solid white;
    transition: box-shadow 0.3s ease-out, border-color 0.3s ease-in;
    font-size: 16px;
    line-height: 24px;
    color: #1d2433;
    cursor: pointer;

    &:focus {
      border: 2px solid var(--blue-500);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1),
        0px 0px 0px 4px rgba(31, 81, 229, 0.08);
    }

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      color: rgba(29, 36, 51, 0.8);
    }

    &:active {
      border: 2px solid var(--blue-500);
    }

    &:disabled {
      background: var(--neutral-100);
      border: 1px solid #e1e6ef;
      box-shadow: 0px4px 16px rgba(0, 0, 0, 0.1);
    }

    &.has-error {
      border-color: var(--red-300);
      padding: 6px 16px;
      border-width: 1px;
      outline-color: transparent;

      &:focus,
      &:active {
        padding: 5px 15px;
        border-color: var(--red-500);
        border-width: 2px;
      }
    }

    &[type="radio"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: #fff;
      padding: 0;
      margin: 0;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 3px solid var(--blue-300);
      position: relative;
      display: grid;
      place-items: center;

      &:checked::before {
        opacity: 1;
      }

      &::before {
        content: "";
        width: 12px;
        height: 12px;
        background: var(--blue-500);
        position: absolute;
        opacity: 0;
        transition: opacity 0.3s linear;
      }

      &:focus {
        border: 2px solid white;
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
