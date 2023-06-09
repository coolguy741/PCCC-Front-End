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
  onMealRemove?: () => void;
  openRecipeModal?: (recipeId: number) => void;
}

export const MealCard: React.FC<MealCardProps> = ({
  meal,
  label,
  fixed,
  openRecipeModal,
  onMealRemove,
}) => {
  return (
    <Style.Container fixed={fixed}>
      <Style.Card
        hasPlan={!!meal.description}
        onDoubleClick={() => {
          openRecipeModal?.(3);
        }}
      >
        <Style.ActionButtons className="button-actions">
          <Style.ActionbuttonWrapper onClick={onMealRemove}>
            <Icon name="trash" width="100%" height="100%" />
          </Style.ActionbuttonWrapper>
          <Style.ActionbuttonWrapper>
            <Icon name="red-heart" />
          </Style.ActionbuttonWrapper>
        </Style.ActionButtons>
        {meal.description ? (
          <Style.Meal>
            <Style.MealPicture
              className="meal-picture"
              src={meal.image}
              alt={meal.description}
            />
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
    &:hover {
      background: var(--orange-500);
      p {
        color: white;
      }
      .button-actions {
        opacity: 1;
      }
      .meal-picture {
        opacity: 0.2;
      }
    }
    .button-actions {
      opacity: 0;
    }
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
      line-height: 12px;
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
  ActionButtons: styled.div`
    position: absolute;
    top: 10px;
    width: 80%;
    display: flex;
    gap: 2px;
  `,
  ActionbuttonWrapper: styled.button`
    display: flex;
    z-index: 10;
    flex: 1;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    justify-content: center;
    align-items: center;
  `,
};
