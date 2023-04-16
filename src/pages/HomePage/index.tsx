import styled from "styled-components";
import { CookTogetherTile } from "./CookTogetherTile";
import { DiscoverTogetherTile } from "./DiscoverTogetherTile";
import { FoodwaysTile } from "./FoodwaysTile";
import { GrowTogetherTile } from "./GrowTogetherTile";
import { MadKitchenTile } from "./MadKitchenTile";
import { MealPlannerTile } from "./MealPlannerTile";
import { MealtimeMomentsTile } from "./MealtimeMomentsTile";
import { PowerFullKidsTile } from "./PowerFullKidsTile";

export const HomePage = () => {
  return (
    <Style.PageContainer>
      <PowerFullKidsTile />
      <DiscoverTogetherTile />
      <GrowTogetherTile />
      <CookTogetherTile />
      <MadKitchenTile />
      <FoodwaysTile />
      <MealtimeMomentsTile />
      <MealPlannerTile />
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    margin: -108px 0px 0px 0px;
    font-family: "Noir Std";
    font-style: normal;
  `,
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  BigText: styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 76.993px;
    line-height: 76.993px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #c4c4c4;
    margin: 0px;
  `,
  SmallText: styled.span`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 0.02em;
    color: #c4c4c4;
    margin: 0px;
  `,
  MainSection: styled.div`
    display: flex;
    align-items: flex-start;
    margin: 250px;
  `,
  TogetherSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;

    .text-container {
      width: 600px;

      .text {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 800;
        font-size: 28.7848px;
        line-height: 39px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #c4c4c4;
      }

      .big-text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 900;
        font-size: 107.971px;
        line-height: 85%;
        text-transform: uppercase;
        color: #d9d9d9;
        margin: 0px;
      }
    }

    .image-container {
      position: relative;
    }
  `,
  ContentSection: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    border-bottom: 2px solid black;
    margin: 0px;

    .text-container {
      width: 600px;

      .big-text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 103.68%;
        letter-spacing: 0.02em;
        color: #797979;
      }

      .large-text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 103.68%;
        letter-spacing: 0.02em;
        color: #797979;
      }

      .text {
        font-family: "Noir Std";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.02em;
        color: #797979;
      }
    }

    .image-container {
      position: relative;
    }
  `,
  Hr: styled.div`
    padding: 0px;
    height: 0px;
    border-top: 2px solid black;
  `,
  InfoContainer: styled.div`
    padding: 40px;
    background-color: #d9d9d9;
    margin: 0px;
    display: flex;
    justify-content: space-between;

    .row {
      display: flex;
      gap: 10px;
    }
  `,
  Footer: styled.div`
    padding: 23px;
    background-color: #797979;
    padding-left: 63px;
  `,
};
