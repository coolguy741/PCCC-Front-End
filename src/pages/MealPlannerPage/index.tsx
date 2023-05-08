import { useState } from "react";
import { useMatch } from "react-router-dom";
import styled from "styled-components";

import { MealPlanHeader } from "../../components/MealPlanner/Header";
import { MealPlan } from "../../components/MealPlanner/Plan";

export const MealPlannerPage = () => {
  const match = useMatch("/dashboard/meal-planner/edit");
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };

  return (
    <Style.PageContainer>
      <MealPlanHeader title="Plate Full Planner" />
      <MealPlan match={match?.pathname} />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    padding: 108px 40px 0 40px;
    display: flex;
    height: 100vh;
    flex-direction: column;
    position: relative;
    overflow: overlay;
    max-height: 100vh;

    & .link-to-calendar {
      position: absolute;
      top: -30px;
      right: 1.5rem;
      background-color: var(--yellow-500);
      border: none;
      border-radius: 2rem;
      color: var(--neutral-800);
      cursor: pointer;
      font-size: 0.75rem;
      padding: 0.75rem 1.125rem;
      vertical-align: top;
      min-width: 8rem;
    }

    & *,
    ::before,
    ::after {
      box-sizing: border-box;
    }

    .meal-container {
      display: grid;
      grid-template-rows: 1fr;
      gap: 20px;
      grid-template-columns: 75% auto;

      .meal-plan {
        border-right: 1px solid #222222;
        position: relative;
      }
    }

    .meal-plan-action {
      display: flex;
      justify-content: end;
      gap: 10px;
      padding-right: 1.5rem;
      text-align: center;
    }
  `,
};
