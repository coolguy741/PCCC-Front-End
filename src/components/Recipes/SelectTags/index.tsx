import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "../Search";

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
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [tagId, setTagId] = useState<number>(tags.length);

  const handleSelect = (value: string) => {
    setSelectedOption(value);
    console.log("selectedOption", selectedOption);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && selectedOption) {
      setTags((prevTag) => [...prevTag, { name: selectedOption, id: tagId }]);
      setTagId((prevTagId) => prevTagId + 1);
      setSelectedOption("");
    }
  };

  const handleRemoveText = (id: number) => {
    setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
  };

  return (
    <Style.Container>
      <Style.SearchContainer>
        <Search
          options={tagOptions}
          onSelect={handleSelect}
          onKeyDown={handleKeyDown}
        />
      </Style.SearchContainer>
      <Style.TextList>
        {tags.map((tag) => (
          <Style.TextItemWrapper key={tag.id}>
            <Style.TextItemText>{tag.name}</Style.TextItemText>
            <Style.TextItemButton onClick={() => handleRemoveText(tag.id)}>
              X
            </Style.TextItemButton>
          </Style.TextItemWrapper>
        ))}
        {selectedOption && (
          <Style.TextItemWrapper>
            <Style.TextItemText>{selectedOption}</Style.TextItemText>
            <Style.TextItemButton onClick={() => setSelectedOption("")}>
              X
            </Style.TextItemButton>
          </Style.TextItemWrapper>
        )}
      </Style.TextList>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #c4c4c4;
    padding: 20px;
  `,
  SearchContainer: styled.div`
    width: 100%;
  `,
  TextList: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
  TextItemWrapper: styled.div`
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px;
  `,
  TextItemText: styled.div`
    margin-right: 10px;
  `,
  TextItemButton: styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
  `,
};
