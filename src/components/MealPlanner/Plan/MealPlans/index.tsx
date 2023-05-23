import { motion } from "framer-motion";
import styled from "styled-components";
import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import { Icon } from "../../../Global/Icon";
import { Typography } from "../../../Global/Typography";
import { PlateFullPlanFilter } from "../Filter";
import { PlateFullPlannerScrollMenu } from "../ScrollMenu";
import { PlateFullPlanSearch } from "../Search";

import { useState } from "react";
import {
  DragDropContext,
  DragUpdate,
  OnDragEndResponder,
  OnDragUpdateResponder,
} from "react-beautiful-dnd";
import { Tag } from "../Tag";
import { mockMealPlanMenu, mockMealPlans } from "./mocks";
import { WeeklyMealPlan } from "./WeeklyMealPlan";

export interface FullMealPlan {
  day: string;
  plans: MealPlan[];
}

export interface MealPlan {
  description: string | null;
  image?: string;
}

export const MealPlans = () => {
  const { selectedFilters, filters, changeSelectedFilters } =
    useMealPlannerStore();

  const [mealPlans, setMealPlans] = useState(mockMealPlans);
  const [mealPlanMenu, setMealPlanMenu] = useState(mockMealPlanMenu);
  const [dragUpdateStatus, setDragUpdateStatus] = useState<DragUpdate>();

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
      const selectedMealPlan = mealPlanMenu[sourceIndex];
      if (!isNaN(destinationDayIndex)) {
        updatedMealPlans[destinationDayIndex].plans[destinationIndex] =
          selectedMealPlan;
      }
    } else {
      const sourceDayIndex = Number(result.source?.droppableId.slice(-1));
      if (!isNaN(sourceDayIndex)) {
        const temp = updatedMealPlans[sourceDayIndex].plans[sourceIndex];
        updatedMealPlans[sourceDayIndex].plans[sourceIndex] =
          updatedMealPlans[destinationDayIndex].plans[destinationIndex];
        updatedMealPlans[destinationDayIndex].plans[destinationIndex] = temp;
      }
    }
    setMealPlans([...updatedMealPlans]);
    setDragUpdateStatus(undefined);
  };

  const onMealRemove = (dayIndex: number, index: number) => {
    const updatedMealPlans = mealPlans;

    updatedMealPlans[dayIndex].plans[index] = {
      description: null,
    };

    setMealPlans([...updatedMealPlans]);
  };

  const onDragUpdate: OnDragUpdateResponder = (data) => {
    setDragUpdateStatus(data);
  };

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
        title="create category list"
        top="0"
        right="0"
        translateX="-165%"
        translateY="-37%"
      />
      <Tag
        title="assign meal plan"
        variant="red"
        top="0"
        right="0"
        translateX="-50%"
        translateY="-37%"
      />
      <Style.Pages>
        <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
          <Style.LeftPage>
            <WeeklyMealPlan
              mealPlans={mealPlans}
              onMealRemove={onMealRemove}
              dragUpdateStatus={dragUpdateStatus}
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
            <div className="main-content">
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
              <PlateFullPlannerScrollMenu mealPlanMenu={mealPlanMenu} />
            </div>
            <Style.CoffeeStain
              src="/images/plate-full-planner/coffee-stain.svg"
              alt="coffee stainer on paper"
            />
            <Style.Fruit
              src="/images/plate-full-planner/fruits.svg"
              alt="fruit on paper"
            />
            <Style.BrownPaper>
              <div className="brown-paper-content">
                <Icon name="food" />
                <Typography variant="h6" weight="semi-bold" color="book-50">
                  Roasted red pepper hummus with vegetables{" "}
                </Typography>
              </div>
              <img
                src="/images/plate-full-planner/brown-paper.png"
                alt="brown-paper"
              />
            </Style.BrownPaper>
          </Style.Page>
        </DragDropContext>
      </Style.Pages>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.section)`
    margin-top: 10px;
    position: relative;
  `,
  Background: styled.div`
    padding: 0;
    img {
      width: 100%;
    }
  `,
  Pages: styled.section`
    display: grid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    padding: 3% 4% 4% 3%;
    grid-template-columns: 1fr 1fr;
    gap: 4%;
  `,
  LeftPage: styled.section`
    margin-right: -2%;
    height: 100%;
  `,
  Page: styled.div`
    position: relative;
    display: flex;
    height: 100%;
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
  Fruit: styled.img`
    position: absolute;
    width: 30%;
    left: 0;
    bottom: 0;
    transform: translate(10%, -15%);
  `,
  BrownPaper: styled.div`
    position: absolute;
    width: 60%;
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
      transform: translateY(-80%);
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
