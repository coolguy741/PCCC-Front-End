import styled from "styled-components";
import { LinkButton } from "../../../components/Global/Button/Link";
import { GroceryItem } from "../../../components/MealPlanner/Grocery";

import { MealPlanHeader } from "../../../components/MealPlanner/Header";
import { Grocery } from "../../types";

const groceries: Grocery[] = [
  {
    id: 1,
    name: "Produce",
    materials: [
      {
        name: "Photatoes",
        amount: 3,
        unit: "each",
      },
      {
        name: "Galic cloves",
        amount: 3,
        unit: "each",
      },
      {
        name: "Yellow onions",
        amount: 3,
        unit: "grams",
      },
      {
        name: "Celery",
        amount: 3,
        unit: "each",
      },
    ],
  },
  {
    id: 2,
    name: "Diary",
    materials: [
      {
        name: "Milk",
        amount: 3,
        unit: "liter",
      },
      {
        name: "Yogurt",
        amount: 3,
        unit: "each",
      },
      {
        name: "Butter",
        amount: 3,
        unit: "each",
      },
      {
        name: "Cream",
        amount: 3,
        unit: "liter",
      },
    ],
  },
  {
    id: 3,
    name: "Meet",
    materials: [
      {
        name: "Chicken",
        amount: 3,
        unit: "grams",
      },
      {
        name: "Turkey",
        amount: 3,
        unit: "each",
      },
      {
        name: "Bacon",
        amount: 3,
        unit: "each",
      },
    ],
  },
  {
    id: 4,
    name: "Meet",
    materials: [
      {
        name: "Chicken",
        amount: 3,
        unit: "grams",
      },
      {
        name: "Turkey",
        amount: 3,
        unit: "each",
      },
      {
        name: "Bacon",
        amount: 3,
        unit: "each",
      },
    ],
  },
  {
    id: 5,
    name: "Meet",
    materials: [
      {
        name: "Chicken",
        amount: 3,
        unit: "grams",
      },
      {
        name: "Turkey",
        amount: 3,
        unit: "each",
      },
      {
        name: "Bacon",
        amount: 3,
        unit: "each",
      },
    ],
  },
  {
    name: "Meet",

    id: 6,
    materials: [
      {
        name: "Chicken",
        amount: 3,
        unit: "grams",
      },
      {
        name: "Turkey",
        amount: 3,
        unit: "each",
      },
      {
        name: "Bacon",
        amount: 3,
        unit: "each",
      },
    ],
  },
];

export const MealPlannerGroceryPage = () => {
  return (
    <Style.PageContainer>
      <MealPlanHeader
        title="Meal Planner"
        description="Plan your meal ahead of time for teh entire team."
      />
      <div className="grocery-container">
        <LinkButton to="/dashboard/meal-planner/edit">Back</LinkButton>
        <div className="print-link-container">
          <LinkButton to="/dashboard/meal-planner/grocery-list/print">
            Print
          </LinkButton>
        </div>
        <h3>Grocery List</h3>
        <div className="grocery-list">
          {groceries.map((grocery) => (
            <GroceryItem key={grocery.id} grocery={grocery} />
          ))}
        </div>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    width: 100%;
    height: 100%;
    max-width: 810px;

    .grocery-container {
      position: relative;
      padding-top: 1.25rem;

      h3 {
        font-weight: 700;
        font-size: 2rem;
        font-family: "Noir Std";
        line-height: 3.125rem;
        margin: 0.25rem 0;
      }

      .grocery-list {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(3, 1fr);
      }

      .print-link-container {
        position: absolute;
        top: 50px;
        right: 40px;
      }
    }

    & *,
    ::before,
    ::after {
      box-sizing: border-box;
    }
  `,
};
