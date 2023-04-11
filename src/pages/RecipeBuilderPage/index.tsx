import styled from 'styled-components';
import { RecipesHeader } from '../../components/Recipes/RecipesHeader';

interface RecipesBuilderPageProps {
  children: JSX.Element;
}

export const RecipesBuilderPage = ({ children }: RecipesBuilderPageProps) => {
  return (
    <Container>
      <RecipesHeader />
      <div className="content">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  .content {
    padding: 11px 0px;
  }
`;
