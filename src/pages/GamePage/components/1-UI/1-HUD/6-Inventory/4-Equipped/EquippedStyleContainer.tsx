import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const EquippedStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 9vw;
  left: -6.75vw;
  margin-bottom: 3.25vw;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  .equipped-bg {
    ${UserSelectNone};
    ${MarginPaddingNone};
    width: 100%;
    height: 100%;
  }

  .equipped-content-container {
    ${UserSelectNone};
    ${MarginPaddingNone};
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 0.5vw;

    .equipped-title {
      ${UserSelectNone};
      ${MarginPaddingNone};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 1.5vw;

      .equipped-title-spacer {
        ${UserSelectNone};
        ${MarginPaddingNone};
        width: 0.75vw;
        height: 1.75vw;
        background-color: #f87c56;
      }

      .equipped-title-text {
        ${UserSelectNone};
        ${MarginPaddingNone};
        color: black;
        font-weight: bold;
        font-size: 1.1vw;
        line-height: 1.75vw;
        margin-left: 0.5vw;
      }
    }

    .equipped-items {
      ${UserSelectNone};
      ${MarginPaddingNone};
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;
      margin-bottom: 1vw;

      .equipped-item {
        ${UserSelectNone};
        ${MarginPaddingNone};
        width: 5vw;
        background: linear-gradient(0deg, #efe6dc, #efe6dc),
          radial-gradient(
            50% 50% at 50% 50%,
            rgba(255, 255, 255, 0) 0%,
            rgba(182, 144, 105, 0.2) 100%
          );

        border: 2.5px solid #f87c56;
        padding: 0.5vw;
        border-radius: 1vw;
      }
    }
  }
`;

export default memo(EquippedStyleContainer);
