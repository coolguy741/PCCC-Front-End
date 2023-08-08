import { useState } from "react";
import styled from "styled-components";
import { formatDate } from "../../../lib/util/formatDate";
import { roundToOneDecimal } from "../../../lib/util/roundToOneDecimal";
import { trimStringByLength } from "../../../lib/util/trimStringByLength";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../Typography";
import CDDelete from "../Icons/cd-delete";
import CDDownload from "../Icons/cd-download";
import CDOptions from "../Icons/cd-options";
import CDShare from "../Icons/cd-share";
import { ICONS } from "../ListView";

export function GalleryItem({
  idx,
  el,
  type,
  handleDelete,
  setPreviewUrl,
  setShowPreviewModal,
  setFileType,
  setFileName,
}: {
  idx: any;
  el: any;
  type: "images" | "video" | "documents" | "audio";
  handleDelete: (path: string) => void;
  setPreviewUrl: (url: string) => void;
  setShowPreviewModal: (show: boolean) => void;
  setFileType: (type: "images" | "video" | "audio" | "documents") => void;
  setFileName: (name: string) => void;
}) {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const playHandler = (
    url: string,
    type: "audio" | "video" | "documents" | "images",
    fileName: string,
  ) => {
    if (type !== "documents") {
      if (type && url) {
        setPreviewUrl(url);
        setFileType(type);
        setFileName(fileName);
      }

      setShowPreviewModal(true);
    }
  };

  return (
    <Style.Item key={idx}>
      <div className="cdg-details">
        <div>
          <Typography
            tag="h4"
            size="1.75vh"
            weight={500}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={el.fileName.length >= 15 ? el.fileName : ""}
            data-tooltip-place="top"
            onClick={() => playHandler(el.url, el.folder, el.fileName)}
          >
            <div className="cdg-thumbnail">{ICONS[type]}</div>
            {trimStringByLength(el.fileName, 15)}
          </Typography>
          <button onClick={() => setShowOptions((prevState) => !prevState)}>
            <CDOptions />
          </button>
        </div>
        <div>
          <Typography tag="span" size=".8rem" weight={400}>
            {roundToOneDecimal(el.size)} MB/{formatDate(el.uploadedAt)}
          </Typography>
        </div>
      </div>
      <div className="cdg-img">
        {type === "images" ? (
          <img src={el.url} alt={el.fileName} />
        ) : (
          <div className="icon">{ICONS[type]}</div>
        )}
      </div>
      {showOptions && (
        <div className="cdg-options">
          <button>
            <CDShare />
            Share
          </button>
          <button>
            <CDDownload />
            Download
          </button>
          <button onClick={() => handleDelete(el.relativePath)}>
            <CDDelete />
            Delete
          </button>
        </div>
      )}
    </Style.Item>
  );
}

const Style = {
  Item: styled.article`
    width: 100%;
    display: flex;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(60px);
    padding: 8px;
    position: relative;
    z-index: 0;
    flex-direction: column;

    .cdg-tooltip {
      position: fixed;
      top: -2rem;
      left: 50%;
      width: max-content;
      background-color: rgba(255, 255, 255, 0.7);
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      backdrop-filter: blur(60px);
      padding: 0.5rem 1rem;
      z-index: 10000;
      pointer-events: none;
      transform: translateX(-50%);
      border-radius: 0.5rem;

      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.7) transparent transparent
          transparent;
      }

      span {
        color: var(--neutral-600);
        font-size: 0.9rem;
        font-weight: 500;
      }
    }

    .cdg-details {
      display: flex;
      height: 25%;
      width: 100%;
      flex-direction: column;
      cursor: default;

      div {
        justify-content: space-between;
        align-items: center;
        display: flex;

        span {
          color: var(--neutral-600);
        }

        h4 {
          display: flex;
          width: 100%;
        }
      }

      button {
        height: ${convertToRelativeUnit(30, "vh")};
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        transition: background 0.3s linear;
        display: grid;
        place-items: center;

        &:hover {
          border-radius: 100px;
          background: #fff;
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
        }
      }
    }

    .cdg-thumbnail {
      height: ${convertToRelativeUnit(24, "vh")};
      display: grid;
      place-items: center;
      aspect-ratio: 1 / 1;
      border-radius: 4px;
      background: var(
        --gradient-ui-card,
        linear-gradient(
          180deg,
          rgba(255, 215, 96, 0.8) 0%,
          rgba(255, 191, 0, 0.8) 100%
        )
      );
      margin-right: 10px;

      svg {
        height: 50%;
      }
    }

    .cdg-img {
      border-radius: 4px;
      width: 100%;
      background: var(--blue-100);
      flex-grow: 1;
      margin-top: 1vh;
      height: 100%;
      max-height: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }

      .icon {
        width: 20%;
        aspect-ratio: 1 / 1;
        border-radius: 4px;
        background: var(
          --gradient-ui-card,
          linear-gradient(
            180deg,
            rgba(255, 215, 96, 0.8) 0%,
            rgba(255, 191, 0, 0.8) 100%
          )
        );
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(59.27639389038086px);
        display: grid;
        place-items: center;
        transition: background 0.3s linear;
      }
    }

    .cdg-options {
      position: absolute;
      border-radius: 8px;
      background: var(--solid-white, #fff);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.27639389038086px);
      display: flex;
      flex-direction: column;
      width: ${convertToRelativeUnit(150, "vw")};
      padding: 8px;
      z-index: 10000;
      top: 5.5vh;
      right: -5px;

      button {
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--neutral-100);
        font-size: ${convertToRelativeUnit(12, "vh")};
        height: 4vh;
        color: var(--neutral-600);
        padding: ${convertToRelativeUnit(2, "vh")} 0;
        position: relative;
        z-index: 10000;

        svg {
          margin: 0 ${convertToRelativeUnit(8, "vw")};
          height: 50%;
        }

        &:last-of-type {
          border-bottom: 1px solid transparent;
        }
      }
    }
  `,
};
