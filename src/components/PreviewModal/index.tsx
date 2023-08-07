import ReactAudioPlayer from "react-audio-player";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { capitalize } from "../../lib/util/capitalize";
import { animatedbackgroundGradient } from "../../styles/helpers/animatedBackgroundGradient";
import { Typography } from "../Typography";

export const PreviewModal = ({
  url,
  type,
  fileName,
}: {
  url: string;
  type: string;
  fileName: string;
}) => {
  return (
    <Style.Container>
      {type === "images" ? (
        <div className="img-mask">
          <div className="title">{fileName}</div>
          <img src={url} alt="" />
        </div>
      ) : type === "video" ? (
        <div className="player-mask">
          <div className="video-elements">
            <div className="heading-container">
              <Typography color="white" tag="h1" weight={600} size="2.5vh">
                {capitalize(fileName)}
              </Typography>
            </div>
          </div>

          <ReactPlayer
            className={"react-player"}
            url={url}
            controls
            width="80vw"
            height="auto"
          />
        </div>
      ) : (
        <div className="player-mask">
          <div className="video-elements">
            <div className="heading-container">
              <Typography
                color="neutral-800"
                tag="h1"
                weight={600}
                size="2.5vh"
              >
                {capitalize(fileName)}
              </Typography>
            </div>
          </div>

          <ReactAudioPlayer className={"audio-player"} src={url} controls />
        </div>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-mask {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        border-radius: 20px;
        max-width: 80vw;
        max-height: 80vh;
        border-radius: 20px;
      }
    }

    .player-mask {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .react-player {
        border-radius: 20px;
        width: 80vw;
        overflow: hidden;

        img {
          border-radius: 20px;
        }
      }

      .audio-player {
        ${() => animatedbackgroundGradient("#C4E8FF", "#D2F7E5")};
        height: 25vh;
        width: 80vw;
        padding: 48px;
        border-radius: 16px;
        background: var(
          --background-blue-green,
          linear-gradient(136deg, #c4e8ff 0%, #d2f7e5 100%)
        );
      }
    }

    .video-elements {
      width: 92.5%;
      height: 92.5%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .heading-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;

        button {
          aspect-ratio: 1 / 1;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
          z-index: 10000;

          svg {
            height: 50%;
          }
        }
      }

      .controls-container {
        input.timeline {
          width: 100%;
          height: 8px;
          appearance: none;
          background-color: rgba(255, 255, 255, 0.5);
          border-radius: 5px;
          background-size: 0% 100%;
          background-image: linear-gradient(#fff, #fff);
          background-repeat: no-repeat;
          cursor: pointer;

          &::-webkit-slider-thumb {
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            transition: all 0.3s;
            background-color: rgba(255, 255, 255, 0.8);
          }

          &:hover {
            &::-webkit-slider-thumb {
              opacity: 1;
              background-color: #fff;
            }
          }
        }

        .controls-options {
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            display: flex;
            align-items: center;
          }

          input {
            width: 75px;
            height: 4px;
            appearance: none;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 5px;
            background-size: 0% 100%;
            background-image: linear-gradient(#fff, #fff);
            background-repeat: no-repeat;
            cursor: pointer;

            &::-webkit-slider-thumb {
              appearance: none;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              cursor: pointer;
              transition: all 0.3s;
              background-color: rgba(255, 255, 255, 0.8);
            }

            &:hover {
              &::-webkit-slider-thumb {
                opacity: 1;
                background-color: #fff;
              }
            }
          }

          button {
            height: 32px;
            width: 32px;
            display: grid;
            place-items: center;

            svg {
              height: 75%;
            }
          }
        }
      }
    }
  `,
};
