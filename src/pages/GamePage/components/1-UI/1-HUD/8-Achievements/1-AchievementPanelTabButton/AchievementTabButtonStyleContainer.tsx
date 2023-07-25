import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const AchievementTabButtonStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: absolute;
  top: 0;
  left: 0;

  .kitchen-tab-button {
    background: none;
    border: none;
    cursor: none;
    margin-top: 0.25vw;
    margin-left: 16.5vw;
    padding-left: 3.75vw;
    padding-right: 3.75vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    border-radius: 1rem;

    .kitchen-tab-title {
      color: black;
      font-size: 1.75vw;
      font-weight: bold;
    }
  }

  .garden-tab-button {
    background: none;
    border: none;
    cursor: none;
    margin-top: 0.25vw;
    margin-left: 1.15vw;
    padding-left: 3.75vw;
    padding-right: 3.75vw;
    padding-top: 1vw;
    padding-bottom: 1vw;
    border-radius: 1rem;
    .garden-tab-title {
      color: black;
      font-size: 1.75vw;
      font-weight: bold;
    }
  }
`;

export default memo(AchievementTabButtonStyleContainer);
