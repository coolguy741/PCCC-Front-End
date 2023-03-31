import styled from "styled-components";
import { Text, UpperCase } from "../Text";

interface CardProps {
  img : string,
  placeholder ?: string,
  topic ?: string,
  date ?: string,
  name: string,
  content: string
}

export const Card = ({img, placeholder="card", topic = "", date = "", name, content }: CardProps) => {
  
  return (
    <Container>
      <img src={img} placeholder={placeholder}/>
      {
      topic != "" && 
      <Text><UpperCase>{topic}</UpperCase></Text>
      }
      {
      date != "" && 
      <Text><UpperCase>{date}</UpperCase></Text>
      }
      <Text>{name}</Text>
      <Text>{content}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 190px;
`;