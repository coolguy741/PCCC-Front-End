import styled from "styled-components";
import { LinkButton } from "../../../components/Global/Button/Link";
import { GroceryItem } from "../../../components/MealPlanner/Grocery";

import { BackButton } from "../../../components/Global/BackButton";
import { MealPlanHeader } from "../../../components/MealPlanner/Header";
import { Grocery } from "../../types";

const groceries: Grocery[] = [
  {
    id: 1,
    name: "Fresh Produce",
    icon: "carrot",
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
    name: "Dairy",
    icon: "dairy",
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
    icon: "meet",
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
    icon: "meet",
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
    icon: "meet",
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
    id: 6,
    name: "Meet",
    icon: "meet",
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
        <BackButton />
        <div className="print-link-container">
          <LinkButton to="/dashboard/meal-planner/grocery-list/print">
            Print
          </LinkButton>
        </div>
        <h3>Grocery List</h3>
        <Style.ScrollContainer>
          <Style.GroceryList>
            {groceries.map((grocery) => (
              <div className="grocery-item-container">
                <GroceryItem key={grocery.id} grocery={grocery} />
              </div>
            ))}
          </Style.GroceryList>
        </Style.ScrollContainer>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    width: 100%;
    height: 100%;

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
  GroceryList: styled.section`
    margin: 20px;
    line-height: 0;

    -webkit-column-count: 3;
    -webkit-column-gap: 24px;
    -moz-column-count: 3;
    -moz-column-gap: 24px;
    column-count: 3;
    column-gap: 24px;

    .grocery-item-container {
      margin-bottom: 24px;
      break-inside: avoid;
    }
  `,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 100%;
    padding-right: 16px;
    margin-right: -24px;
  `,
};
