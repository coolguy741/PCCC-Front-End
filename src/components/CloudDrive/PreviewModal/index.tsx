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
  console.log(fileName);

  return (
    <Style.Container>
      {type === "images" ? (
        <div className="img-mask">
          <img src={url} width="70%" height="80%" />
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
            width="70%"
            height="80%"
          />
        </div>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-mask {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: contain;
        border-radius: 20px;
        width: auto;
        height: auto;
        max-width: 70%;
        max-height: 80%;
      }
    }

    .player-mask {
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

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
      left: 0;
      color: white;
    }
  `,
};
