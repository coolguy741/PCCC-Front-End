import { motion } from "framer-motion";
import styled from "styled-components";

import { WEEK_DAYS } from "../../../../pages/consts";
import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import Button from "../../../Button";
import { Checkbox } from "../../../Global/Checkbox";
import { Typography } from "../../../Global/Typography";
import { DatePicker } from "../DatePicker";
import { BookPicker } from "../Picker";

export const MealPlanGenerator = () => {
  const {
    changeStep,
    dates,
    mealsPerDay,
    childrenCount,
    changeDates,
    changeChildrenCount,
    changeMealsPerDay,
  } = useMealPlannerStore();

  const handleCreate = () => {
    changeStep(2);
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
      <Style.Pages>
        <Style.Page>
          <Style.MealPlanLabel>
            <div className="label-container">
              <Typography variant="h5" color="book-400" weight="semi-bold">
                Lettuce help you build a meal plan
              </Typography>
            </div>
            <img
              src="/images/plate-full-planner/label.svg"
              alt="meal planner label"
            />
          </Style.MealPlanLabel>
          <Style.Corner bottom="-1%" left="-1%" angle="270deg" />
          <Style.Corner bottom="-1%" right="-1%" angle="180deg" />
          <Style.LemonSticker>
            <img
              src="/images/plate-full-planner/lemon-sticker.svg"
              alt="lemon sticker"
            />
          </Style.LemonSticker>
          <Style.SmallScribble
            src="/images/plate-full-planner/scribble-small.svg"
            alt="small scribble on paper"
          />
          <div className="filter-container">
            <DatePicker
              dates={dates}
              setDates={changeDates}
              placeholder="17.05.2023 - 21.05.2023"
            />
            <BookPicker
              label="Meals per day"
              placeholder="4"
              number={mealsPerDay}
              setNumber={changeMealsPerDay}
            />
            <BookPicker
              label="Meals per day"
              number={mealsPerDay}
              setNumber={changeMealsPerDay}
            />
            <BookPicker
              label="For how many"
              placeholder="5"
              number={childrenCount}
              setNumber={changeChildrenCount}
            />
          </div>
        </Style.Page>
        <Style.Page>
          <Style.Corner top="-1%" left="-1%" />
          <Style.Corner top="-1%" right="-1%" angle="90deg" />
          <img
            src="/images/plate-full-planner/omate-line.svg"
            alt="omate line"
            className="omate-line"
          />
          <Style.CoffeeStain
            src="/images/plate-full-planner/coffee-stain.svg"
            alt="coffee stainer on paper"
          />
          <Style.Arrow
            src="/images/plate-full-planner/arrows.svg"
            alt="arrows on paper"
          />
          <Style.Scribble
            src="/images/plate-full-planner/scribble-large.svg"
            alt="large scribble on paper"
          />
          <div className="week-container">
            <Typography variant="paragraph3" color="book-300" weight="medium">
              Days of the week
            </Typography>

            <Style.AppleSticker>
              <img
                src="/images/plate-full-planner/apple-sticker.svg"
                alt="apple sticker"
                className="apple-sticker"
              />
            </Style.AppleSticker>
            <Style.Paper>
              <img
                src="/images/plate-full-planner/paper.svg"
                alt="week paper"
              />
              <div className="week-group">
                {WEEK_DAYS.map((day) => {
                  return (
                    <Style.Checkbox key={day}>
                      <Checkbox colorOption="book" sizeOption="small" />
                      <label>{day}</label>
                    </Style.Checkbox>
                  );
                })}
              </div>
            </Style.Paper>
          </div>
          <Button
            icon="next"
            iconPosition="right"
            className="btn-create"
            onClick={handleCreate}
          >
            Create Plan
          </Button>
        </Style.Page>
      </Style.Pages>
    </Style.Container>
  );
};

const Style = {
  Container: styled(motion.section)`
    padding-top: 10px;
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
    padding: 9% 6% 6% 5%;
    grid-template-columns: 1fr 1fr;
    gap: 9%;
  `,
  Page: styled.div`
    background-image: linear-gradient(to right, #eadab650 0%, #eadab680 100%);
    border-radius: 16px;
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

    .week-group {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      grid: 5%;
      top: 50%;
      left: 0;
      transform: rotate(-2.51deg) translate(0, -40%);
      padding: 5%;
      position: absolute;
    }

    .filter-container {
      position: relative;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      row-gap: 33%;
      vertical-align: baseline;
      column-gap: 7%;
      margin: 16% 10%;
    }

    .btn-create {
      float: right;
      margin-right: 7%;
    }
  `,
  Corner: styled.div.attrs(
    ({
      top,
      bottom,
      left,
      right,
      angle,
    }: {
      top: string;
      bottom: string;
      right: string;
      left: string;
      angle: string;
    }) => ({
      top,
      bottom,
      right,
      left,
      angle,
    }),
  )`
    background: var(--book-200);
    width: 8%;
    position: absolute;
    ${({ top }) => !!top && `top: ${top};`}
    ${({ left }) => !!left && `left: ${left};`}
    ${({ right }) => !!right && `right: ${right};`}
    ${({ bottom }) => !!bottom && `bottom: ${bottom};`}
    ${({ angle }) => !!angle && `transform: rotate(${angle});`}
    height: 8%;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
  `,
  AppleSticker: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 23%;
    transform: translate(25%, -42%);

    & > img {
      width: 100%;
    }

    &:before {
      position: absolute;
      content: "";
      width: 40%;
      right: 0;
      transform: rotate(45deg) translateX(20%);
      height: 20%;
      opacity: 0.4;
      background: #ffba3a;
      z-index: 2;
    }
  `,
  LemonSticker: styled.div`
    position: absolute;
    width: 35%;
    right: 0;
    bottom: 0;
    transform: translate(-10%, -10%);

    & > img {
      width: 100%;
    }
    &:before {
      position: absolute;
      content: "";
      width: 24%;
      right: 0;
      transform: rotate(70deg) translate(40%, 100%);
      height: 13%;
      opacity: 0.4;
      background: #ffba3a;
      z-index: 3;
    }
  `,
  CoffeeStain: styled.img`
    position: absolute;
    width: 84%;
    transform: rotate(-11.75deg) translate(-10%, 15%);
    opacity: 0.8;
    mix-blend-mode: color-burn;
  `,
  Arrow: styled.img`
    position: absolute;
    width: 14%;
    right: 0;
    bottom: 0;
    transform: translate(-45%, -85%);
  `,
  Scribble: styled.img`
    position: absolute;
    width: 50%;
    left: 0;
    mix-blend-mode: color-burn;
    bottom: 0;
    transform: translate(-10%, -7%);
  `,
  SmallScribble: styled.img`
    position: absolute;
    width: 25%;
    left: 50%;
    mix-blend-mode: color-burn;
    bottom: 0;
    transform: translate(-60%, -107%);
  `,
  Paper: styled.div`
    width: 100%;
    & > img {
      width: 100%;
    }

    &:before {
      position: absolute;
      content: "";
      width: 10%;
      left: 0;
      transform: rotate(85deg) translate(100%, 90%);
      height: 15%;
      opacity: 0.4;
      background: #ffba3a;
      z-index: 2;
    }
  `,
  MealPlanLabel: styled.div`
    position: absolute;
    top: 0;
    width: 83%;
    left: 50%;
    transform: translate(-50%, -45%);
    & > div.label-container {
      position: absolute;
      display: flex;
      align-items: center;
      height: 100%;
      text-align: center;
      padding: 0 27%;
      top: 50%;
      transform: rotate(-1.85deg) translate(0, -50%);
    }
    & > img {
      width: 100%;
    }
  `,
  Checkbox: styled.div`
    display: flex;
    width: 25%;
    gap: 8%;
    padding: 2% 0;
    & > label {
      text-transform: capitalize;
      color: var(--book-300);
    }
  `,
};
