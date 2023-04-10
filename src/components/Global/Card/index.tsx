import styled from "styled-components";
import { Bold, Text, UpperCase } from "../Text";
import React, { useState } from "react";


interface CardProps {
  id: number,
  isSelected: boolean,
  image : string,
  alt ?: string,
  topic ?: string,
  date ?: string,
  title: string,
  description: string,
  onSelectionChange: (id: number, isSelected: boolean) => void
}

export const Card = ({id, image, isSelected = false, alt="card", topic = "", date = "", title, description, onSelectionChange }: CardProps) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    console.log("Checked", event.target.checked);
    onSelectionChange(id, event.target.checked);
  }
  
  return (
    <Container>
      <img src={image} alt={alt}/>
      {
      topic != "" && 
      <Text size="sm"><UpperCase>Topic: {topic}</UpperCase></Text>
      }
      {
      date != "" && 
      <Text size="sm"><UpperCase>{date}</UpperCase></Text>
      }
      <Text><Bold>{title}</Bold></Text>
      <Text size="sm">{description}</Text>
      <CheckboxInput checked={isChecked} onChange={handleCheckBoxChange} onClick={(event) => event.stopPropagation()}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 190px;
  position: relative;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  z-index: 50;
  position: absolute;
  top: -10px;
  left: -10px;
  cursor: pointer;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #ccc;
  width: 35px;
  height: 35px;
  transition: all 0.3s ease-in-out;
`