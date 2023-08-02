import { memo } from "react";
import styled from "styled-components";
import PageStyleContainer from "../../../../../styles/Containers/PageStyleContainer";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const QuitPanelStyleContainer = styled(PageStyleContainer)`
  ${UserSelectNone};
  ${MarginPaddingNone};
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  .quit-panel-bg {
    position: relative;
    width: 32.5vw;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .quit-content {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .quit-header {
      display: flex;
      width: 32.5vw;
      align-items: center;
      justify-content: center;

      .quit-pages {
        position: relative;
        width: 97%;
      }
      .quit-copy {
        position: absolute;
        font-weight: bold;
        font-size: 1.75vw;
      }
    }

    .quit-btns {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      position: relative;

      .yes-quit-btn {
        cursor: none;
        border: none;
        background: none;
        width: 18vw;
        margin-right: 0.5vw;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        justify-content: center;
        .quit-yes-svg {
          position: relative;
        }
        .quit-yes-text {
          position: absolute;
          font-weight: bold;
          font-size: 1.75vw;
          color: white;
          margin-bottom: 0.65vw;
        }
      }
      .no-quit-btn {
        cursor: none;
        border: none;
        background: none;
        width: 19vw;
        margin-left: 0.5vw;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        align-items: center;
        justify-content: center;
        .quit-no-svg {
          position: relative;
        }
        .quit-no-text {
          position: absolute;
          font-weight: bold;
          font-size: 1.75vw;
          color: white;
          margin-bottom: 0.65vw;
        }
      }
      .no-quit-btn:active {
        transform: scale(0.9);
      }
      .yes-quit-btn:active {
        transform: scale(0.9);
      }
    }
  }

  .quit-exit-button {
    position: absolute;
    width: 5vw;
    margin-bottom: 15vw;
    margin-left: 31vw;
    cursor: none;
  }
`;

export default memo(QuitPanelStyleContainer);
