import React, { useState } from 'react';
import styled from 'styled-components';
import { Search } from '../Search';

export interface Tag {
  name: string;
  id: number;
}

interface SelectTagsProps {
  tagOptions: {
    value: string;
    label: string;
  }[];
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

export const SelectTags: React.FC<SelectTagsProps> = ({
  tagOptions,
  tags,
  setTags,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [tagId, setTagId] = useState<number>(tags.length);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    console.log('selectedOption', selectedOption);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && selectedOption) {
      setTags((prevTag) => [...prevTag, { name: selectedOption, id: tagId }]);
      setTagId((prevTagId) => prevTagId + 1);
      setSelectedOption('');
    }
  };

  const handleRemoveText = (id: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  return (
    <Container>
      <SearchContainer>
        <Search
          options={tagOptions}
          onSelect={handleSelect}
          onKeyDown={handleKeyDown}
        />
      </SearchContainer>
      <TextList>
        {tags.map((tag) => (
          <TextItemWrapper key={tag.id}>
            <TextItemText>{tag.name}</TextItemText>
            <TextItemButton onClick={() => handleRemoveText(tag.id)}>
              X
            </TextItemButton>
          </TextItemWrapper>
        ))}
        {selectedOption && (
          <TextItemWrapper>
            <TextItemText>{selectedOption}</TextItemText>
            <TextItemButton onClick={() => setSelectedOption('')}>
              X
            </TextItemButton>
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
  background-color: #c4c4c4;
  padding: 20px;
`;

const SearchContainer = styled.div`
  width: 100%;
`;

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
