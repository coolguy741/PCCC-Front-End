import { AnimatePresence, motion } from "framer-motion";
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
  changeMediaState,
  changePattern,
  addThumbnail,
}: {
  media: any;
  variant?: "img-only" | "all";
  changeMediaState: (mediaName: string, mediaSrc: string) => void;
  changePattern: (pattern: number) => void;
  addThumbnail: (mediaSrc: string) => void;
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

    if (type === "images")
      return (
        <motion.div
          className="media-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={media?.src}
              alt={media?.name ?? ""}
            />
          </AnimatePresence>

          <div className="empty-img">
            <div className="img-btn-group">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Add video, audio or image"
                data-tooltip-place="top"
              >
                <Add onClick={toggle} />
              </button>
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Shuffle image"
                data-tooltip-place="top"
              >
                <Shuffle onClick={shufflePattern} />
              </button>
            </div>
          </div>
        </motion.div>
      );
    else if (type === "video" || type === "audio")
      return (
        <MediaPreview
          changeMediaState={changeMediaState}
          shufflePattern={shufflePattern}
          currentPattern={currentPattern}
          addThumbnail={addThumbnail}
          src={media?.src}
          name={media?.name}
          thumbnail={media?.thumbnail}
          type={type}
        />
      );
  }

  return (
    <>
      <Style.Container>
        <div className="media-container">
          <AnimatePresence mode="wait">{showMedia()}</AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
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
                <button
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Shuffle image"
                  data-tooltip-place="top"
                >
                  <Shuffle onClick={shufflePattern} />
                </button>
              </div>
            </Patterns>
          )}
        </AnimatePresence>
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

    .media-container,
    .media-image {
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
      width: 100%;
      height: 100%;

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
