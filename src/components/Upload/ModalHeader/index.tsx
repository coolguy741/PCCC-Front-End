import Cookies from "js-cookie";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Api } from "../../../lib/api/api";
import { BASE_API_URL } from "../../../lib/api/helpers/consts";
import { getMediaType } from "../../../lib/util/getMediaType";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import Button from "../../Button";
import CDAdd from "../../CloudDrive/Icons/cd-add";
import CDGallery from "../../CloudDrive/Icons/cd-gallery";
import CDList from "../../CloudDrive/Icons/cd-list";
import { Typography } from "../../Typography";

export function ModalHeader({
  changeView,
  reload,
}: {
  changeView: React.Dispatch<React.SetStateAction<"list" | "gallery">>;
  reload: () => Promise<void>;
}) {
  const inputFile = React.useRef<HTMLInputElement | null>(null);
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  const handleClick = () => {
    inputFile.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    try {
      const response = await api.appCloudDriveUploadFileCreate(
        { file: file },
        { folder: getMediaType(file.name) ?? "documents" },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === 200) {
        reload();
      }
    } catch (error: unknown) {
      return console.warn(error);
    }
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
        <input
          type="file"
          id="file"
          ref={inputFile}
          onChange={handleFileChange}
        />
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
