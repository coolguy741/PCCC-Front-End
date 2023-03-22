import styled from "styled-components";

import { GroceryItem } from "../../../components/Meal/Grocery";
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

export const MealPlannerGroceryPrintPage = () => {
  return (
    <PageContainer>
      <h3>Grocery List</h3>
      <div className="grocery-list">
        {groceries.map((grocery) => (
          <GroceryItem key={grocery.id} grocery={grocery} />
        ))}
      </div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px 19px 20px 30px;

  h3 {
    font-weight: 700;
    font-size: 3rem;
    font-family: "Noir Std";
    line-height: 3.125rem;
    margin: 0.25rem 0 1.5rem 0;
  }

  .grocery-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
