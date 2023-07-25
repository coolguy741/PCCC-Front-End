import { memo } from "react";
import styled from "styled-components";
import PageStyleContainer from "../../../../../styles/Containers/PageStyleContainer";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AchievementsPanelStyleContainer = styled(PageStyleContainer)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  .achievements-panel {
    width: 60vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .achievements-panel-bg {
      width: 100%;
      height: 100%;
      position: relative;
    }
    .achievements-panel-title {
      position: absolute;
      top: 0;
      left: 0;
      color: black;
      font-size: 2.25vw;
      font-weight: bold;
      margin-top: 3vw;
      margin-left: 5vw;
    }
    .achievement-tabs {
      position: absolute;
      width: 93%;
      margin-left: 0.5vw;
      margin-top: 6vw;
      display: flex;
      align-items: center;
      justify-content: center;

      .top-fade {
        pointer-events: none;
        margin-left: 0.5vw;
        margin-top: 6vw;
        right: 1%;
        top: 7%;
        height: 4vw;
        width: 79.5%;
        position: absolute;
        z-index: 1;
        border-radius: 10% 10% 10% 10%;
        background: linear-gradient(
          to top,
          rgba(255, 255, 255, 0) 20%,
          #fff4eb 50%
        );
      }

      .bottom-fade {
        pointer-events: none;
        margin-left: 0.5vw;
        margin-top: 6vw;
        height: 1.5vw;
        right: 3%;
        bottom: 2.75%;
        width: 79.5%;
        position: absolute;
        z-index: 1;
        border-radius: 10% 10% 6% 10%;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 20%,
          #fff4eb 50%
        );
      }
    }

    .todo-list {
      position: absolute;
      top: 0;
      right: 0;
      width: 21vw;
      margin-top: 4vw;
      margin-right: 4vw;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .exit-button-container {
      position: absolute;
      top: -1vw;
      right: -1vw;
      z-index: 2;
      width: 5vw;
    }
  }
`;

export default memo(AchievementsPanelStyleContainer);
