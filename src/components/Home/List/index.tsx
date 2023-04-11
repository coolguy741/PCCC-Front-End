import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ListItem } from './item';
export interface itemType {
  image: string;
  alt: string;
  topic?: string;
  title: string;
  content: string;
  path: string;
}

interface ListProps {
  data: itemType[];
}

export const List = ({ data }: ListProps) => {
  return (
    <Container>
      {data.map((item, index) => (
        <Link to={item.path}>
          <ListItem key={index} data={item} />
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px;
`;
