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
          <div className="video-container">
            <Typography color="white" tag="h1" weight={600} size="2.5vh">
              {capitalize(fileName)}
            </Typography>
            <ReactPlayer
              className={"react-player"}
              url={url}
              controls
              width="80vw"
              height="auto"
            />
          </div>
        </div>
      ) : (
        <div className="player-mask">
          <div className="audio-container">
            <Typography color="neutral-800" tag="h1" weight={600} size="2.5vh">
              {capitalize(fileName)}
            </Typography>
            <ReactAudioPlayer className={"audio-player"} src={url} controls />
          </div>
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

      h1 {
        position: absolute;
        width: 100%;
        max-width: 80vw;
        top: 24px;
        left: 3.25vw;
      }

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
  `,
};
