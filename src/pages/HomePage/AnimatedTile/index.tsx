import Spline from "@splinetool/react-spline";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { SpeechBubble } from "../../../components/Global/SpeechBubble";
import {
  BaseTypographyProps,
  Typography,
} from "../../../components/Typography";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Tile } from "../tile_data";

const h3Props = {
  tag: "h3",
  size: "4vh",
  color: "neutral-800",
  lineHeight: "110%",
  mb: "1vh",
  weight: "700",
} as BaseTypographyProps;

function showSubtitleWithException(subtitle: string) {
  if (subtitle) {
    if (subtitle === "Sunny's Place: A Bee-utifull Food Adventure") {
      return (
        <Typography {...h3Props}>
          Sunny's Place:
          <br />A Bee-utifull Food Adventure
        </Typography>
      );
    } else return <Typography {...h3Props}>{subtitle}</Typography>;
  }
}

export const AnimatedTile = ({ tile }: { tile: Tile }) => {
  const [isShowingBubble, setIsShowingBubble] = useState(false);

  const handleClick = () => {
    setIsShowingBubble(true);
  };

  return (
    <Style.PageContainer
      color={tile.titleColor}
      start={tile.gradientStart}
      end={tile.gradientEnd}
    >
      <article>
        <Typography
          tag="h2"
          size="8vh"
          color="neutral-800"
          weight="900"
          textTransform="uppercase"
          letterSpacing="110%"
          lineHeight="90%"
          mb="1.5vh"
        >
          <Typography tag="span" color={tile.titleColor}>
            {tile.titleFirstLine}
          </Typography>
          <br />
          {tile.titleSecondLine}
        </Typography>
        {showSubtitleWithException(tile.subtitle)}
        <Typography
          weight={500}
          size="2.25vh"
          lineHeight="115%"
          mb={convertToRelativeUnit(48, "vh")}
          color="neutral-700"
        >
          {tile.description}
        </Typography>
        <Button to={tile.buttonLink}>{tile.buttonText}</Button>
      </article>

      <article className="canvas-container" onClick={handleClick}>
        {isShowingBubble && (
          <div className="bubble-container">
            <SpeechBubble
              variant={tile.speechBubble.variant}
              to={tile.speechBubble.link}
            >
              {tile.speechBubble.text}
            </SpeechBubble>
          </div>
        )}
        <Spline scene="https://prod.spline.design/3MYR0IfAhLxqyH-Z/scene.splinecode" />

        {/* <img
          src={tile.image}
          alt={`${tile.titleFirstLine} ${tile.titleSecondLine}`}
        /> */}
      </article>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.section<{ color: string; start: string; end: string }>`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    padding-left: 7.5vw;
    ${({ start, end }) => animatedbackgroundGradient(start, end)};

    article {
      width: 42.5%;
      z-index: 1;
    }

    .canvas-container {
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;

      .bubble-container {
        position: relative;
        display: grid;
        place-items: center;
      }

      /* img {
        width: 100%;
      } */
    }
  `,
};
