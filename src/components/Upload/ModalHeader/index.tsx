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
import { Input } from "../../Global/Input";
import { Typography } from "../../Typography";

export function ModalHeader({
  changeView,
  reload,
  addMedia,
  view,
  search,
  setSearch,
}: {
  changeView: React.Dispatch<React.SetStateAction<"list" | "gallery">>;
  reload: () => Promise<void>;
  addMedia: () => void;
  view: "list" | "gallery";
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  const inputFile = React.useRef<HTMLInputElement | null>(null);
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

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
      <Typography
        tag="h2"
        size="2.5vh"
        color="neutral-800"
        weight={600}
        mb="1vh"
        style={{ margin: 0 }}
      >
        Files
      </Typography>
      <Input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="header-options">
        <button
          className={`umh-view-option ${view === "gallery" ? "active" : ""}`}
          onClick={() => changeView("gallery")}
        >
          <CDGallery />
        </button>
        <button
          className={`umh-view-option ${view === "list" ? "active" : ""}`}
          onClick={() => changeView("list")}
        >
          <CDList />
        </button>
        <Button
          className="umh-upload"
          size="small"
          id="OpenImgUpload"
          onClick={addMedia}
        >
          <CDAdd />
          Add
        </Button>
        <input
          type="file"
          id="file"
          ref={inputFile}
          onChange={handleFileChange}
        />
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
    gap: 1rem;

    button.umh-view-option {
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      height: 3.5vh;
      display: grid;
      place-items: center;
      transition: background 0.3s linear;

      svg {
        height: 75%;
      }
    }

    button.active {
      background: #fff;
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    }

    div.header-options {
      display: flex;
      width: 35%;
      align-items: center;
      justify-content: space-between;

      input {
        display: none;
      }

      button.umh-add,
      button.umh-upload {
        font-size: 1.5vh;

        svg {
          height: 1.75vh;
        }
      }
    }
  `,
};
