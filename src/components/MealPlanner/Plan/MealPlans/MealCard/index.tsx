import styled from "styled-components";

import { Icon } from "../../../../Global/Icon";
import { Typography } from "../../../../Global/Typography";

interface MealCardProps {
  meal: {
    description: string | null;
    image?: string;
  };
  label: string | null;
  fixed?: boolean;
}

export const MealCard: React.FC<MealCardProps> = ({ meal, label, fixed }) => {
  return (
    <Style.Container fixed={fixed}>
      <Style.Card hasPlan={!!meal.description}>
        {meal.description ? (
          <Style.Meal>
            <Style.MealPicture src={meal.image} alt={meal.description} />
            <Style.Description>
              <Typography as="p">{meal.description}</Typography>
            </Style.Description>
          </Style.Meal>
        ) : (
          <Icon name="food" />
        )}
        {!!label ?? (
          <Style.Label>
            hello
            <img
              src={`/images/plate-full-planner/labels/${label}.svg`}
              alt="label"
            />
          </Style.Label>
        )}
      </Style.Card>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section.attrs(({ fixed }: { fixed: boolean }) => ({
    fixed: fixed ?? false,
  }))`
    padding: 5% 0;
    overflow: hidden;
    height: 100%;
    width: ${({ fixed }) => (fixed ? "90px" : "100%")};
  `,
  Card: styled.article.attrs(({ hasPlan }: { hasPlan: boolean }) => ({
    hasPlan: hasPlan ?? false,
  }))`
    position: relative;
    height: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ hasPlan }) => (hasPlan ? "white" : "var(--book-50)")};
    transform: rotate(
      ${({ hasPlan }) => (hasPlan ? (Math.random() - 0.5) * 6 : 0)}deg
    );
  `,
  Meal: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3%;
    padding: 10%;
    height: 100%;
    width: 100%;
  `,
  Description: styled.div`
    flex: 1;
    overflow: hidden;
    p {
      height: 42px;
      line-height: 14px;
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  `,
  MealPicture: styled.img`
    width: 100%;
  `,
  Label: styled.div`
    position: absolute;
  `,
};
