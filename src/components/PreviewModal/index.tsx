import ReactPlayer from "react-player";
import styled from "styled-components";
import { capitalize } from "../../lib/util/capitalize";
import { Typography } from "../Typography";
import CloseIcon from "./Icons/close";

const BG_ARR = [
  "/patterns/apples.png",
  "/patterns/grapes.png",
  "/patterns/lemons.png",
  "/patterns/oranges.png",
  "/patterns/yellows.png",
];

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
      ) : (
        <div className="player-mask">
          <div className="heading-container">
            <Typography color="white" tag="h1" weight={600} size="3vh">
              {capitalize(fileName)}
            </Typography>
            <button>
              <CloseIcon />
            </button>
          </div>
          <ReactPlayer
            className="react-player"
            url={url}
            config={
              type === "audio"
                ? {
                    file: {
                      attributes: {
                        poster:
                          BG_ARR[Math.floor(Math.random() * BG_ARR.length)],
                      },
                    },
                  }
                : {}
            }
            controls
            width="80vw"
            height="auto"
          />
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
    }

    .heading-container {
      position: absolute;
      top: 5%;
      width: 92.5%;
      height: 5vh;
      margin: 0 5vw;
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        aspect-ratio: 1 /1;
        height: 35px;
        display: grid;
        place-items: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      }
    }
  `,
};
