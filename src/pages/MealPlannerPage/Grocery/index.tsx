import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button";
import { BackButton } from "../../../components/Global/BackButton";
import Scrollable from "../../../components/Global/Scrollable";
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

export const MealPlannerGroceryPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Style.PageContainer>
      <div className="grocery-container">
        <Style.ButtonContainer>
          <BackButton onClick={handleBack} />
          <Button size="large">Print</Button>
        </Style.ButtonContainer>
        <h2>Grocery List</h2>
        <Scrollable thumbWidth="thin" className="scrollable">
          <Style.GroceryList>
            {groceries.map((grocery) => (
              <div className="grocery-item-container">
                <GroceryItem key={grocery.id} grocery={grocery} />
              </div>
            ))}
          </Style.GroceryList>
        </Scrollable>
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    overflow: hidden;
    height: 100vh;

    .grocery-container {
      position: relative;
      padding-top: 1.5rem;

      h2 {
        margin: 1rem 0;
      }

      .scrollable {
        height: 70vh;
        padding-bottom: 2rem;

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
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  GroceryList: styled.section`
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
};
