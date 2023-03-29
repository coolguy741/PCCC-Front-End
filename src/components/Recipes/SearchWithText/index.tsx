import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from '../Search';

interface TextItem {
  text: string;
  id: number;
}

const SearchOptions = [{ value: 'Option 1', label: 'Option 1' }, { value: 'Option 2', label: 'Option 2' }];

export const SearchWithText: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [textList, setTextList] = useState<TextItem[]>([]);
  const [textId, setTextId] = useState<number>(1);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    console.log("selectedOption", selectedOption);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && selectedOption) {
      setTextList(prevTextList => [...prevTextList, { text: selectedOption, id: textId }]);
      setTextId(prevTextId => prevTextId + 1);
      setSelectedOption('');
    }
  };

  const handleRemoveText = (id: number) => {
    setTextList(prevTextList => prevTextList.filter(textItem => textItem.id !== id));
  };

  return (
    <Container>
      <SearchContainer>
        <Search options={SearchOptions} onSelect={handleSelect} onKeyDown={handleKeyDown} />
      </SearchContainer>
      <TextList>
        {textList.map(textItem => (
          <TextItemWrapper key={textItem.id}>
            <TextItemText>{textItem.text}</TextItemText>
            <TextItemButton onClick={() => handleRemoveText(textItem.id)}>X</TextItemButton>
          </TextItemWrapper>
        ))}
        {selectedOption && (
          <TextItemWrapper>
            <TextItemText>{selectedOption}</TextItemText>
            <TextItemButton onClick={() => setSelectedOption('')}>X</TextItemButton>
          </TextItemWrapper>
        )}
      </TextList>
    </Container>
  );
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  
`

const TextList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TextItemWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 5px;
`;

const TextItemText = styled.div`
  margin-right: 10px;
`;

const TextItemButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;