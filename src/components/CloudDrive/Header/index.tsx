import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDocument from "../Icons/cd-document";
import CDImage from "../Icons/cd-image";
import CDVideo from "../Icons/cd-video";

export interface CloudDriveFileType {
  id: "images" | "documents" | "video" | "audio";
  title: string;
  icon: JSX.Element;
}

const buttons: CloudDriveFileType[] = [
  {
    id: "images",
    title: "Images",
    icon: <CDImage />,
  },
  {
    id: "documents",
    title: "Documents",
    icon: <CDDocument />,
  },
  {
    id: "video",
    title: "Videos",
    icon: <CDVideo />,
  },
  {
    id: "audio",
    title: "Audio",
    icon: <CDAudio />,
  },
];

export function CDHeader({
  type,
  setType,
  stats,
}: {
  type: "images" | "documents" | "video" | "audio";
  setType: (type: "images" | "documents" | "video" | "audio") => void;
  stats?: any;
}) {
  function getStats(stats: any, name: string) {
    if (!stats) return <Skeleton />;

    function countNo(count: number) {
      if (count !== 1) return `${count} Files`;
      else return "1 File";
    }

    switch (name) {
      case "images":
        return `${countNo(stats.images.fileCount)} / ${Math.round(
          stats.images.size / 1000000,
        )} mb`;
      case "documents":
        return `${countNo(stats.documents.fileCount)} / ${Math.round(
          stats.documents.size / 1000000,
        )} mb`;
      case "video":
        return `${countNo(stats.videos.fileCount)} / ${Math.round(
          stats.videos.size / 1000000,
        )} mb`;
      case "audio":
        return `${countNo(stats.audio.fileCount)} / ${Math.round(
          stats.audio.size / 1000000,
        )} mb`;
      default:
        return <Skeleton />;
    }
  }

  return (
    <Style.Container>
      {buttons.map(({ title, icon, id }) => (
        <button
          key={title}
          className={id === type ? "active" : ""}
          onClick={() => setType(id)}
        >
          <div>{icon}</div>
          <figure>
            <Typography
              color="neutral-800"
              tag="p"
              weight={500}
              size="2vh"
              mb=".15vh"
            >
              {title}
            </Typography>
            <Typography
              color="neutral-600"
              weight={500}
              tag="span"
              size="1.3vh"
            >
              {getStats(stats, id)}
            </Typography>
          </figure>
        </button>
      ))}
    </Style.Container>
  );
}

const Style = {
  Container: styled.article`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    button {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 100%;
      display: flex;
      padding: 1.5vh;
      align-items: center;
      justify-content: space-between;
      transition: background 0.3s linear;
      backdrop-filter: blur(59.27639389038086px);

      div {
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

      figure {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
      }

      &:hover,
      &.active {
        /* background: #fff; */
        background: linear-gradient(
          180deg,
          rgba(255, 215, 96, 0.8) 0%,
          rgba(255, 191, 0, 0.8) 100%
        );

        div {
          background: #ffefbf;
        }
      }
    }
  `,
};
