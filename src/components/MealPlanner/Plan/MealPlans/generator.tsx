import { motion } from "framer-motion";
import styled from "styled-components";

import { useMealPlannerStore } from "../../../../stores/mealPlannerStore";
import Button from "../../../Button";
import { Typography } from "../../../Global/Typography";
import { BookFilter } from "../Filter";

export const MealPlanGenerator = () => {
  const { changeStep } = useMealPlannerStore();

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
            <BookFilter />
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
  Container: styled(motion.main)`
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

    .filter-container {
      position: relative;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 3%;
      margin: 16% 10%;

      div {
        background: gray;
      }
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
    transform: translate(25%, -42%);

    &:before {
      position: absolute;
      content: "";
      width: 60px;
      right: 0;
      transform: rotate(45deg) translateX(20%);
      height: 35px;
      opacity: 0.4;
      background: #ffba3a;
      z-index: 2;
    }
  `,
  LemonSticker: styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-10%, -10%);
    &:before {
      position: absolute;
      content: "";
      width: 60px;
      right: 0;
      transform: rotate(70deg) translate(40%, 100%);
      height: 35px;
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
    &:before {
      position: absolute;
      content: "";
      width: 60px;
      left: 0;
      transform: rotate(85deg) translate(120%, 90%);
      height: 35px;
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
};
