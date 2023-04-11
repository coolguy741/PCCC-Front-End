import { FC, useState } from 'react';
import styled from 'styled-components';

type SelectBoxProps = {
  options: {
    value: string;
    label: string;
  }[];
  value?: string;
  onChange: (value: string) => void;
};

export const SelectBox: FC<SelectBoxProps> = ({
  options,
  value = options[0].value,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Style.Select value={selectedValue} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Style.Select>
  );
};

const Style = {
  Select: styled.select`
    width: 130px;
  `,
};
