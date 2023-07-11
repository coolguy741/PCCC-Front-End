import styled from "styled-components";
import CDImage from "../../CloudDrive/Icons/cd-image";
import CDVideo from "../../CloudDrive/Icons/cd-video";
import { Typography } from "../../Typography";

const folder_options = [
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
];

export function ModalMenu() {
  return (
    <Style.Container>
      {folder_options.map(({ title, description, icon }) => (
        <button key={title}>
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
              {description}
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

      &:hover {
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
