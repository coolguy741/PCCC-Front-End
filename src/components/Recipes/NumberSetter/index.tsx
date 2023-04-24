import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  defaultValue: number;
}

export const NumberSetter: React.FC<Props> = ({ defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const decreaseValue = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const increaseValue = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <Style.Container>
      <Style.Button onClick={decreaseValue}>{"<"}</Style.Button>
      <Style.Text>{value}</Style.Text>
      <Style.Button onClick={increaseValue}>{">"}</Style.Button>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    background-color: #c4c4c4;
    display: flex;
    align-items: center;
    padding: 5px;
  `,
  Button: styled.button`
    padding: 8px;
    border: none;
    background: none;
    font-size: 0.8rem;
    color: var(--black);
    cursor: pointer;
    margin: 0;
  `,
  Text: styled.div`
    font-size: 1rem;
  `,
};
