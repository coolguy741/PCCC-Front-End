import { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "../../../Global/Checkbox";

export const TrueFalseQuestion = () => {
  const [selectedValue, setSelectedValue] = useState(true);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") setSelectedValue(true);
    else setSelectedValue(false);
  };

  return (
    <Style.Container>
      <Style.LabeledCheckbox>
        <Checkbox
          value="true"
          checked={selectedValue === true}
          onChange={handleValueChange}
        />
        <label htmlFor="true">True</label>
      </Style.LabeledCheckbox>
      <Style.LabeledCheckbox>
        <Checkbox
          value="true"
          checked={selectedValue === false}
          onChange={handleValueChange}
        />
        <label htmlFor="false">False</label>
      </Style.LabeledCheckbox>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  LabeledCheckbox: styled.div`
    display: flex;
    gap: 15px;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-700);
  `,
};
