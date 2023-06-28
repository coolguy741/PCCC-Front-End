import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AudioSlidersStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  .music-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .music-slider-bg {
      position: absolute;
      width: 70%;
      height: 1.15vh;
      border-radius: 1.5vw;
      mix-blend-mode: soft-light;
      background-color: #4e2f00;
      border: 0.1vw solid rgba(75, 19, 19, 1);
      box-shadow: inset 3px 3px 0px black, 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .music-slider-fill {
      width: 69%;
      height: 0.75vw;
      position: absolute;
      border-radius: 1.25vw;
      background: linear-gradient(49deg, #ff8a00 0%, #ffc700 100%);
    }
    .music-slider-btn {
      position: relative;
      width: 6vw;
    }
  }

  .sound-slider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    .sound-slider-bg {
      position: absolute;
      width: 70%;
      height: 1.15vh;
      border-radius: 1.5vw;
      mix-blend-mode: soft-light;
      background-color: #4e2f00;
      border: 0.1vw solid rgba(75, 19, 19, 1);
      box-shadow: inset 3px 3px 0px black, 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
    .sound-slider-fill {
      width: 69%;
      height: 0.75vw;
      position: absolute;
      border-radius: 1.25vw;
      background: linear-gradient(49deg, #ff8a00 0%, #ffc700 100%);
    }
    .sound-slider-btn {
      position: relative;
      width: 5vw;
    }
  }
`;

export default memo(AudioSlidersStyleContainer);
