// TODO: Create animated tile functionality.
// needed?
// title (component with color variant span)
// imageOrSpline (currently image, spline intended)
// text (details)
// image width & content width.
// button action.
// animted background gradient.

import { useState } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { SpeechBubble } from "../../../components/Global/SpeechBubble";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

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
        <h2>
          <span>{tile.titleFirstLine}</span>
          <br />
          {tile.titleSecondLine}
        </h2>
        {tile.subtitle && <h3>{tile.subtitle}</h3>}
        <p>{tile.description}</p>
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
      width: 40%;

      h2 {
        font-weight: 900;
        font-size: 7.5vh;
        line-height: 90%;
        letter-spacing: 110%;
        text-transform: uppercase;
        margin-bottom: 2vh;

        span {
          color: ${({ color }) => `var(--${color})`};
        }
      }

      h3 {
        font-weight: 700;
        font-size: 4vh;
        color: var(--neutral-800);
      }

      p {
        font-weight: 500;
        font-size: 2.25vh;
        line-height: 115%;
        margin-bottom: ${convertToRelativeUnit(48, "vh")};
        color: var(--neutral-700);
      }
    }

    .image-container {
      width: 50%;
      margin-top: 5%;

      .bubble-container {
        position: relative;
      }

      img {
        width: 100%;
      }
    }
  `,
};
