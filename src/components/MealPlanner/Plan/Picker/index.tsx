import { ChangeEvent, InputHTMLAttributes, useCallback } from "react";
import styled, { css } from "styled-components";

import { Icon } from "../../../Global/Icon";
import { Typography } from "../../../Global/Typography";

export interface PickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  number?: number;
  setNumber: (count: number) => void;
}

export const BookPicker: React.FC<PickerProps> = ({
  label,
  number,
  setNumber,
  ...props
}) => {
  const handleAdd = useCallback(() => {
    number && number > 0 ? setNumber(number + 1) : setNumber(1);
  }, [number, setNumber]);

  const handleSubtract = useCallback(() => {
    number && number > 0 ? setNumber(number - 1) : setNumber(0);
  }, [number, setNumber]);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setNumber(parseInt(value));
  };

  return (
    <Style.Container>
      {!!label && (
        <Typography
          variant="paragraph3"
          weight="medium"
          ml={2.5}
          as="label"
          color="book-300"
        >
          {label}
        </Typography>
      )}
      <Style.CustomInput>
        <Style.LeftButton onClick={handleSubtract}>
          <Icon name="arrow-left" />
        </Style.LeftButton>
        <Style.Input
          type="number"
          onChange={handleChange}
          {...props}
          required
          value={number}
        />
        <Style.RightButton onClick={handleAdd}>
          <Icon name="arrow-right" />
        </Style.RightButton>
      </Style.CustomInput>
    </Style.Container>
  );
};

const buttonStyle = css`
  padding: 8px;
  height: 40px;
  background: var(--orange-400);
`;

const Style = {
  Container: styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 187px;
    gap: 16px;
  `,
  CustomInput: styled.section`
    display: flex;
    position: relative;
    z-index: 1;
    justify-content: space-between;
  `,
  LeftButton: styled.button`
    ${buttonStyle}
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  `,
  RightButton: styled.button`
    ${buttonStyle}
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `,
  Input: styled.input`
    padding: 10px 60px;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    text-align: center;
    outline: 2px solid var(--book-200);
    outline-offset: 8px;
    border-radius: 4px;
    transition: outline 0.5s ease-in;
    color: var(--book-300);
    font-size: 16px;

    &:placeholder-shown {
      outline: 2px solid transparent;
    }

    &:invalid {
      outline: 2px solid transparent;
    }

    &:focus,
    &:active {
      outline: 2px solid var(--book-200);
    }

    &::placeholder {
      color: var(--book-200);
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
