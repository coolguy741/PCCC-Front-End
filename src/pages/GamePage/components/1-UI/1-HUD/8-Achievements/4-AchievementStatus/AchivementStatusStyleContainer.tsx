import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { Theme } from "../../../../../styles/Snippets/Theme";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AchievementStatusStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: absolute;
  top: 5.5vw;
  left: 3vw;
  z-index: 2;
  .status {
    .status-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .status-ratio {
        color: black;
        font-weight: bold;
      }
      .confident-status-bar {
        width: 10vw;
        height: 1vw;
        position: relative;

        .confident-status-bar-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCBlue};
          opacity: 0.5;
        }
        .confident-status-bar-fill {
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCBlue};
        }
      }

      .clean-status-bar {
        width: 10vw;
        height: 1vw;
        position: relative;

        .clean-status-bar-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCGreen};
          opacity: 0.5;
        }
        .clean-status-bar-fill {
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCGreen};
        }
      }

      .careful-status-bar {
        width: 10vw;
        height: 1vw;
        position: relative;

        .careful-status-bar-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCOrange};
          opacity: 0.5;
        }
        .careful-status-bar-fill {
          height: 100%;
          position: absolute;
          background-color: ${Theme.PCCCOrange};
        }
      }
    }
  }
`;

export default memo(AchievementStatusStyleContainer);
