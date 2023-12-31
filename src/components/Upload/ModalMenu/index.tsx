import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import CDAudio from "../../CloudDrive/Icons/cd-audio";
import CDImage from "../../CloudDrive/Icons/cd-image";
import CDVideo from "../../CloudDrive/Icons/cd-video";
import { Typography } from "../../Typography";

interface FolderOptionsType {
  id: "images" | "video" | "audio" | "documents";
  title: string;
  icon: JSX.Element;
}

const FOLDER_OPTIONS: FolderOptionsType[] = [
  {
    id: "images",
    title: "Images",
    icon: <CDImage />,
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

export function ModalMenu({
  type,
  setType,
  stats,
}: {
  type: "images" | "video" | "audio" | "documents";
  setType: (type: "documents" | "video" | "images" | "audio") => void;
  stats: any;
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
        return `${countNo(stats.videos.fileCount)} Files / ${Math.round(
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
      {FOLDER_OPTIONS.map(({ title, icon, id }) => (
        <button
          key={title}
          onClick={() => setType(id)}
          className={id === type ? "active" : ""}
        >
          <div>{icon}</div>
          <figure>
            <Typography
              color="neutral-800"
              tag="p"
              weight={500}
              size="1.5vh"
              mb=".15vh"
            >
              {title}
            </Typography>
            <Typography color="neutral-600" tag="span" size="1.1vh">
              {getStats(stats, id)}
            </Typography>
          </figure>
        </button>
      ))}
    </Style.Container>
  );
}

const Style = {
  Container: styled.nav`
    width: 100%;
    height: 8vh;
    display: flex;
    margin-bottom: 2vh;

    button {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 22%;
      display: flex;
      padding: 1.5vh;
      align-items: center;
      justify-content: space-between;
      transition: background 0.3s linear;
      backdrop-filter: blur(59.27639389038086px);
      margin-right: 1vw;

      div {
        width: 30%;
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
        width: 65%;
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
