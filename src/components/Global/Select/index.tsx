import { forwardRef, Ref } from "react";
import styled from "styled-components";
import { convertToRelativeUnit as conv } from "../../../styles/helpers/convertToRelativeUnits";

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
    height: ${({ height }) => (height ? height : conv(48, "vh"))};
    position: relative;
    display: flex;
    align-items: center;

    &::after {
      content: url("/icons/downSelect.svg");
      position: absolute;
<<<<<<< HEAD
      right: ${conv(15, "vw")};
      background-color: white;
      border-radius: 50%;
      padding: ${conv(5, "vw")};
=======
      height: 16px;
      right: 15px;
      top: 50%;
      transform: translate(0, -50%);
>>>>>>> alex/feature/reports
      pointer-events: none;
      height: 55%;
      aspect-ratio: 1 / 1;
    }
  `,
  Select: styled.select<SelectProps>`
    appearance: none;
    text-indent: ${conv(1, "vw")};
    text-overflow: "";
    -webkit-padding-end: ${conv(20, "vw")};
    -moz-padding-end: ${conv(20, "vw")};
    -webkit-padding-start: ${conv(15, "vw")};
    -moz-padding-start: ${conv(15, "vw")};
    background-color: white;
    height: ${({ height }) => (height ? height : "100%")};
    width: 100%;
    box-shadow: 0px 5.19209px 20.7684px rgba(0, 0, 0, 0.1);
    border-radius: ${conv(8, "vw")};
    font-size: ${conv(16, "vh")};
    color: rgba(29, 36, 51, 0.8);
    position: relative;
    font-family: "Noir Std";

    &.has-error {
      border: 1px solid var(--red-300);
      padding: ${conv(6, "vh")} ${conv(16, "vw")};
      outline-color: transparent;

      &:focus,
      &:active {
        padding: ${conv(5, "vh")} ${conv(15, "vw")};
        border-color: var(--red-500);
        border-width: ${conv(2, "vw")};
      }
    }
  `,
};
