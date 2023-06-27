import styled from "styled-components";
import { Typography } from "../../Typography";
import CDAudio from "../Icons/cd-audio";
import CDDocument from "../Icons/cd-document";
import CDDownload from "../Icons/cd-download";
import CDImage from "../Icons/cd-image";
import CDVideo from "../Icons/cd-video";

const folder_options = [
  {
    title: "Documents",
    description: "100 Files / 5 GB",
    icon: <CDDocument />,
  },
  {
    title: "Videos",
    description: "0 Files / 0 MB",
    icon: <CDVideo />,
  },
  {
    title: "Images",
    description: "1012 Files / 3.2 GB",
    icon: <CDImage />,
  },
  {
    title: "Audio",
    description: "12 Files / 140 MB",
    icon: <CDAudio />,
  },

  {
    title: "Download",
    description: "12 Files / 321 MB",
    icon: <CDDownload />,
  },
];

export function CDHeader() {
  return (
    <Style.Container>
      {folder_options.map(({ title, description, icon }) => (
        <button>
          <div>{icon}</div>
          <figure>
            <Typography
              color="neutral-800"
              tag="p"
              weight={500}
              size="2.15vh"
              mb=".15vh"
            >
              {title}
            </Typography>
            <Typography color="neutral-600" tag="span" size="1.4vh">
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

    button {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      height: 100%;
      width: 18.5%;
      display: flex;
      padding: 10px;
      align-items: center;
      justify-content: space-between;
      transition: background 0.3s linear;

      div {
        height: 100%;
        width: 30%;
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
      }

      figure {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
      }

      &:hover {
        background: #fff;
      }
    }
  `,
};
