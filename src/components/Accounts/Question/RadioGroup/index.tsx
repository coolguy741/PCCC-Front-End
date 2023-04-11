import { useState } from 'react';
import styled from 'styled-components';

interface RadioGropQuestionProps {
  optionContent: string[];
}

export const RadioGropQuestion = ({
  optionContent,
}: RadioGropQuestionProps) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Style.Container>
      {optionContent.map((value, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="options"
            value={`option-${index}`}
            checked={selectedValue === `option-${index}`}
            onChange={handleOptionChange}
          />
          <label htmlFor={`option-${index}`}>{value}</label>
        </div>
      ))}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    margin: 10px 0px;

    div {
      display: flex;
    }
  `,
};
