import styled from "styled-components";
import { TileTemplate } from "../../../components/Home/TileTemplate";

const TileData = {
  title: {
    firstLine: {
      text: "Mad",
      color: "green-600",
    },
    secondLine: {
      text: "Kitchen",
    },
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  button: {
    text: "Explore",
    link: "/dashboard/mad-kitchen",
  },
};

export const MadKitchenTile = () => {
  return (
    <style.PageContainer>
      <style.Background>
        <img src="/images/homepage/mad-kitchen.png" alt="mad-kitchen" />
      </style.Background>
      <style.TileContainer>
        <TileTemplate
          title={TileData.title}
          description={TileData.description}
          button={TileData.button}
        />
      </style.TileContainer>
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
  `,
  TileContainer: styled.div`
    padding-left: 100px;
  `,
  Background: styled.div`
    position: absolute;
    top: 400vh;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(322.97deg, #fee5dd 2.67%, #fff5cc 96.38%);
    z-index: -1;

    img {
      position: absolute;
      top: 54px;
      right: 60px;
      width: 875.04px;
    }
  `,
};
