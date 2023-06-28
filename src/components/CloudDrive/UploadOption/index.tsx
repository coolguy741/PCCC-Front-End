import styled from "styled-components";
import { Progress } from "../../Global/Progress";
import { Typography } from "../../Typography";
import CDCancel from "../Icons/cd-cancel";
import CDRefresh from "../Icons/cd-refresh";

interface Props {
  status: "uploading" | "finished" | "errored";
  upload?: any;
}

export function UploadOption(props: Props) {
  const { status, upload } = props;
  return (
    <Style.Container status={status}>
      <div className="upload-options">
        <div className="">
          <div className="uo-start">
            <div className="uo-img"></div>
            <Typography>
              {upload.name}
              <br />
              {upload.size}
            </Typography>
          </div>
          <div className="uo-end"></div>
        </div>
        <Progress variant="thin" />
      </div>
      <div className="upload-status">
        {status === "errored" ? <CDRefresh /> : <CDCancel />}
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

    .upload-options {
      width: 80%;
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
