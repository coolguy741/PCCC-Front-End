import { forwardRef, Ref } from "react";
import styled from "styled-components";

type InputProps = React.InputHTMLAttributes<HTMLSelectElement>;
interface SelectProps extends InputProps {
  children: React.ReactNode;
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}

export const Select = forwardRef(
  (
    { children, width, height, onChange, value, ...props }: SelectProps,
    ref: Ref<HTMLFieldSetElement>,
  ) => {
    return (
      <Style.Container width={width} height={height} ref={ref}>
        <Style.Select
          onChange={onChange}
          value={value}
          height={height}
          {...props}
        >
          {children}
        </Style.Select>
      </Style.Container>
    );
  },
);

const Style = {
  Container: styled.fieldset<SelectProps>`
    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "100%")};
    position: relative;

    &::after {
      content: url("/icons/downSelect.svg");
      position: absolute;
      right: 15px;
      top: calc(21%);
      background-color: white;
      border-radius: 50%;
      padding: 5px;
      pointer-events: none;
    }
  `,
  Select: styled.select<SelectProps>`
    appearance: none;
    text-indent: 1px;
    text-overflow: "";
    -webkit-padding-end: 20px;
    -moz-padding-end: 20px;
    -webkit-padding-start: 15px;
    -moz-padding-start: 15px;
    background-color: white;
    height: ${({ height }) => (height ? height : "100%")};
    width: 100%;
    box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 16px;
    color: rgba(29, 36, 51, 0.8);
    position: relative;
    font-family: "Noir Std";

    &.has-error {
      border: 1px solid var(--red-300);
      padding: 6px 16px;
      outline-color: transparent;

      &:focus,
      &:active {
        padding: 5px 15px;
        border-color: var(--red-500);
        border-width: 2px;
      }
    }
  `,
};
