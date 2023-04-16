import styled from "styled-components";
import { TileTemplate } from "../../../components/Home/TileTemplate";

const TileData = {
  title: {
    firstLine: {
      text: "foodways",
      color: "green-600",
    },
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  button: {
    text: "Explore",
    link: "/dashboard/foodways",
  },
};

export const FoodwaysTile = () => {
  return (
    <style.PageContainer>
      <style.Background />
      <style.TileContainer>
        <TileTemplate
          title={TileData.title}
          desription={TileData.description}
          button={TileData.button}
        />
      </style.TileContainer>
      <img src="/images/homepage/foodways.png" alt="grow" />
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      top: 54px;
      right: 60px;
      width: 875.04px;
    }
  `,
  TileContainer: styled.div`
    padding-left: 100px;
  `,
  Background: styled.div`
    position: absolute;
    top: 500vh;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(322.97deg, #d2f7e5 2.67%, #fff5cc 92.48%);
    z-index: -1;
  `,
};
