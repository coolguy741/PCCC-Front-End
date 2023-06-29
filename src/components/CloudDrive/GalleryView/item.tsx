import { useState } from "react";
import styled from "styled-components";
import { trimStringByLength } from "../../../lib/util/trimStringByLength";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDelete from "../Icons/cd-delete";
import CDDownload from "../Icons/cd-download";
import CDOptions from "../Icons/cd-options";
import CDShare from "../Icons/cd-share";

export function GalleryItem(props: any) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { idx, el } = props;

  return (
    <Style.Item key={idx}>
      <div className="cdg-details">
        <Typography tag="h4" size="1.75vh" weight={500}>
          <div className="cdg-thumbnail">
            <CDAudio />
          </div>
          {trimStringByLength(el.name, 10)}
        </Typography>
        <button onClick={() => setShowOptions((prevState) => !prevState)}>
          <CDOptions />
        </button>
      </div>
      <div className="cdg-img"></div>
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
          <button>
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
    backdrop-filter: blur(59.27639389038086px);
    padding: 8px;
    position: relative;
    z-index: 0;
    flex-direction: column;

    .cdg-details {
      display: flex;
      height: 20%;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      h4 {
        display: flex;
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

          /* UI Card Shadow */
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
      right: 0;
      z-index: 100;
      top: 5vh;

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
