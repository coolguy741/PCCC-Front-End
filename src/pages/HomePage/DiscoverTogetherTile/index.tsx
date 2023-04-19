import styled from "styled-components";
import { TileTemplate } from "../../../components/Home/TileTemplate";

const TileData = {
  title: {
    firstLine: {
      text: "Discover",
      color: "orange-600",
    },
    secondLine: {
      text: "Together",
    },
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  button: {
    text: "Explore",
    link: "/dashboard/discover-together",
  },
};

export const DiscoverTogetherTile = () => {
  return (
    <style.PageContainer>
      <style.Background>
        <img
          src="/images/homepage/discover-together.png"
          alt="discover"
          className="tile-image"
        />
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
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    background: linear-gradient(322.97deg, #fee5dd 2.67%, #fff5cc 96.38%);
    z-index: -1;
    img {
      position: absolute;
      top: 50%;
      right: 60px;
      width: 875.04px;
    }
  `,
};
