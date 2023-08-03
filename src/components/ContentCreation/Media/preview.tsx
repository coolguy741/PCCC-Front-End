import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import useModal from "../../../hooks/useModal";
import CDThumbnail from "../../CloudDrive/Icons/cd-thumbnail";
import Modal from "../../Modal";
import { Patterns } from "../../Patterns";
import { PreviewModal } from "../../PreviewModal";
import { UploadModal } from "../../Upload/UploadModal";
import { Add, Shuffle } from "../Icons";
import PlayIcon from "../Icons/play";

export function MediaPreview({
  src,
  type,
  changeMediaState,
  name,
  shufflePattern,
  currentPattern,
  addThumbnail,
  thumbnail,
}: any) {
  const { modal: previewModal, toggle: togglePreview } = useModal();
  const { modal: uploadModal, toggle: toggleUpload } = useModal();
  const [mode, setMode] = useState<"thumbnail" | "">("");

  function handleThumbnailAdd() {
    setMode("thumbnail");
    toggleUpload();
  }

  return (
    <>
      {" "}
      <Style.Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        thumbnail={thumbnail}
      >
        <Patterns
          className={`mp-media-container ${thumbnail ? "mp-thumbnail" : ""}`}
          pattern={currentPattern}
        >
          <button
            className="mp-play"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Play"
            data-tooltip-place="top"
            onClick={togglePreview}
          >
            <PlayIcon />
          </button>
          <div className="img-btn-group">
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Add video, audio or image"
              data-tooltip-place="top"
              onClick={toggleUpload}
            >
              <Add />
            </button>
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Shuffle image"
              data-tooltip-place="top"
              onClick={shufflePattern}
            >
              <Shuffle />
            </button>
            <button
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Add thumbnail"
              data-tooltip-place="top"
              onClick={handleThumbnailAdd}
            >
              <CDThumbnail />
            </button>
          </div>
        </Patterns>
      </Style.Container>
      {previewModal && (
        <Modal modal={previewModal} toggle={togglePreview}>
          <PreviewModal url={src} type={type} fileName={name} />
        </Modal>
      )}
      {uploadModal && (
        <UploadModal
          setMedia={changeMediaState}
          modal={uploadModal}
          toggle={toggleUpload}
          mode={mode}
          addThumbnail={addThumbnail}
        />
      )}
    </>
  );
}

const Style = {
  Container: styled(motion.article)<{ thumbnail: string }>`
    height: 100%;
    width: 100%;

    .mp-media-container {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding-bottom: 25px;

      button.mp-play {
        height: 120px;
        aspect-ratio: 1 / 1;
        display: grid;
        place-items: center;
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
        border-radius: 50%;
        margin-bottom: 17.5%;
        border: 2px solid rgba(255, 255, 255, 0);
        transition: border 0.3s ease-in;

        svg {
          path {
            transition: stroke 0.25s ease-out;
          }
        }

        &:hover {
          border: 2px solid rgba(255, 255, 255, 1);
          svg {
            path {
              stroke: white;
            }
          }
        }
      }

      .img-btn-group {
        display: flex;
        width: 150px;
        justify-content: space-between;

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
              fill: white;
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
    }

    .mp-thumbnail {
      background-image: ${({ thumbnail }) =>
        thumbnail ? `url(${thumbnail})` : ""};
      background-position: center;
      background-size: cover;
    }
  `,
};
