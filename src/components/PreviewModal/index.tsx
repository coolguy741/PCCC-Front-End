import ReactPlayer from "react-player";
import styled from "styled-components";

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
          <img src={url} alt="" width="100%" height="100%" />
        </div>
      ) : (
        <div className="player-mask">
          <div className="title">{fileName}</div>
          <ReactPlayer
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
            width="100%"
            height="100%"
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
    width: 80vw;
    height: 80vh;

    .img-mask {
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;

      img {
        border-radius: 20px;
        width: auto;
        height: 100%;
      }
    }

    .player-mask {
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;

      video {
        border-radius: 20px;

        img {
          border-radius: 20px;
        }
      }
    }

    .title {
      position: absolute;
      top: 0;
      text-align: center;
      color: white;
      font-weight: 600;
      font-size: 1.5rem;
      margin: 2rem;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
  `,
};
