import styled from "styled-components";
import { convertToRelativeUnit } from "../../../styles/helpers/convertToRelativeUnits";
import { Progress } from "../../Global/Progress";
import { Typography } from "../../Typography";
import FileDropzone from "../FileDropzone";
import { UploadOption } from "../UploadOption";

const dummy_uploads = [
  {
    status: "finished",
    tag: "mp3",
    size: "23mb",
    name: "Audio.mp3",
    percentage: 100,
  },
  {
    status: "finished",
    tag: "mp3",
    size: "23mb",
    name: "Audio.mp3",
    percentage: 100,
  },
  {
    status: "uploading",
    tag: "mp3",
    size: "23mb",
    name: "Audio.mp3",
    percentage: 40,
  },
  {
    status: "errored",
    tag: "mp3",
    size: "53mb",
    name: "Audio.mp3",
    percentage: 100,
  },
  {
    status: "uploading",
    tag: "mp3",
    size: "23mb",
    name: "Audio.mp3",
    percentage: 40,
  },
];

type Props = {
  className?: string;
};

export function CloudStorage(props: Props) {
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
            20/200 GB left
          </Typography>
        </div>
        <Progress variant="thick" />
      </article>
      <FileDropzone />
      <div className="cloud-storage-uploads">
        {dummy_uploads.map((upload, idx) => (
          <UploadOption
            key={idx}
            status={upload.status as any}
            upload={upload}
          />
        ))}
      </div>
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
};
