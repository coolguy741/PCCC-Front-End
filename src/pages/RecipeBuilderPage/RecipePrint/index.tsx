import styled from "styled-components";
import { RecipeContent } from "../../../components/Recipes/RecipeContent";

export const RecipePrint = () => {
  return (
    <PageContainer>
      <RecipeContent />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  padding: 20px;
`;
