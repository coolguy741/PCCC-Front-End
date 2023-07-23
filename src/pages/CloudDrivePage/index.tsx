import Cookies from "js-cookie";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CloudStorage } from "../../components/CloudDrive/CloudStorage";
import { CDGalleryView } from "../../components/CloudDrive/GalleryView";
import { CDHeader } from "../../components/CloudDrive/Header";
import CDAdd from "../../components/CloudDrive/Icons/cd-add";
import CDGallery from "../../components/CloudDrive/Icons/cd-gallery";
import CDList from "../../components/CloudDrive/Icons/cd-list";
import { CDListView } from "../../components/CloudDrive/ListView";
import { PreviewModal } from "../../components/CloudDrive/PreviewModal";
import { Input } from "../../components/Global/Input";
import { ModalContainer } from "../../components/Global/ModalContainer";
import { Typography } from "../../components/Typography";
import { useAPI } from "../../hooks/useAPI";
import { Api } from "../../lib/api/api";
import { BASE_API_URL } from "../../lib/api/helpers/consts";
import { getMediaType } from "../../lib/util/getMediaType";
import {
  getCloudDriveStore,
  useCloudDriveStore,
} from "../../stores/cloudDriveStore";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../styles/helpers/glassBackground";
import { STORAGE_KEY_JWT } from "../consts";

export interface CloudDriveFileType {
  fileName: string;
  url: string;
  size: number;
  relativePath: string;
}

export const cloudDrivePageLoader = async () => {
  const state = getCloudDriveStore();

  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  try {
    const response = await api.appCloudDriveDriveFilesList(
      { folder: state.type },
      {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      },
    );

    if (response.status === 200) {
      return response.data;
    } else return null;
  } catch (error: unknown) {
    console.warn(error);

    return null;
  }
};

export function CloudDrivePage() {
  const loaderData: any = useLoaderData();
  const { type, setType } = useCloudDriveStore();
  const [search, setSearch] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] =
    useState<"images" | "video" | "audio" | "documents">("images");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [data, setData] = useState(loaderData as any);
  const [displayedResults, setDisplayedResults] = useState<
    CloudDriveFileType[]
  >([]);
  const [view, setView] = useState<"list" | "gallery">("list");
  const navigate = useNavigate();
  const { api } = useAPI();
  const inputFile = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputFile.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];
    const type = getMediaType(file.name);

    try {
      const response = await api.appCloudDriveUploadFileCreate(
        { file: file },
        { folder: type ?? "documents" },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === 200) {
        fetchFiles(type ?? "documents");
      }
    } catch (error: unknown) {
      return console.warn(error);
    }
  };

  const fetchFiles = async (
    type: "images" | "video" | "documents" | "audio",
  ) => {
    const { api } = new Api({
      baseURL: BASE_API_URL,
    });

    try {
      const response = await api.appCloudDriveDriveFilesList(
        { folder: type },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
        },
      );

      if (response.status === 200) {
        setData(response.data as any);

        return response.data;
      } else return null;
    } catch (error: unknown) {
      console.warn(error);

      return null;
    }
  };

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
      navigate("./");
    }
  };

  useEffect(() => {
    fetchFiles(type);
  }, [type]);

  useEffect(() => {
    setData(loaderData as any);
  }, [loaderData]);

  useEffect(() => {
    if (data) {
      const results = data.files.filter((file: CloudDriveFileType) => {
        if (search === "") return true;
        return file.fileName.toLowerCase().includes(search.toLowerCase());
      });

      setDisplayedResults(results);
    }
  }, [data, search]);

  return (
    <Style.Container>
      <section className="cloud-drive-folders">
        <div className="cd-folders-menu">
          <Typography
            tag="h2"
            size="2.5vh"
            color="neutral-800"
            weight={600}
            mb="1vh"
          >
            Folders
          </Typography>
          <CDHeader type={type} setType={setType} />
        </div>
        <div className="cd-files-menu">
          <div className="cdf-menu-options">
            <Typography
              tag="h2"
              size="2.5vh"
              color="neutral-800"
              weight={600}
              mb="1vh"
            >
              Files
            </Typography>
            <Input
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              <button
                className={`cdf-view-option ${
                  view === "gallery" ? "active" : ""
                }`}
                onClick={() => setView("gallery")}
              >
                <CDGallery />
              </button>
              <button
                className={`cdf-view-option ${view === "list" ? "active" : ""}`}
                onClick={() => setView("list")}
              >
                <CDList />
              </button>
              <input
                type="file"
                id="file"
                ref={inputFile}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <button className="cdf-upload" onClick={handleClick}>
                <CDAdd />
                <Typography
                  color="white"
                  weight={600}
                  size={convertToRelativeUnit(15, "vh")}
                >
                  Upload
                </Typography>
              </button>
            </div>
          </div>
          <article className="cd-content">
            {view === "list" ? (
              <CDListView
                data={displayedResults}
                type={type}
                handleDelete={handleDelete}
                setPreviewUrl={setPreviewUrl}
                setShowPreviewModal={setShowPreviewModal}
                setFileType={setFileType}
                setFileName={setFileName}
              />
            ) : (
              <CDGalleryView
                data={displayedResults}
                type={type}
                handleDelete={handleDelete}
                setPreviewUrl={setPreviewUrl}
                setShowPreviewModal={setShowPreviewModal}
                setFileType={setFileType}
                setFileName={setFileName}
              />
            )}
          </article>
        </div>
      </section>
      <CloudStorage
        className="cloud-drive-storage"
        type={type}
        sizeOccupied={data.stats.sizeOccupied}
      />
      {showPreviewModal && previewUrl && (
        <ModalContainer close={() => setShowPreviewModal(false)}>
          <PreviewModal url={previewUrl} type={fileType} fileName={fileName} />
        </ModalContainer>
      )}
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .cloud-drive-folders {
      width: 76%;
      display: flex;
      flex-direction: column;

      .cd-folders-menu {
        width: 100%;
        height: 18%;
      }
    }

    .cloud-drive-storage {
      width: 22.5%;
      margin-top: 4.5vh;
      ${glassBackground};
      padding: 15px 20px;
    }

    .cd-files-menu {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .cdf-menu-options {
        height: 5vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5vh;
        gap: 1rem;

        h2 {
          margin: 0;
        }

        div {
          display: flex;
          height: 100%;
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;

          button.cdf-view-option {
            border-radius: 50%;
            aspect-ratio: 1 / 1;
            height: 100%;
            display: grid;
            place-items: center;
            transition: background 0.3s linear;
          }

          button.active {
            background: #fff;
            box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
          }

          button.cdf-upload {
            display: flex;
            padding: 10px 25px;
            justify-content: center;
            align-items: center;
            background: var(
              --gradient-orange,
              linear-gradient(180deg, #f87c56 0%, #f65321 100%)
            );
            box-shadow: 0px 4px 5px 0px rgba(248, 124, 86, 0.4);
            border-radius: 80px;

            svg {
              margin-right: 9px;
            }
          }
        }
      }

      article.cd-content {
        height: 63vh;
        border-radius: 16px;
        ${glassBackground};
        padding: ${convertToRelativeUnit(24, "vh")};
      }
    }
  `,
};
