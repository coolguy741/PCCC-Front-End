import { useState } from "react";
import styled from "styled-components";
import { Radio } from "../../../Global/Radio";

export const TrueFalseQuestion = () => {
  const [selectedValue, setSelectedValue] = useState(true);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") setSelectedValue(true);
    else setSelectedValue(false);
  };

  return (
    <Style.Container>
      <Style.LabeledRadio>
        <Radio
          value="true"
          checked={selectedValue === true}
          onChange={handleValueChange}
        />
        <label htmlFor="true">True</label>
      </Style.LabeledRadio>
      <Style.LabeledRadio>
        <Radio
          value="false"
          checked={selectedValue === false}
          onChange={handleValueChange}
        />
        <label htmlFor="false">False</label>
      </Style.LabeledRadio>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,
  LabeledRadio: styled.div`
    display: flex;
    gap: 15px;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-700);
  `,
};
