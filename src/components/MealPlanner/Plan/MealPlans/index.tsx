import { motion } from "framer-motion";
import styled from "styled-components";

import { Tag } from "../Tag";
import { WeeklyMealPlan } from "./WeeklyMealPlan";

export const MealPlans = () => {
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
        <Style.LeftPage>
          <WeeklyMealPlan />
        </Style.LeftPage>
        <Style.Page>
          <Style.CoffeeStain
            src="/images/plate-full-planner/coffee-stain.svg"
            alt="coffee stainer on paper"
          />
          <Style.Fruit
            src="/images/plate-full-planner/fruits.svg"
            alt="fruit on paper"
          />
          <Style.BrownPaper>
            <img
              src="/images/plate-full-planner/brown-paper.png"
              alt="brown-paper"
            />
          </Style.BrownPaper>
        </Style.Page>
      </Style.Pages>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.main)`
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
    img.omate-line {
      position: absolute;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -200%);
    }

    .week-container {
      position: relative;
      margin: 16% 10% 42% 5%;
    }

    .filter-container {
      position: relative;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 3%;
      margin: 16% 10%;
    }

    .btn-create {
      float: right;
      margin-right: 7%;
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
    left: 0;

    bottom: 30%;
    & > img {
      width: 100%;
    }
  `,
};
