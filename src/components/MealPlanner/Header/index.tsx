import styled from "styled-components";
import { Icon } from "../../Global/Icon";
import { Typography } from "../../Global/Typography";

interface MealPlanHeaderProps {
  title: string;
  description?: string;
}

export const MealPlanHeader = ({ title, description }: MealPlanHeaderProps) => {
  return (
    <Style.Container>
      <Icon name="plate-full-planner-orange" className="mr-5" />
      <Typography variant="h1" weight="semi-bold" color="orange-500">
        {title}
      </Typography>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    padding-top: 1%;

    .mr-5 {
      margin-right: 1.25rem;
    }
  `,
};
