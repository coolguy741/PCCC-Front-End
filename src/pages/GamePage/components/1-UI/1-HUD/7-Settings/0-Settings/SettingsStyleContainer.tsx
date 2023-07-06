import { memo } from "react";
import styled from "styled-components";
import { MarginPaddingNone } from "../../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../../styles/Snippets/UserSelectNone";

const SettingsStyleContainer = styled.div`
  ${UserSelectNone};
  ${MarginPaddingNone};
  position: fixed;
  right: 0;
  width: 25vw;
  height: 40.329218107vw;
  margin-top: 5vw;
  margin-right: 12.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;

  .settings-modal {
    position: relative;
    width: 100%;
    height: 100%;

    .settings-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-blend-mode: screen;
    }

    .settings-exit-button {
      top: 0;
      right: 0;
      width: 20%;
      position: absolute;
      transform: translate(35%, -35%);
    }

    .settings-modal-controls {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .save-load {
      margin-top: 1.5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;

      .load-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        position: relative;

        .load-button-bg {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .load-button-svg {
          position: absolute;
          width: 93%;
          height: 100%;
          margin-top: 0.35vw;
          margin-left: 0.25vw;
        }
      }
    }

    .language-credits {
      margin-top: 1.5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
    }

    .quit-button {
      margin-top: 3vw;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 50%;
      .quit-button-bg {
        position: relative;
      }
      .quit-button-svg {
        position: absolute;
        margin-top: 0.75vw;
        margin-left: 0.25vw;
        width: 97%;
      }
    }

    .version-copy-container {
      margin-top: 0.5vw;
      .version-copy {
        color: #291700;
        font-weight: bold;
      }
    }
  }
`;

export default memo(SettingsStyleContainer);
