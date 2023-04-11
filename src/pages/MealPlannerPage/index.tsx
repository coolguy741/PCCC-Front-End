import { useState } from 'react';
import { useMatch } from 'react-router-dom';
import styled from 'styled-components';

import { CalendarModal } from '../../components/Global/CalendarModal';
import { MealPlannerActions } from '../../components/MealPlanner/Actions';
import { MealFilter } from '../../components/MealPlanner/Filter';
import { MealPlanHeader } from '../../components/MealPlanner/Header';
import { MealPlan } from '../../components/MealPlanner/Plan';
import { MealType } from '../../components/MealPlanner/Type';

export const MealPlannerPage = () => {
  const match = useMatch('/dashboard/meal-planner/edit');
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };

  return (
    <Style.PageContainer>
      <MealPlanHeader
        title="Meal Planner"
        description="Plan your meal ahead of time for teh entire team."
      />
      <div className="meal-container">
        <div className="meal-plan-container">
          <div className="meal-plan">
            {!!match && (
              <button onClick={open} className="link-to-calendar">
                Add to calendar
              </button>
            )}
            <MealFilter match={!!match} />
            <MealPlan match={match?.pathname} />
          </div>
          <MealPlannerActions match={!!match} />
        </div>
        <MealType />
      </div>
      <CalendarModal isOpen={isOpen} close={close} type="plan" />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-right: 50px;
    overflow-y: auto;
    & .link-to-calendar {
      position: absolute;
      top: -30px;
      right: 1.5rem;
      background-color: var(--yellow);
      border: none;
      border-radius: 2rem;
      color: #3d3d3d;
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
