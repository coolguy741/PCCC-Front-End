import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { Icon } from "../../../Global/Icon";

export const PlateFullPlanSearch = () => {
  const [value, setValue] = useState("");

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return (
    <Style.Container>
      <Style.CustomInput>
        <Style.Input required onChange={handleChange} value={value} />
        <Style.RightIcon>
          <Icon name="search" />
        </Style.RightIcon>
      </Style.CustomInput>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: end;
    position: relative;
    margin-bottom: 10%;
  `,
  CustomInput: styled.section`
    display: flex;
    position: relative;
    z-index: 1;
    justify-content: end;
  `,
  RightIcon: styled.button`
    padding: 8px;
    height: 40px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  `,
  Input: styled.input`
    padding: 10px 20px;
    left: 0;
    top: 0;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    text-align: left;
    outline: 2px solid var(--book-200);
    outline-offset: 8px;
    border-radius: 4px;
    transition: outline 0.5s ease-in;
    color: var(--book-300);
    font-size: 16px;

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
  `,
};
