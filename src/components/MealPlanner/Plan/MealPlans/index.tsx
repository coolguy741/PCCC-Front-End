import { motion } from "framer-motion";
import styled from "styled-components";

import { Typography } from "../../../Global/Typography";
import { Tag } from "../Tag";

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
          <div className="meal-planner-details">
            <div>12 Total Students</div>
            <div>04 meals per day</div>
            <Style.DateLabel>
              <div className="label-container">
                <Typography variant="h2" color="book-400" weight="semi-bold">
                  08/19/2023
                </Typography>
              </div>
              <img
                src="/images/plate-full-planner/date-label.svg"
                alt="date label"
              />
              <div className="week-mark">
                <img
                  src="/images/plate-full-planner/week-mark.svg"
                  alt="week-mark"
                />
              </div>
            </Style.DateLabel>
          </div>
        </Style.LeftPage>
        <Style.Page>
          <Style.CoffeeStain
            src="/images/plate-full-planner/coffee-stain.svg"
            alt="coffee stainer on paper"
          />
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
    padding: 3% 5% 4% 4%;
    grid-template-columns: 1fr 1fr;
    gap: 4%;
  `,
  LeftPage: styled.section`
    position: relative;

    .meal-planner-details {
      display: flex;
      justify-content: space-between;
      position: relative;
    }
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
  DateLabel: styled.div`
    position: absolute;
    top: 0;
    width: 50%;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    justify-content: center;

    .week-mark {
      position: absolute;
      width: 30%;
      left: 0;
      transform: translate(30%, -25%);
      display: flex;
      align-items: center;

      &:after {
        position: absolute;
        color: white;
        left: 0;
        content: "WEEK OF";
        font-size: 16px;
        font-family: Noir Std;
        font-weight: 600;
        width: 100%;
        vertical-align: middle;
        text-align: center;
        transform: rotate(-7.38deg);
      }
    }

    & > div.label-container {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      top: 50%;
      transform: rotate(-1.85deg) translate(0, -50%);
    }
    & > img {
      width: 100%;
    }
  `,
};
