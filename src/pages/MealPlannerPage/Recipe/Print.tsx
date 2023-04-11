import styled from 'styled-components';

import { Assessment } from '../../../components/MealPlanner/Assessment';
import { Recipe } from '../../../components/MealPlanner/Recipe';

export const MealPlannerRecipePrintPage = () => {
  return (
    <PageContainer>
      <Assessment isPrint />
      <Recipe isPrint />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 50px;
  padding: 20px;
`;
