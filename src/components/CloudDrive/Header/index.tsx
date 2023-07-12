import styled from "styled-components";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDocument from "../Icons/cd-document";
import CDImage from "../Icons/cd-image";
import CDVideo from "../Icons/cd-video";

export interface CloudDriveFileType {
  id: "images" | "documents" | "video" | "audio";
  title: string;
  description: string;
  icon: JSX.Element;
}

const Buttons: CloudDriveFileType[] = [
  {
    id: "images",
    title: "Images",
    description: "1012 Files / 3.2 GB",
    icon: <CDImage />,
  },
  {
    id: "documents",
    title: "Documents",
    description: "100 Files / 5 GB",
    icon: <CDDocument />,
  },
  {
    id: "video",
    title: "Videos",
    description: "0 Files / 0 MB",
    icon: <CDVideo />,
  },
  {
    id: "audio",
    title: "Audio",
    description: "12 Files / 140 MB",
    icon: <CDAudio />,
  },
];

export function CDHeader({
  type,
  setType,
}: {
  type: "images" | "documents" | "video" | "audio";
  setType: (type: "images" | "documents" | "video" | "audio") => void;
}) {
  return (
    <Style.Container>
      {Buttons.map(({ title, description, icon, id }) => (
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
            <Typography color="neutral-600" tag="span" size="1.3vh">
              {description}
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
