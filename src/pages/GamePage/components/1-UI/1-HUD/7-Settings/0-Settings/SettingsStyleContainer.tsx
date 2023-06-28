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

  .settings-modal {
    position: relative;
    width: 100%;
    height: 100%;

    .settings-tab-container {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 10vw;
      left: -5vw;
      .settings-svg-container {
        position: absolute;
        width: 70%;
      }
      .settings-tab-text {
        position: relative;
        color: black;
        transform: rotate(-90deg);
        font-size: 1.75vw;
        font-weight: bold;
      }
    }

    .settings-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background-blend-mode: screen;
    }

    .settings-exit-button {
      position: absolute;
      top: 0;
      right: 0;
      width: 20%;
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
      /* .audio-sliders {
        .music-slider {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          .music-slider-bg {
            position: absolute;
            width: 70%;
            height: 1.15vh;
            border-radius: 1.5vw;
            mix-blend-mode: soft-light;
            background-color: #4e2f00;
            border: 0.1vw solid rgba(75, 19, 19, 1);
            box-shadow: inset 3px 3px 0px black,
              4px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
          .music-slider-btn {
            position: relative;
            width: 6vw;
          }
        }

        .sound-slider {
          margin-top: 0%.5;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          .sound-slider-bg {
            position: absolute;
            width: 70%;
            height: 1.15vh;
            border-radius: 1.5vw;
            mix-blend-mode: soft-light;
            background-color: #4e2f00;
            border: 0.1vw solid rgba(75, 19, 19, 1);
            box-shadow: inset 3px 3px 0px black,
              4px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
          .sound-slider-btn {
            position: relative;
            width: 5vw;
          }
        }
      } */
    }

    .save-load {
      margin-top: 1.5vw;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;

      .save-button,
      .load-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        position: relative;

        .save-button-bg,
        .load-button-bg {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .save-button-svg {
          position: absolute;
          width: 94%;
          height: 100%;
          margin-top: 0.25vw;
          margin-left: 0.15vw;
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

      .language-button,
      .credits-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        position: relative;

        .language-button-bg {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .eng-french-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 95%;
          flex-grow: 1;

          .english {
            width: 200%;
            margin-top: 0.15vw;
          }
          .french {
            visibility: hidden;
            width: 200%;
            margin-top: 0.25vw;
            margin-left: 0.2vw;
          }
        }

        .credits-button-bg {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .credits-button-svg {
          position: absolute;
          width: 94%;
          margin-top: 0.5vw;
          margin-left: 0.5vw;

          z-index: 1;
        }
      }
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
