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

export const AnimatedTile = (props: any) => {
  const [isShowingBubble, setIsShowingBubble] = useState(false);
  const { tile } = props;

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

      <article className="image-container" onClick={handleClick}>
        {isShowingBubble && (
          <div className="bubble-container">
            <SpeechBubble
              left={tile.speechBubble.left}
              top={tile.speechBubble.top}
              variant={tile.speechBubble.variant as any}
              to={tile.speechBubble.link}
            >
              {tile.speechBubble.text}
            </SpeechBubble>
          </div>
        )}
        <img
          src={tile.image}
          alt={`${tile.titleFirstLine} ${tile.titleSecondLine}`}
        />
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
    }

    .image-container {
      width: 55%;
      margin-top: 5%;

      .bubble-container {
        position: relative;
        display: grid;
        place-items: center;
      }

      img {
        width: 100%;
      }
    }
  `,
};
