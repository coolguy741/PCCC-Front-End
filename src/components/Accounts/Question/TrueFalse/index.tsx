import { useState } from "react";
import styled from "styled-components";

export const TrueFalseQuestion = () => {
  const [selectedValue, setSelectedValue] = useState(true);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") setSelectedValue(true);
    else setSelectedValue(false);
  };

  return (
    <Style.Container>
      <fieldset>
        <input
          type="radio"
          id="true"
          name="options"
          value="true"
          checked={selectedValue === true}
          onChange={handleValueChange}
        />
        <label htmlFor="true">True</label>
      </fieldset>
      <fieldset>
        <input
          type="radio"
          id="false"
          name="options"
          value="false"
          checked={selectedValue === false}
          onChange={handleValueChange}
        />
        <label htmlFor="false">False</label>
      </fieldset>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;

    fieldset {
      margin-right: 20px;
    }
  `,
};
