import { AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "../../../lib/api/api";
import { BASE_API_URL } from "../../../lib/api/helpers/consts";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { animatedbackgroundGradient } from "../../../styles/helpers/animatedBackgroundGradient";
import { glassBackground } from "../../../styles/helpers/glassBackground";
import Modal from "../../Modal";
import { ModalHeader } from "../ModalHeader";
import { ModalMenu } from "../ModalMenu";
import { UploadGallery } from "../UploadGallery";
import { UploadList } from "../UploadList";

interface ApiState {
  type: "loading" | "fetched" | "errored";
  payload: unknown;
}

export function UploadModal({
  toggle,
  modal,
}: {
  toggle: () => void;
  modal: boolean;
}) {
  const [view, setView] = useState<"list" | "gallery">("list");
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });
  const [data, setData] = useState<ApiState>({
    type: "loading",
    payload: undefined,
  });

  const getCloudDriveFiles = useCallback(async () => {
    try {
      const response = await api.appCloudDriveDriveFilesList({
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });

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

  useEffect(() => {
    if (data.type === ("fetched" || "errored")) return;
    getCloudDriveFiles();
  }, [data.type, getCloudDriveFiles]);

  console.log(data);

  function showFilesView() {
    if (data.type === "fetched") {
      if (view === "list")
        return <UploadList files={(data.payload as any).files} />;
      else return <UploadGallery files={(data.payload as any).files} />;
    }
  }

  return (
    <Modal modal={modal} toggle={toggle}>
      <Style.Container>
        <ModalHeader changeView={setView} />
        <ModalMenu />
        <article className="um-content">{showFilesView()}</article>
      </Style.Container>
    </Modal>
  );
}

const Style = {
  Container: styled.section`
    width: 60vw;
    height: 70vh;
    ${() => animatedbackgroundGradient("#C4E8FF", "#D2F7E5")}
    z-index: 45;
    border-radius: 16px;
    padding: 24px;

    article.um-content {
      ${glassBackground}
      padding: 15px 10px;
      min-height: 47.5vh;
    }
  `,
};
