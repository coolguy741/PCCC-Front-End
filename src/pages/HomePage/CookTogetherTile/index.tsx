import { useState } from "react";
import styled from "styled-components";

import { SpeechBubble } from "../../../components/Global/SpeechBubble";
import { TileTemplate } from "../../../components/Home/TileTemplate";

const TileData = {
  title: {
    firstLine: {
      text: "Cook",
      color: "blue-600",
    },
    secondLine: {
      text: "Together",
    },
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  button: {
    text: "Play",
    link: "/dashboard/cook-together",
  },
};

export const CookTogetherTile = () => {
  const [isShowingBubble, setIsShowingBubble] = useState(false);

  const handleClick = () => {
    setIsShowingBubble(true);
  };

  return (
    <style.PageContainer>
      <style.Background />
      <div className="image-container tile-image" onClick={handleClick}>
        {isShowingBubble && (
          <div className="bubble-container">
            <SpeechBubble left={500} top={90} variant="blue" to="cook-together">
              Learn more about cooking
            </SpeechBubble>
          </div>
        )}
        <img src="/images/homepage/cook-together.png" alt="cook-together" />
      </div>
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

    .image-container {
      z-index: 20;
      position: absolute;
      top: 50%;
      right: 60px;
      width: 875.04px;

      .bubble-container {
        position: relative;
      }

      img {
        width: 100%;
      }
    }
  `,
  TileContainer: styled.div`
    padding-left: 100px;
    z-index: 20;
  `,
  Background: styled.div`
    position: absolute;
    top: 0;
    left: -32px;
    width: calc(100% + 32px);
    height: 100vh;
    background: linear-gradient(
      111.02deg,
      var(--blue-200) 9.6%,
      var(--green-200) 97.76%
    );
    z-index: -1;
  `,
};
