import styled from "styled-components";
import { roundToOneDecimal } from "../../../lib/util/roundToOneDecimal";
import { trimStringByLength } from "../../../lib/util/trimStringByLength";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Progress } from "../../Global/Progress";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDCancel from "../Icons/cd-cancel";
import CDRefresh from "../Icons/cd-refresh";
import CDSuccess from "../Icons/cd-success";

interface Props {
  status?: "uploading" | "finished" | "errored";
  upload?: any;
  progress?: number;
}

export function UploadOption({ status, upload, progress }: Props) {
  function colorOnError(normalColor: string) {
    if (status === "errored") return "red-500";
    else return normalColor;
  }

  return (
    <Style.Container status={status}>
      <div className="upload-options">
        <div className="upload-misc">
          <div className="uo-start">
            <div className="uo-img">
              <CDAudio />
            </div>
            <Typography
              tag="h4"
              color={colorOnError("neutral-800")}
              size="1.6vh"
            >
              {trimStringByLength(upload.name, 22)}
              <br />
              <Typography color={colorOnError("neutral-400")} size="1.3vh">
                {roundToOneDecimal(upload.size)} MB
              </Typography>
            </Typography>
          </div>
          <div className="uo-end">
            <Typography
              tag="p"
              color={colorOnError("neutral-400")}
              size="1.3vh"
              mt="2vh"
            >
              {status === "errored"
                ? "failed"
                : `${(upload.progress * 100 || 0).toFixed(0)}%`}
            </Typography>
          </div>
        </div>
        <Progress
          hasError={status === "errored"}
          value={upload.progress && upload.progress * 100}
          variant="thin"
        />
      </div>
      <div className="upload-status">
        {status === "errored" ? (
          <CDRefresh />
        ) : upload.progress === 1 ? (
          <CDSuccess />
        ) : (
          <CDCancel />
        )}
      </div>
    </Style.Container>
  );
}

export const Style = {
  Container: styled.article<Partial<Props>>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 7.5vh;
    margin-bottom: 1vh;

    .upload-options {
      width: 82.5%;
      display: flex;
      flex-direction: column;

      .uo-start,
      .upload-misc {
        display: flex;
      }

      .upload-misc {
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1vh;
      }

      progress {
        background-color: "red";
      }

      .uo-img {
        height: ${convertToRelativeUnit(40, "vh")};
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
    }

    .upload-status {
      width: 15%;
      height: 35%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      svg {
        height: 100%;
        margin-left: auto;
        width: max-content;
      }
    }
  `,
};
