import styled from 'styled-components';
import { RecipeContent } from '../../../components/Recipes/RecipeContent';

export const RecipePrintPage = () => {
  return (
    <Style.PageContainer>
      <RecipeContent />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 20px;
  `,
};

const PageContainer = styled.div`
  padding: 20px;
`;
