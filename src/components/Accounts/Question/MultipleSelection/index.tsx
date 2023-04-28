import styled from "styled-components";
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
    gap: 24px;
  `,
  LabeledCheckbox: styled.div`
    display: flex;
    gap: 15px;
    font-weight: 600;
    font-size: 19px;
    line-height: 24px;
    color: var(--neutral-700);
    align-items: center;
  `,
};
