import { AxiosResponse } from "axios";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "../../../lib/api/api";
import { BASE_API_URL } from "../../../lib/api/helpers/consts";
import { CloudDriveFileType } from "../../../pages/CloudDrivePage";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { useCloudDriveStore } from "../../../stores/cloudDriveStore";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import { Input } from "../../Global/Input";
import { Spinner } from "../../Global/Spinner";
import Modal from "../../Modal";
import { ModalHeader } from "../ModalHeader";
import { ModalMenu } from "../ModalMenu";
import { UploadGallery } from "../UploadGallery";
import { UploadList } from "../UploadList";

interface ApiState {
  type: "loading" | "fetched" | "errored";
  payload: any;
}

export function UploadModal({
  toggle,
  modal,
  setMedia,
}: {
  toggle: () => void;
  modal: boolean;
  setMedia: (imageName: string) => void;
}) {
  const [view, setView] = useState<"list" | "gallery">("list");
  const [search, setSearch] = useState("");
  const { type } = useCloudDriveStore();
  const [displayedResults, setDisplayedResults] = useState<
    CloudDriveFileType[]
  >([]);
  const [data, setData] = useState<ApiState>({
    type: "loading",
    payload: undefined,
  });
  const [selectedImage, setSelectedImage] = useState<string>("");

  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  const getCloudDriveFiles = useCallback(async () => {
    try {
      const response = await api.appCloudDriveDriveFilesList(
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === (200 || 204)) {
        setData({
          type: "fetched",
          payload: response.data as AxiosResponse<any, any>,
        });
      }
    } catch (error: unknown) {
      console.warn(error);
      setData({ type: "errored", payload: "An error has occured" });
    }
  }, [api, setData]);

  const handleDelete = async (path: string) => {
    const response = await api.appCloudDriveDriveFileDelete(
      {
        relativePath: path,
      },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 204) {
      getCloudDriveFiles();
    }
  };

  function addImage() {
    if (!selectedImage) return;
    setMedia(selectedImage);
    toggle();
  }

  useEffect(() => {
    if (data.type === ("fetched" || "errored")) return;
    getCloudDriveFiles();
  }, [data.type, getCloudDriveFiles]);

  function showFilesView() {
    if (data.type === "loading") {
      return <Spinner key="spinner" className="upload-spinner" />;
    } else if (data.type === "fetched") {
      if (view === "list")
        return (
          <UploadList
            selectedImage={selectedImage}
            setImage={setSelectedImage}
            files={displayedResults}
            key="list"
          />
        );
      else
        return (
          <UploadGallery
            files={displayedResults}
            type={type}
            handleDelete={handleDelete}
            setImage={setSelectedImage}
            selectedImage={selectedImage}
            key="gallery"
          />
        );
    }
  }

  useEffect(() => {
    if (data.payload) {
      const results = data.payload.files.filter((file: CloudDriveFileType) => {
        if (search === "") return true;
        return file.fileName.toLowerCase().includes(search.toLowerCase());
      });

      setDisplayedResults(results);
    }
  }, [data.payload, search]);

  return (
    <Modal modal={modal} toggle={toggle}>
      <Style.Container>
        <ModalHeader
          addImage={addImage}
          reload={getCloudDriveFiles}
          changeView={setView}
          view={view}
        />
        <ModalMenu />
        <Input
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <article className="um-content">
          <AnimatePresence mode="wait">{showFilesView()}</AnimatePresence>
        </article>
      </Style.Container>
    </Modal>
  );
}

const Style = {
  Container: styled.section`
    width: 60vw;
    height: 77vh;
    ${() => animatedbackgroundGradient("#C4E8FF", "#D2F7E5")}
    z-index: 45;
    border-radius: 16px;
    padding: 24px;

    .upload-spinner {
      margin-top: 15.5vh;
    }

    article.um-content {
      ${glassBackground}
      padding: 20px 15px;
      min-height: 47.5vh;
      margin-top: 1.5rem;
    }
  `,
};
