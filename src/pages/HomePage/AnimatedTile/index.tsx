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
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";

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
    text: "Let's go!",
    link: "/dashboard/discover-together",
  },
};

export const AnimatedTile = () => {
  const [isShowingBubble, setIsShowingBubble] = useState(false);

  const handleClick = () => {
    setIsShowingBubble(true);
  };

  return (
    <Style.PageContainer>
      <section>
        <h2>
          <span className={TileData.title.firstLine.color}>
            {TileData.title.firstLine.text}
          </span>
          <br />
          {TileData.title.secondLine.text}
        </h2>
        <p>{TileData.description}</p>
        <Button>{TileData.button.text}</Button>
      </section>

      <div className="image-container" onClick={handleClick}>
        {isShowingBubble && (
          <div className="bubble-container">
            <SpeechBubble
              left={500}
              top={90}
              variant="orange"
              to="discover-together"
            >
              Discover more
            </SpeechBubble>
          </div>
        )}
        <img src="/images/homepage/discover-together.png" alt="discover" />
      </div>
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;

    section {
      .orange-600 {
        color: var(--orange-600);
      }
      max-width: 45%;

      h2 {
        font-weight: 900;
        font-size: 10vh;
        line-height: 90%;
        letter-spacing: 110%;
        text-transform: uppercase;
        margin-bottom: ${convertToRelativeUnit(40, "vh")};
      }

      p {
        font-weight: 500;
        font-size: ${convertToRelativeUnit(23, "vh")};
        line-height: 115%;
        margin-bottom: ${convertToRelativeUnit(48, "vh")};
        color: var(--neutral-700);
      }
    }

    .image-container {
      max-width: 45%;

      .bubble-container {
        position: relative;
      }

      img {
        width: 100%;
      }
    }
  `,
};
