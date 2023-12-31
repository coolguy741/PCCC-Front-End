// import Spline from "@splinetool/react-spline";
import React, { Suspense, useEffect, useRef, useState } from "react";
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

const Spline = React.lazy(() => import("@splinetool/react-spline"));

const h3Props = {
  tag: "h3",
  size: "4vh",
  color: "neutral-800",
  lineheight: "110%",
  mb: "1vh",
  weight: "700",
} as BaseTypographyProps;

function showSubtitleWithException(subtitle: string, color: string) {
  if (subtitle) {
    if (subtitle === "Sunny's Place: A Bee-utifull Food Adventure") {
      return (
        <Typography {...h3Props} color={color}>
          Sunny's Place:
          <br />A Bee-utifull Food Adventure
        </Typography>
      );
    } else
      return (
        <Typography {...h3Props} color={color}>
          {subtitle}
        </Typography>
      );
  }
}

interface iSpline {
  [key: string]: string;
}

const SPLINE_ARR: iSpline = {
  cook: "https://prod.spline.design/3MYR0IfAhLxqyH-Z/scene.splinecode",
  mealtime: "https://prod.spline.design/E-xcIdDrzq-0WTxA/scene.splinecode",
  discover: "https://prod.spline.design/e-Ytpv047VfjsTtx/scene.splinecode",
  foodways: "https://prod.spline.design/cSsgh0BV9i3GO7hH/scene.splinecode",
  games: "https://prod.spline.design/3frOmFqEaKmLo27V/scene.splinecode",
  grow: "https://prod.spline.design/irggER2hPUI63Ktf/scene.splinecode",
  "meal-planner":
    "https://prod.spline.design/mxVllMtfWXBcJ1ey/scene.splinecode",
};

const AnimatedTile = ({
  tile,
  activeSlide,
  index,
}: {
  tile: Tile;
  activeSlide: number | undefined;
  index: number;
}) => {
  const spline = useRef();
  const [isShowingBubble, setIsShowingBubble] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    setIsShowingBubble(true);
  };

  function onLoad(splineApp: any) {
    spline.current = splineApp;
  }

  function onHover() {
    console.log("Hover");
  }

  useEffect(() => {
    if (activeSlide === index + 1) {
      if (!loaded) setLoaded(true);
    }
  }, [activeSlide, index]);

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
          texttransform="uppercase"
          letterSpacing="110%"
          lineheight="90%"
          mb="1.5vh"
        >
          <Typography tag="span" color={tile.titleColor}>
            {tile.titleFirstLine}
          </Typography>
          <br />
          <Typography tag="span" color={tile.titleSecondColor}>
            {tile.titleSecondLine}
          </Typography>
        </Typography>
        {showSubtitleWithException(tile.subtitle, tile.titleSecondColor)}
        <Typography
          weight={500}
          size="2.25vh"
          lineheight="115%"
          mb={convertToRelativeUnit(48, "vh")}
          color={tile.titleSecondColor}
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
        <Suspense fallback={null}>
          {loaded && <Spline scene={SPLINE_ARR[tile.id]} onLoad={onLoad} />}
        </Suspense>
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
        top: 25%;
        right: 10%;
      }

      .img-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 7 vw;
      }
    }
  `,
};

export default AnimatedTile;
