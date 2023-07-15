import { ChangeEvent, useState } from "react";
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
  const [fileList, setFileList] = useState<FileList | null>(null);
  // // const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    // inputRef.current.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };

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
        <input type="file" id="imgupload" onChange={handleFileChange} />
        <Button size="small" id="OpenImgUpload" onClick={handleClick}>
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

      input {
        display: none;
      }

      button {
        font-size: 1.5vh;

        svg {
          height: 1.75vh;
        }
      }
    }
  `,
};
function useRef<T>(arg0: null) {
  throw new Error("Function not implemented.");
}
