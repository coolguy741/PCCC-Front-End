import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AchievementsPanelTabStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .garden-active-layer {
    position: relative;
    width: 100%;
    height: 100%;

    .in-active-kitchen {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .active-garden {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .kitchen-active-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;

    .in-active-garden {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .active-kitchen {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default memo(AchievementsPanelTabStyleContainer);
