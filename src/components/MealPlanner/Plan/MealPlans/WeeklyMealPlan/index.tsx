import styled from "styled-components";

import { Draggable, Droppable } from "react-beautiful-dnd";
import { FullMealPlan } from "..";
import { Typography } from "../../../../Global/Typography";
import { MealCard } from "../MealCard";

interface WeeklyMealPlanProps {
  mealPlans: FullMealPlan[];
}

export const WeeklyMealPlan = ({ mealPlans }: WeeklyMealPlanProps) => {
  return (
    <Style.Container>
      <div className="meal-planner-details">
        <div className="plan-info">
          <Typography variant="h2" color="book-200" weight="bold">
            12
          </Typography>
          <Typography variant="paragraph3" color="book-200" weight="semi-bold">
            total <br /> students
          </Typography>
        </div>
        <div className="plan-info">
          <Typography variant="h2" color="book-200" weight="bold">
            04
          </Typography>
          <Typography variant="paragraph3" color="book-200" weight="semi-bold">
            meals
            <br /> per day
          </Typography>
        </div>
        <Style.DateLabel>
          <div className="label-container">
            <Typography variant="h2" color="book-400" weight="semi-bold">
              08/19/2023
            </Typography>
          </div>
          <img
            src="/images/plate-full-planner/date-label.svg"
            alt="date label"
          />
          <div className="week-mark">
            <img
              src="/images/plate-full-planner/week-mark.svg"
              alt="week-mark"
            />
          </div>
        </Style.DateLabel>
      </div>
      <div className="plate-full-planner-container">
        <Style.MealPlans>
          {mealPlans.map((dailyPlan, dayIndex) => (
            <Droppable
              droppableId={`droppable-weekly-meal-plan-${dayIndex}`}
              key={`droppable-weekly-meal-plan-${dayIndex}`}
            >
              {(provided, dropSnapshot) => (
                <Style.DailyMealPlans
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <div className="meal-plan-day">{dailyPlan.day}</div>
                  <div className="daily-plans">
                    {dailyPlan.plans.map((meal, index) => (
                      <Draggable
                        key={`draggable-weekly-meal-plan-${dayIndex}-${index}`}
                        draggableId={`draggable-weekly-meal-plan-${dayIndex}-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              ...provided.draggableProps.style,
                              height: "100%",
                            }}
                          >
                            <MealCard
                              meal={meal}
                              label={
                                dayIndex === 0 ? `meal-${index + 1}` : null
                              }
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </Style.DailyMealPlans>
              )}
            </Droppable>
          ))}
          <div className="cleaner" />
        </Style.MealPlans>
      </div>

      <Style.Labels>
        <img src="/images/plate-full-planner/labels/meal-1.svg" alt="meal-1" />
        <img src="/images/plate-full-planner/labels/meal-2.svg" alt="meal-2" />
        <img src="/images/plate-full-planner/labels/meal-3.svg" alt="meal-3" />
        <img src="/images/plate-full-planner/labels/meal-4.svg" alt="meal-4" />
        <img src="/images/plate-full-planner/labels/meal-5.svg" alt="meal-5" />
      </Style.Labels>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 2%;

    .meal-planner-details {
      display: flex;
      justify-content: space-between;
      position: relative;

      & .plan-info {
        display: flex;
        padding: 2% 0;
        align-items: center;
        gap: 5%;
        text-transform: uppercase;
        * {
          white-space: nowrap;
        }
      }
    }
    .plate-full-planner-container {
      height: 40vw;
      overflow: hidden;
    }
  `,
  DateLabel: styled.div`
    position: absolute;
    top: 0;
    width: 50%;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    justify-content: center;

    .week-mark {
      position: absolute;
      width: 30%;
      left: 0;
      transform: translate(30%, -25%);
      display: flex;
      align-items: center;

      & > img {
        width: 100%;
      }

      &:after {
        position: absolute;
        color: var(--book-100);
        left: 0;
        content: "WEEK OF";
        font-size: 100%;
        font-family: Noir Std;
        font-weight: 600;
        width: 100%;
        vertical-align: middle;
        text-align: center;
        transform: rotate(-7.38deg);
      }
    }

    & > div.label-container {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      top: 50%;
      transform: rotate(-1.85deg) translate(0, -50%);
    }
    & > img {
      width: 100%;
    }
  `,
  MealPlans: styled.section`
    width: 100%;
    height: 100%;
    position: relative;
    flex: 1;
    padding: 2%;
    border-radius: 16px;
    background-image: linear-gradient(to right, #eadab650 0%, #eadab680 100%);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2%;

    .cleaner {
      position: absolute;
      background: black;
      width: 2.2%;
      opacity: 0.9;
      background: #f9f4e7;
      left: 0;
      transform: translate(-100%);
      z-index: 2;
      height: 98%;
    }
  `,
  DailyMealPlans: styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    gap: 2%;

    & .daily-plans {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      margin: -5% 0;
    }

    & .meal-plan-day {
      font-size: 0;
      text-align: center;

      &:first-letter {
        text-transform: uppercase;
        font-size: 14px;
        color: var(--book-300);
      }
    }
  `,
  Labels: styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    bottom: 1%;
    left: 0;
    top: 17%;
    transform: translate(-100%);
    z-index: 0;

    img {
      height: 20%;
    }
  `,
};
