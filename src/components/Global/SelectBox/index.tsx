import { ChangeEvent, FC } from "react";
import styled from "styled-components";

type SelectBoxProps = {
  options: string[];
  value?: string;
  onChange: () => void;
};

export const SelectBox: FC<SelectBoxProps> = ({ options, value, onChange }) => {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange();
  };

  return (
    <StyledSelect value={value} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
`
