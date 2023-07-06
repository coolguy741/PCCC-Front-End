import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const QuitButtonStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};

  margin-top: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;

  .quit-button-bg {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .quit-btn {
    cursor: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    .static {
      margin-top: 0.25vw;
      margin-left: 0.15vw;
      position: relative;
    }

    .quit-btn-text {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.4vw;
      .quit-btn-text-eng {
        color: white;
        font-size: 1.75vw;
        font-weight: bold;
        position: relative;
        margin-right: 0.2vw;
      }
      .quit-btn-text-fr {
        color: white;
        font-size: 1.75vw;
        font-weight: bold;
        position: absolute;
        opacity: 0;
      }
    }

    .pressed {
      opacity: 0;
      position: absolute;
      width: 95%;
      height: 100%;
      margin-bottom: 0.5vw;
    }

    .pressed:active {
      opacity: 1;
    }
  }

  .quit-btn:active {
    transform: scale(0.9);
  }
`;

export default memo(QuitButtonStyleContainer);
