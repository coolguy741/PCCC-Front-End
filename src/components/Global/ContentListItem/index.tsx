import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../Input";

export interface ContentListItemData {
  id: number;
  image: string;
  alt?: string;
  topic?: string;
  date?: string;
  title: string;
  description: string;
}

interface ContentListItemProps {
  data: ContentListItemData;
  selectable?: boolean;
  onSelectedChange?: (id: number, isSelected: boolean) => void;
}

export const ContentListItem: React.FC<ContentListItemProps> = ({
  data,
  selectable = false,
  onSelectedChange,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(!isSelected);
    onSelectedChange && onSelectedChange(data.id, event.target.checked);
  };

  return (
    <Style.Container>
      <img src={data.image} alt={data.alt} />
      <Style.Content>
        {data.topic && <Style.Topic>{"Topic: " + data.topic}</Style.Topic>}
        {data.date && <Style.Date>{"Feature date: " + data.date}</Style.Date>}
        <Style.Title>{data.title}</Style.Title>
        <Style.Description>{data.description}</Style.Description>
      </Style.Content>
      {selectable && (
        <Style.InputContainer>
          <Input
            type="radio"
            checked={isSelected}
            onChange={handleCheckBoxChange}
            width="33px"
            height="33px"
            onClick={(event) => event.stopPropagation()}
          />
        </Style.InputContainer>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 24px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    position: relative;
    font-family: "Noir Std";
    font-style: normal;
    width: 100%;

    &: hover {
      background: linear-gradient(
        182.85deg,
        rgba(255, 225, 102, 0.75) 2.47 %,
        rgba(234, 188, 0, 0.75) 97.72 %
      );
    }

    img {
      height: 100%;
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
  `,
  Topic: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    border: 2px solid var(--orange-600);
    border-radius: 50px;
    color: var(--orange-600);
    text-transform: uppercase;
  `,
  Date: styled.p`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 10px;
    border: 2px solid var(--orange-600);
    border-radius: 50px;
    color: var(--orange-600);
    text-transform: uppercase;
  `,
  Title: styled.p`
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
    color: var(--neutral-900);
    mix-blend-mode: normal;
  `,
  Description: styled.p`
    font- weight: 400;
    font - size: 16px;
    line - height: 20px;
    color: var(--neutral-600);
  `,
  InputContainer: styled.div`
    z-index: 10;
    position: absolute;
    top: 23.33px;
    right: 23.33px;
  `,
};
