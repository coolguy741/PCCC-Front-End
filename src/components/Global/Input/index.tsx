import styled from "styled-components";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ width, height, ...props }: InputProps) => {
  return <Style.Input width={width} height={height} {...props} />;
};

const Style = {
  Input: styled.input<InputProps>`
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
    background: var(--white);
    box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 5px 15px;
    border: 2px solid white;
    transition: box-shadow 0.3s ease-out, border 0.3s ease-in;
    font-size: 16px;
    line-height: 24px;
    color: #1d2433;
    cursor: pointer;

    &:focus {
      border: 2px solid #0084d5;
      box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1),
        0px 0px 0px 4px rgba(31, 81, 229, 0.08);
    }

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      color: rgba(29, 36, 51, 0.8);
    }

    &:active {
      border: 2px solid #0084d5;
    }

    &:disabled {
      background: #ececec;
      border: 1px solid #e1e6ef;
      box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1);
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
        outline: max(2px, 0.15em) solid #0084d5;
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
