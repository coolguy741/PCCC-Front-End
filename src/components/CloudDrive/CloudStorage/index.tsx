import { useState } from "react";
import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Progress } from "../../Global/Progress";
import Scrollable from "../../Global/Scrollable";
import { Typography } from "../../Typography";
import FileDropzone from "../FileDropzone";
import { UploadOption } from "../UploadOption";

type Props = {
  className?: string;
  sizeOccupied: number;
};

export function CloudStorage(props: Props) {
  const [uploads, setUploads] = useState([]);
  const [progress, setProgress] = useState([]);

  return (
    <Style.Container {...props}>
      <Typography color="neutral-900" weight={600} size="2.35vh">
        Cloud Storage
      </Typography>
      <article className="cloud-storage-documents">
        <div>
          <Typography color="neutral-600" weight={500} size="1.75vh">
            Documents
          </Typography>
          <Typography color="neutral-600" weight={500} size="1.75vh">
            {Math.round(200 - props.sizeOccupied / 1000000000)}/200 GB left
          </Typography>
        </div>
        <Progress variant="thick" value={props.sizeOccupied / 20000000000} />
      </article>
      <FileDropzone
        setUploads={setUploads}
        setProgress={setProgress}
        uploads={uploads}
      />
      <Style.Uploads>
        {uploads.map((upload, idx) => (
          <UploadOption
            key={idx}
            // status={upload.status as any}
            upload={upload}
          />
        ))}
      </Style.Uploads>
    </Style.Container>
  );
}

const Style = {
  Container: styled.section<Partial<Props>>`
    .cloud-storage-documents {
      margin-bottom: 1.75vh;
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${convertToRelativeUnit(8, "vh")};
      }
    }
  `,

  Uploads: styled(Scrollable)`
    height: calc(48vh - ${convertToRelativeUnit(48, "vh")});
    position: relative;
  `,
};
