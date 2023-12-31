import { useMatch } from "react-router-dom";
import styled from "styled-components";

import { MealPlan } from "../../../components/MealPlanner/Plan";

export const MealPlannerPrintPage = () => {
  const match = useMatch("/meal-planner/print");

  return (
    <Style.PageContainer>
      <div className="plan-detail">
        <h3>Meal Plan</h3>
        <div>
          <span>Period: 08/19 - 08/25</span>
          <span>Number of people: 12</span>
        </div>
      </div>
      <a href="example.docx">
        <b> download </b>
      </a>
      <MealPlan match={match?.pathname} />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 25px 36px 20px 16px;

    .plan-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-weight: 700;
        font-size: 2rem;
        font-family: "Noir Std";
        line-height: 3.125rem;
        margin: 0.25rem 0;
      }

      span {
        font-size: 1rem;
        margin-left: 3rem;
      }
    }
  `,
};
