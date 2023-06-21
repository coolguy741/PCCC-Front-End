import styled from "styled-components";
import { convertToRelativeUnit } from "../../../../styles/helpers/convertToRelativeUnits";
import { Checkbox } from "../../../Global/Checkbox";

interface MultipleSelectionProps {
  optionlist: string[];
}

export const MultipleSelection: React.FC<MultipleSelectionProps> = ({
  optionlist,
}) => {
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return "";
  };

  return (
    <Style.Container>
      {optionlist.map((option, index) => (
        <Style.LabeledCheckbox key={index}>
          <Checkbox value={option} onChange={handleValueChange} />
          <label htmlFor="true">{option}</label>
        </Style.LabeledCheckbox>
      ))}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${convertToRelativeUnit(32, "vh")};
  `,
  LabeledCheckbox: styled.div`
    display: flex;
    gap: ${convertToRelativeUnit(32, "vh")};
    font-weight: 600;
    font-size: ${convertToRelativeUnit(19, "vh")};
    line-height: ${convertToRelativeUnit(24, "vh")};
    color: var(--neutral-700);
  `,
};
