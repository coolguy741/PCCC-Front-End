import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import useModal from "../../../hooks/useModal";
import { usePatterns } from "../../../hooks/usePatterns";
import { getMediaType } from "../../../lib/util/getMediaType";
import { Patterns } from "../../Patterns";
import { UploadModal } from "../../Upload/UploadModal";
import Add from "../Icons/add";
import Shuffle from "../Icons/shuffle";
import { MediaPreview } from "./preview";

export function Media({
  media,
  variant,
  changeMediaState,
  changePattern,
}: {
  media: any;
  variant?: "img-only" | "all";
  changeMediaState: (name: string) => void;
  changePattern: (pattern: number) => void;
}) {
  const { toggle, modal } = useModal();
  const { shufflePattern, currentPattern } = usePatterns(
    media?.patternChoice ?? 0,
    changePattern,
  );

  function showMedia() {
    let type;
    if (media?.src) {
      type = getMediaType(media.src);
    }

    if (type === "images") return <img src={media?.src} alt="" />;
    else if (type === "video" || type === "audio")
      return (
        <MediaPreview
          changeMediaState={changeMediaState}
          src={media?.src}
          type={type}
        />
      );
  }

  return (
    <>
      <Tooltip id="my-tooltip" />
      <Style.Container>
        <div className="media-container">{showMedia()}</div>
        {!media?.src && (
          <Patterns className="empty-img" pattern={currentPattern}>
            <div className="img-btn-group">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Add video, audio or image"
                data-tooltip-place="top"
              >
                <Add onClick={toggle} />
              </button>
              <button>
                <Shuffle onClick={shufflePattern} />
              </button>
            </div>
          </Patterns>
        )}
      </Style.Container>
      {modal && (
        <UploadModal
          setMedia={changeMediaState}
          modal={modal}
          toggle={toggle}
        />
      )}
    </>
  );
}

const Style = {
  Container: styled.figure`
    position: relative;
    width: 100%;
    height: 100%;

    .media-container {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: relative;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
      object-position: center;
    }

    .empty-img {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding-bottom: 25px;

      .img-btn-group {
        display: flex;
        width: 100px;
        justify-content: space-between;
      }

      button {
        height: 42.5px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background-color: rgba(255, 255, 255, 0);
        transition: background 0.25s linear;

        svg {
          path {
            transition: fill 0.25s ease-out;
          }
        }

        &:hover {
          background-color: rgba(255, 255, 255, 1);

          svg {
            path {
              fill: #646464;
            }
          }
        }
      }
    }
  `,
};
