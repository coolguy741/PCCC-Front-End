import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../../styles/Snippets/UserSelectNone";

const LoadPanelStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  /* background-color: black; */
  visibility: hidden;

  .load-panel-title {
    margin-top: 5vw;
    width: 45%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 4vw;
    .load-panel-bg {
      position: relative;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .load-panel-text-container {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      .load-panel-text {
        color: black;
        font-size: 2.25vw;
        font-weight: bold;
        text-align: center;
      }
    }
    .load-panel-exit-button {
      position: absolute;
      width: 5vw;
      margin-bottom: 12vw;
      margin-left: 42.5vw;
    }
  }
  .slot-options {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default memo(LoadPanelStyleContainer);
