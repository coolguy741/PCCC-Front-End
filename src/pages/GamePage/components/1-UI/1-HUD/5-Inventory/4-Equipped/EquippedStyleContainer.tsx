import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const EquippedStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 9vw;
  left: -6.5vw;
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
      width: 100%;
      color: black;
      font-size: 1.15vw;
      font-weight: bold;
      margin-top: 1.5vw;
      text-align: center;
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
        width: 4.25vw;
      }

      .equipped-break-line {
        ${UserSelectNone};
        ${MarginPaddingNone};
        width: 30%;
        height: 0.1vw;
        opacity: 0.5;
        background-color: #291700;
      }
    }
  }
`;

export default memo(EquippedStyleContainer);
