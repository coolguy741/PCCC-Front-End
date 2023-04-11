import { useState } from 'react';
import styled from 'styled-components';

interface CheckboxGroupProps {
  options: {
    value: string;
    label: string;
  }[];
  onChange: () => void;
}

export const CheckboxGroup = ({ options, onChange }: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
    onChange();
  };

  return (
    <Container>
      {options.map(({ value, label }) => (
        <label key={value}>
          <input
            type="checkbox"
            value={value}
            checked={selectedValues.includes(value)}
            onChange={() => handleCheckboxChange(value)}
          />
          <span className="text">{label}</span>
        </label>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    padding-left: 0.5rem;
  }
`;
