import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const SliderStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .slider-bg {
    position: absolute;
    width: 70%;
    height: 1.15vh;
    border-radius: 1.5vw;
    mix-blend-mode: soft-light;
    background-color: #4e2f00;
    border: 0.1vw solid rgba(75, 19, 19, 1);
    box-shadow: inset 3px 3px 0px black, 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .slider-fill-container {
    width: 70%;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: flex-start;

    .slider-fill {
      width: 100%;
      height: 0.35vw;
      border-radius: 1.1vw;
      background: linear-gradient(49deg, #ff8a00 0%, #ffc700 100%);
    }
  }

  .slider-fill-button {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .slider-btn {
      position: relative;
      width: 6vw;
      border-radius: 100%;
      touch-action: none;
    }
  }
`;

export default memo(SliderStyleContainer);
