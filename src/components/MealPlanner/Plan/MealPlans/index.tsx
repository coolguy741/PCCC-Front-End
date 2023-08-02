import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  DragDropContext,
  DragUpdate,
  OnDragEndResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import styled from "styled-components";

import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import { Icon } from "../../../Global/Icon";
import { Typography } from "../../../Global/Typography";
import { PlateFullPlanFilter } from "../Filter";
import { RecipeModal } from "../RecipeModal";
import { PlateFullPlannerScrollMenu } from "../ScrollMenu";
import { PlateFullPlanSearch } from "../Search";

import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../../hooks/useFetch";
import {
  PccServer23MealPlansMealPlanRecipe,
  PccServer23RecipesPublicRecipeDto,
  VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsGroupWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  VoloAbpApplicationDtosPagedResultDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "../../../../lib/api/api";
import { CalendarModal } from "../../../Global/CalendarModal";
import { GroupModal } from "../GroupModal";
import { Tag } from "../Tag";
import { WeeklyMealPlan } from "./WeeklyMealPlan";

export interface FullMealPlan {
  day: string;
  plans: MealPlan[];
}

export interface MealPlan {
  description: string | null;
  image?: string;
  recipeId: string;
}

export const MealPlans = () => {
  const {
    selectedFilters,
    filters,
    changeSelectedFilters,
    meals,
    childrenCount,
  } = useMealPlannerStore();
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>("");
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [mealPlans, setMealPlans] = useState(meals);
  // TODO: unused variable
  const [mealPlanMenu, setMealPlanMenu] =
    useState<PccServer23RecipesPublicRecipeDto[] | undefined>();
  const [dragUpdateStatus, setDragUpdateStatus] = useState<DragUpdate>();
  const [selectedMeal, setSelectedMeal] =
    useState<PccServer23MealPlansMealPlanRecipe>();
  const [destinationMeal, setDestinationMeal] =
    useState<PccServer23MealPlansMealPlanRecipe>();
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const navigate = useNavigate();

  const { isLoading, data, fetchData } =
    useFetch<VoloAbpApplicationDtosPagedResultDto1PccServer23RecipesPublicRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
      "appRecipesList",
    );

  const {
    isLoading: isLoadingGroups,
    data: groupsData,
    fetchData: fetchGroups,
  } = useFetch<VoloAbpApplicationDtosPagedResultDto1PccServer23GroupsGroupWithNavigationPropertiesDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull>(
    "appGroupsMyCreatedGroupsList",
  );

  const openRecipeModal = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
    setIsRecipeModalOpen(true);
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    const sourceIndex = result.source.index;
    const destinationIndex = result?.destination?.index;
    const destinationDayIndex = Number(
      result.destination?.droppableId.slice(-1),
    );

    if (
      sourceIndex === undefined ||
      destinationIndex === undefined ||
      destinationDayIndex === undefined
    ) {
      return;
    }
    const updatedMealPlans = mealPlans;
    if (result.source.droppableId === "droppable-meal-menu") {
      if (mealPlanMenu) {
        const selectedMealPlan = mealPlanMenu[sourceIndex];

        if (!isNaN(destinationDayIndex)) {
          if (updatedMealPlans[destinationDayIndex].plans) {
            updatedMealPlans[destinationDayIndex].plans![destinationIndex] =
              selectedMealPlan;
          }
        }
      }
    } else {
      const sourceDayIndex = Number(result.source?.droppableId.slice(-1));
      if (!isNaN(sourceDayIndex)) {
        if (updatedMealPlans[destinationDayIndex].plans) {
          const temp = updatedMealPlans[sourceDayIndex].plans![sourceIndex];
          updatedMealPlans[sourceDayIndex].plans![sourceIndex] =
            updatedMealPlans[destinationDayIndex].plans![destinationIndex];
          updatedMealPlans[destinationDayIndex].plans![destinationIndex] = temp;
        }
      }
    }
    setMealPlans([...updatedMealPlans]);
    setSelectedMeal(undefined);
    setDestinationMeal(undefined);
    setDragUpdateStatus(undefined);
  };

  const onMealRemove = (dayIndex: number, index: number) => {
    const updatedMealPlans = mealPlans;

    if (updatedMealPlans[dayIndex].plans) {
      updatedMealPlans[dayIndex].plans![index] = {
        recipeId: null,
        description: null,
        image: null,
      };
    }
    setMealPlans([...updatedMealPlans]);
  };

  const onDragUpdate: OnDragUpdateResponder = (result) => {
    setDragUpdateStatus(result);

    const sourceIndex = result.source.index;
    if (result.source.droppableId === "droppable-meal-menu") {
      if (mealPlanMenu) {
        setSelectedMeal(mealPlanMenu[sourceIndex]);
      }
    } else {
      const sourceDayIndex = Number(result.source?.droppableId.slice(-1));
      if (!isNaN(sourceDayIndex)) {
        setSelectedMeal(mealPlans[sourceDayIndex].plans![sourceIndex]);
      }
      const destinationIndex = result?.destination?.index;

      const destinationDayIndex = Number(
        result.destination?.droppableId.slice(-1),
      );
      if (!isNaN(destinationDayIndex) && destinationIndex !== undefined) {
        if (mealPlans[destinationDayIndex].plans) {
          setDestinationMeal(
            mealPlans[destinationDayIndex].plans![destinationIndex],
          );
        }
      }
    }
  };

  useEffect(() => {
    fetchData?.();
    fetchGroups?.();
  }, []);

  useEffect(() => {
    if (data && data.items) {
      setMealPlanMenu(data.items);
    }
  }, [data]);

  console.log(mealPlans);

  return (
    <Style.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Style.Background>
        <img
          src="/images/plate-full-planner/book-opened.svg"
          alt="opened book"
        />
      </Style.Background>
      <Tag title="Print" top="0" left="0" translateX="600%" translateY="-37%" />
      <Tag
        title="create grocery list"
        top="0"
        right="0"
        translateX="-165%"
        translateY="-37%"
        onClick={() => navigate("grocery-list")}
      />
      <Tag
        title="Add to calendar"
        variant="red"
        top="0"
        right="0"
        translateX="-50%"
        translateY="-37%"
        onClick={() => setShowModal(true)}
      />
      <Style.Pages>
        <div>
          <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
            <Style.LeftPage>
              <WeeklyMealPlan
                mealPlans={mealPlans}
                onMealRemove={onMealRemove}
                openRecipeModal={openRecipeModal}
                dragUpdateStatus={dragUpdateStatus}
                selectedMeal={selectedMeal}
                destinationMeal={destinationMeal}
              />
            </Style.LeftPage>
            <Style.Page>
              <div className="page-title">
                <img
                  src="/images/plate-full-planner/ribbon-label.svg"
                  alt="label"
                />
                <Typography
                  variant="h4"
                  weight="semi-bold"
                  color="book-400"
                  as="h4"
                >
                  Customize your meal plan
                </Typography>
              </div>
              <div className="main-content" ref={mainContentRef}>
                <Style.BorderScroll>
                  <img
                    src="/images/plate-full-planner/scroll-border.svg"
                    alt="scroll border"
                  />
                </Style.BorderScroll>
                <Style.BorderScroll position="bottom">
                  <img
                    src="/images/plate-full-planner/scroll-border.svg"
                    alt="scroll border"
                  />
                </Style.BorderScroll>
                <div>
                  <PlateFullPlanSearch />
                  <PlateFullPlanFilter
                    filters={filters}
                    selectedFilters={selectedFilters}
                    setFilters={changeSelectedFilters}
                  />
                </div>
                {mealPlanMenu && (
                  <PlateFullPlannerScrollMenu
                    mealPlanMenu={mealPlanMenu}
                    rootRef={mainContentRef}
                    openRecipeModal={openRecipeModal}
                  />
                )}
              </div>
              <Style.CoffeeStain
                src="/images/plate-full-planner/coffee-stain.svg"
                alt="coffee stainer on paper"
              />
              <Style.Instructions>
                <img src="/images/ornate.svg" />
                <ul>
                  <li>Double click on recipe cards to view them</li>
                  <li>
                    Click and drag a recipe card to move it around your planner
                  </li>
                </ul>
              </Style.Instructions>
              <Style.BrownPaper>
                <div className="brown-paper-content">
                  <Icon name="dish" />
                  <Typography
                    variant="h6"
                    as="h6"
                    weight="semi-bold"
                    color="book-50"
                  >
                    Roasted red pepper hummus with vegetables
                  </Typography>
                </div>
                <img
                  src="/images/plate-full-planner/recipe-paper.png"
                  alt="brown-paper"
                />
              </Style.BrownPaper>
            </Style.Page>
          </DragDropContext>
        </div>
      </Style.Pages>
      {selectedRecipeId && (
        <RecipeModal
          isOpen={isRecipeModalOpen}
          selectedRecipeId={selectedRecipeId}
          close={() => setIsRecipeModalOpen(false)}
        />
      )}
      <CalendarModal
        isOpen={showCalendarModal}
        close={() => setShowCalendarModal(false)}
      />
      {showModal && (
        <GroupModal
          setShowModal={setShowModal}
          showModal={showModal}
          groupsData={groupsData}
          meals={meals}
          servingSize={childrenCount}
        />
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.section)`
    margin-top: 10px;
    position: relative;
    width: ${window.innerHeight / window.innerWidth >= 0.625
      ? 100
      : (100 * (window.innerHeight / window.innerWidth)) / 0.628}%;
    margin-left: auto;
    margin-right: auto;
  `,
  Background: styled.div`
    padding: 0;
    img {
      width: 100%;
    }
  `,
  Pages: styled.section`
    top: 0;
    left: 0;
    right: 0;
    bottom: 7%;
    position: absolute;

    & > div {
      height: 100%;
      position: relative;
      display: flex;
      padding: 3% 4% 0 3%;
      gap: 6%;
    }
  `,
  LeftPage: styled.div`
    margin-right: -2%;
    width: 50%;
  `,
  Page: styled.div`
    position: relative;
    display: flex;
    width: 50%;
    flex-direction: column;
    padding: 10px 0;
    overflow: hidden;

    & .main-content {
      flex: 1;
      position: relative;
      height: 100%;
      overflow-y: hidden;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      padding: 2% 2%;
      gap: 1%;
    }

    .page-title {
      position: relative;

      img {
        width: 70%;
        margin: 0 15%;
      }

      h4 {
        position: absolute;
        width: 100%;
        transform: rotate(1.09deg) translateY(50%);
        top: 0;
        text-align: center;
      }
    }
  `,
  CoffeeStain: styled.img`
    position: absolute;
    width: 70%;
    transform: rotate(-200.75deg) translate(-15%, 3%);
    left: 0;
    bottom: 0;
    mix-blend-mode: color-burn;
  `,
  Instructions: styled.div`
    position: absolute;
    width: 30%;
    left: 0;
    bottom: 0;
    display: flex;
    width: 50%;
    padding: 1rem 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-radius: 0.5rem;
    background: rgba(234, 218, 182, 0.4);
    background-blend-mode: multiply;
    color: var(--book-400);
    font-weight: 500;
    font-size: 1rem;
  `,
  BrownPaper: styled.div`
    position: absolute;
    width: 45%;
    left: 0;
    z-index: 5;
    bottom: 35%;

    .brown-paper-content {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      top: 50%;
      margin: 0 20%;
      transform: translateY(-70%);
      rotate: -2deg;

      img {
        margin-bottom: 0.5rem;
      }
    }

    & > img {
      width: 100%;
    }
  `,
  BorderScroll: styled.div.attrs(
    ({ position }: { position: "top" | "bottom" }) => ({
      position: position ?? "top",
    }),
  )`
    position: absolute;
    z-index: 20;
    width: 50%;
    ${({ position }) => position}: 0;
    right: 2%;
    transform: translate(
      0,
      ${({ position }) => (position === "top" ? "-" : "")}20%
    );

    & img {
      width: 100%;
    }

    &:before {
      content: "";
      background-image: linear-gradient(
        ${({ position }) =>
          position === "top"
            ? "rgba(234, 218, 182, 0.8),rgba(255, 240, 232, 0)"
            : "rgba(255, 240, 232, 0),rgba(234, 218, 182, 0.8)"}
      );
      position: absolute;
      z-index: 19;
      width: 89%;
      ${({ position }) => position}: 0;
      left: 50%;
      transform: translate(
        -50%,
        ${({ position }) => (position === "top" ? "" : "-")}12%
      );
      height: 400%;
    }
  `,
};
