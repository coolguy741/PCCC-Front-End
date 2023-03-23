import styled from "styled-components";
import { useMatch } from "react-router-dom";
import { useState } from "react";

import { MealPlanHeader } from "../../../components/MealPlanner/Header";
import { Assessment } from "../../../components/MealPlanner/Assessment";
import { Recipe } from "../../../components/MealPlanner/Recipe";
import { LinkButton } from "../../../components/Global/Button/Link";
import { CalendarModal } from "../../../components/MealPlanner/CalendarModal";
import { PrintModal } from "../../../components/MealPlanner/PrintModal";
import { EditConfirmModal } from "../../../components/MealPlanner/EditConfirmModal";

export const MealPlannerRecipePage = () => {
  const isRecipe = useMatch("/dashboard/meal-planner/:id");
  const isAssessment = useMatch("/dashboard/meal-planner/:id/:id");
  const [isOpen, setIsOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  const open = () => {
    setIsOpen(true);
  };
  const closePrintModal = () => {
    setIsPrintModalOpen(false);
  };
  const openPrintModal = () => {
    setIsPrintModalOpen(true);
  };
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  return (
    <PageContainer>
      <MealPlanHeader
        title="Meal Planner"
        description={
          isRecipe ? "Plan your meal ahead of time for the entire team." : ""
        }
      />
      <div className="btn-group">
        <LinkButton to="/dashboard/meal-planner/edit">Back</LinkButton>
        <div>
          <button className="btn-primary" onClick={openConfirmModal}>
            Edit
          </button>
          <button className="btn-primary" onClick={open}>
            Add to calendar
          </button>
          <button className="btn-primary" onClick={openPrintModal}>
            Print
          </button>
        </div>
      </div>
      <Slider>
        <div className="slider-container">
          <div
            className={`rounded-full ${isAssessment ? "bg-black" : "border"}`}
          ></div>
          <div className={`line  ${isAssessment ? "bg-black" : ""}`}></div>
          <div className={`rounded-full ${isAssessment ? "border" : ""}`}></div>
        </div>
        <div className="labels">
          <span className="recipe">Recipe</span>
          <span className="assessment">Assessment</span>
        </div>
      </Slider>
      {isAssessment ? <Assessment /> : <Recipe />}
      <CalendarModal
        isOpen={isOpen}
        close={close}
        type={isAssessment ? "assessment" : "recipe"}
      />
      <PrintModal isOpen={isPrintModalOpen} close={closePrintModal} />
      <EditConfirmModal isOpen={isConfirmModalOpen} close={closeConfirmModal} />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 50px;

  .slider-container {
    display: flex;
    margin-top: 20px;
    align-items: center;

    .border {
      border: 3px solid var(--black);
    }

    .bg-black {
      background: var(--black) !important;
    }

    .rounded-full {
      border-radius: 100%;
      width: 20px;
      height: 20px;
      background: #9d9d9d;
    }

    .line {
      height: 3px;
      width: 100%;
      background: #9d9d9d;
    }
  }

  .labels {
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    .recipe {
      transform: translate(calc(-50% + 10px));
    }
    .assessment {
      transform: translate(calc(50% - 10px));
    }
  }

  .btn-group {
    display: flex;
    margin-top: 1.75rem;
    justify-content: space-between;
  }

  .btn-primary {
    background-color: var(--yellow);
    border: none;
    border-radius: 2rem;
    color: #3d3d3d;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.75rem 1.125rem;
    vertical-align: top;
    min-width: 6rem;
    margin-left: 10px;
  }

  & *,
  & *::before,
  & * ::after {
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
`;

const Slider = styled.div`
  width: 80%;
  max-width: 600px;
  margin: auto;
`;
