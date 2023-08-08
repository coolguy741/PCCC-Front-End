import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const LoadSlotOptionStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 100%;
  position: relative;

  .slot-bg {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .slot-title {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg) translate(-5.25vw, -0.5vw);
    .slot-title-content {
      color: black;
      font-size: 1.5vw;
      font-weight: bold;
    }
  }

  .top-title {
    position: absolute;
    top: 1.5vw;
    width: 100%;
    color: black;
    font-size: 1.5vw;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 1vw;
    .title-content {
      color: #c8b492;
      opacity: 0.5;
      font-size: 1vw;
      font-weight: bold;
    }
    .recipe-title-content {
      color: black;
      font-size: 1.75vw;
      text-align: center;
      line-height: 2vw;
    }
    .location-img {
      width: 75%;
      margin-left: 1.5vw;
    }
    .achievement-progress {
      color: #c8b492;
      font-size: 1vw;
      margin-top: 0.2vw;
    }
    .progress {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 52%;
      .line-break {
        position: relative;
        width: 0.15vw;
        height: 3vw;
        background-color: #c8b492;
      }
    }
  }
`;

export default memo(LoadSlotOptionStyleContainer);
