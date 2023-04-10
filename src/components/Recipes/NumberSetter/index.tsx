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
    <Container>
      <Button onClick={decreaseValue}>{"<"}</Button>
      <Text>{value}</Text>
      <Button onClick={increaseValue}>{">"}</Button>
    </Container>
  );
};

const Container = styled.div`
  background-color: #C4C4C4;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  background: none;
  font-size: 0.8rem;
  color: #000000;
  cursor: pointer;
  margin: 0;
`;

const Text = styled.div`
  font-size: 1rem;
`;
