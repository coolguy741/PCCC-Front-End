import styled from "styled-components";

import { GroceryItem } from "../../../components/MealPlanner/Grocery";
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

export const MealPlannerGroceryPrintPage = () => {
  return (
    <Style.PageContainer>
      <Style.TitleContainter>
        <Style.Title>Grocery List</Style.Title>
        <Style.InfoContainer>
          <Style.Week>Week of : 08-19-2023</Style.Week>
          <Style.Info>12 Total students, 04 Meals per day</Style.Info>
        </Style.InfoContainer>
      </Style.TitleContainter>
      <Style.GroceryList>
        {groceries.map((grocery) => (
          <div className="grocery-item-container">
            <GroceryItem key={grocery.id} grocery={grocery} type="print" />
          </div>
        ))}
      </Style.GroceryList>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    box-sizing: border-box;
    width: 100%;
    font-family: "Noir Std";
    font-style: normal;

    .grocery-list {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(4, 1fr);
    }
  `,
  Title: styled.h1`
    font-weight: 600;
    @media screen {
      font-size: 42px;
      line-height: 48px;
    }
    @media print {
      font-size: 14px;
      line-height: 16px;
    }
  `,
  Info: styled.p`
    font-weight: 400;
    color: var(--neutral-800);
    @media screen {
      font-size: 30px;
      line-height: 42px;
    }
    @media print {
      font-size: 10px;
      line-height: 14px;
    }
  `,
  Week: styled.p`
    color: var(--neutral-800);
    font-weight: 600;

    @media screen {
      font-size: 36px;
      line-height: 42px;
    }
    @media print {
      font-size: 12px;
      line-height: 14px;
    }
  `,
  TitleContainter: styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    @media screen {
      padding-bottom: 27px;
    }
    @media print {
      padding-bottom: 9px;
    }
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    @media screen {
      gap: 9px;
    }
    @media print {
      gap: 3px;
    }
  `,
  GroceryList: styled.section`
    line-height: 0;

    @media screen {
      -webkit-column-count: 3;
      -webkit-column-gap: 24px;
      -moz-column-count: 3;
      -moz-column-gap: 24px;
      column-count: 3;
      column-gap: 24px;
    }
    @media print {
      -webkit-column-count: 3;
      -webkit-column-gap: 12px;
      -moz-column-count: 3;
      -moz-column-gap: 12px;
      column-count: 3;
      column-gap: 12px;
    }

    .grocery-item-container {
      @media screen {
        margin-bottom: 24px;
      }
      @media print {
        margin-bottom: 12px;
      }
      break-inside: avoid;
    }
  `,
};
