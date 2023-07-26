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
          <img src={url} alt="" />
        </div>
      ) : (
        <div className="player-mask">
          <div className="title">{fileName}</div>
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
        /* max-height: 80vh; */
        overflow: hidden;

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
