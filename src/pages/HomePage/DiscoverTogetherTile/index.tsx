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
      <style.Background />
      <style.Content>
        <style.TileContainer>
          <TileTemplate
            title={TileData.title}
            desription={TileData.description}
            button={TileData.button}
          />
        </style.TileContainer>
      </style.Content>
    </style.PageContainer>
  );
};

const style = {
  PageContainer: styled.div`
    min-height: calc(100vh);
    display: flex;
    align-items: center;
  `,
  TileContainer: styled.div`
    padding-left: 100px;
  `,
  Background: styled.div`
    position: absolute;
    top: 100vh;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(322.97deg, #fee5dd 2.67%, #fff5cc 96.38%);
    z-index: -1;
  `,
  Content: styled.div`
    position: relative;
  `,
};
