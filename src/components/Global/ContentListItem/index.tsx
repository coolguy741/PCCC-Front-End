import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../Input";

interface ContentListItemProps {
  id: number;
  image: string;
  alt?: string;
  topic?: string;
  title: string;
  description: string;
  selectable?: boolean;
  isSelected?: boolean;
  onSelectionChange: (id: number, isSelected: boolean) => void;
}

export const ContentListItem = ({
  id,
  image,
  alt = "content-list-image",
  topic = "",
  title,
  description,
  selectable = false,
  isSelected = false,
  onSelectionChange = (id: number, isSelected: boolean) => {
    return "";
  },
}: ContentListItemProps) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    console.log("Checked", event.target.checked);
    onSelectionChange(id, event.target.checked);
  };

  return (
    <Style.Container>
      <img src={image} alt={alt} />
      <Style.Content>
        {topic !== "" && <Style.Topic>{"Topic: " + topic}</Style.Topic>}
        <Style.Title>{title}</Style.Title>
        <Style.Description>{description}</Style.Description>
      </Style.Content>
      {selectable && (
        <Style.InputContainer>
          <Input
            type="radio"
            checked={true}
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
