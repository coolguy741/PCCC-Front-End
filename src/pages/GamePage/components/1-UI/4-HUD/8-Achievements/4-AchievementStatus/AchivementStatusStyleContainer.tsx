import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { Theme } from "../../../../../styles/Snippets/Theme";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AchievementStatusStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: absolute;
  top: 6.5vw;
  left: 3.5vw;
  z-index: 2;
  .status {
    .status-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.2vw;
      .status-ratio {
        color: black;
        font-weight: bold;
        font-size: 0.8vw;
      }
      .confident-status-bar {
        width: 10vw;
        height: 1vw;
        position: relative;
        border-radius: 1vw;
        margin-left: 1.5vw;
        opacity: 0.75;

        .confident-status-bar-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          border: 1.5px solid ${Theme.PCCCOrange};
          background-color: rgba(248, 124, 86, 0.35);
          border-radius: 1vw;
        }
        .confident-status-bar-fill {
          height: 100%;
          border-radius: 1vw;
          position: absolute;
          background-color: ${Theme.PCCCOrange};
        }
      }

      .clean-status-bar {
        width: 10vw;
        height: 1vw;
        position: relative;
        border-radius: 1vw;
        margin-left: 1.5vw;
        opacity: 0.75;

        .clean-status-bar-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          border: 1.5px solid ${Theme.PCCCBlue};
          background-color: rgba(0, 132, 213, 0.35);
          border-radius: 1vw;
        }
        .clean-status-bar-fill {
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCBlue};
          border-radius: 1vw;
        }
      }

      .careful-status-bar {
        width: 10vw;
        height: 1vw;
        position: relative;
        border-radius: 1vw;
        margin-left: 1.5vw;
        opacity: 0.75;

        .careful-status-bar-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          border: 1.5px solid ${Theme.PCCCGreen};
          background-color: rgba(38, 208, 124, 0.35);
          border-radius: 1vw;
        }

        .careful-status-bar-fill {
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCGreen};
          border-radius: 1vw;
        }
      }
    }
  }
`;

export default memo(AchievementStatusStyleContainer);
