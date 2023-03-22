import styled from "styled-components";

import { LinkButton } from "../../Global/Button/Link";

interface Props {
  match?: boolean;
}

export const MealPlannerActions: React.FC<Props> = ({ match = false }) => {
  return (
    <ActionsContainer match={match}>
      <LinkButton to="/dashboard/meal-planner/grocery-list" disabled={!match}>
        Create grocery list
      </LinkButton>
      <LinkButton to="/dashboard/meal-planner/print" disabled={!match}>
        Print
      </LinkButton>
    </ActionsContainer>
  );
};

const ActionsContainer = styled.div.attrs((props: { match: boolean }) => ({
  match: props.match || false,
}))`
  display: flex;
  ${({ match }) => `
    justify-content: ${match ? "start" : "end"};
  `}
  gap: 10px;
  padding-right: 1.5rem;
  text-align: center;
`;
