import styled from "styled-components";
import Button from "../../Button";
import CDAdd from "../../CloudDrive/Icons/cd-add";
import CDGallery from "../../CloudDrive/Icons/cd-gallery";
import CDList from "../../CloudDrive/Icons/cd-list";
import { Typography } from "../../Typography";

export function ModalHeader({
  changeView,
}: {
  changeView: React.Dispatch<React.SetStateAction<"list" | "gallery">>;
}) {
  return (
    <Style.Container>
      <Typography tag="h1" size="2vh" weight={600} color="neutral-800">
        Choose an Image
      </Typography>
      <div className="header-options">
        <CDGallery onClick={() => changeView("gallery")} />
        <CDList onClick={() => changeView("list")} />
        <Button variant="yellow" size="small">
          Add
        </Button>
        <Button size="small">
          <CDAdd />
          Upload
        </Button>
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.header`
    width: 100%;
    margin-bottom: 2vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 45;

    div.header-options {
      display: flex;
      width: 35%;
      align-items: center;
      justify-content: space-between;

      button {
        font-size: 1.5vh;

        svg {
          height: 1.75vh;
        }
      }
    }
  `,
};
