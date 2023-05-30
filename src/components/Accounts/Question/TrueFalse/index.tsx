import { useState } from "react";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";
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
    gap: ${convertToRelativeUnit(32, "vh")};
  `,
  LabeledRadio: styled.div`
    display: flex;
    gap: ${convertToRelativeUnit(32, "vh")};
    font-weight: 600;
    font-size: ${convertToRelativeUnit(19, "vh")};
    line-height: ${convertToRelativeUnit(24, "vh")};
    color: var(--neutral-700);
  `,
};
