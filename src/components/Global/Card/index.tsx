import styled from "styled-components";
import { Bold, Text, UpperCase } from "../Text";

interface CardProps {
  image : string,
  placeholder ?: string,
  topic ?: string,
  date ?: string,
  title: string,
  description: string
}

export const Card = ({image, placeholder="card", topic = "", date = "", title, description }: CardProps) => {
  
  return (
    <Container>
      <img src={image} placeholder={placeholder}/>
      {
      topic != "" && 
      <Text size="sm"><UpperCase>{topic}</UpperCase></Text>
      }
      {
      date != "" && 
      <Text size="sm"><UpperCase>{date}</UpperCase></Text>
      }
      <Text><Bold>{title}</Bold></Text>
      <Text size="sm">{description}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 190px;
`;