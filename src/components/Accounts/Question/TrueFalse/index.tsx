import { useState } from "react";
import styled from "styled-components";

export const TrueFalseQuestion = () => {
  const [selectedValue, setSelectedValue] = useState(true);
  
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value === "true") setSelectedValue(true);
    else setSelectedValue(false);
  };

  return (
    <Container>
      <div>
        <input
          type="radio"
          id="true"
          name="options"
          value="true"
          checked={selectedValue === true}
          onChange={handleValueChange}
        />
        <label htmlFor="true">True</label>
      </div>
      <div>
        <input
          type="radio"
          id="false"
          name="options"
          value="false"
          checked={selectedValue === false}
          onChange={handleValueChange}
        />
        <label htmlFor="false">False</label>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  div {
    margin-right: 20px;
  }
`;
