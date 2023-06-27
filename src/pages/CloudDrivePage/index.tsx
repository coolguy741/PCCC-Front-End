import styled from "styled-components";
import { CDHeader } from "../../components/CloudDrive/Header";
import CDAdd from "../../components/CloudDrive/Icons/cd-add";
import CDGallery from "../../components/CloudDrive/Icons/cd-gallery";
import CDList from "../../components/CloudDrive/Icons/cd-list";
import { Typography } from "../../components/Typography";
import { convertToRelativeUnit } from "../../styles/helpers/convertToRelativeUnits";
import { glassBackground } from "../../styles/helpers/glassBackground";
// import { Icon } from "../../components/Global/Icon";
// import SharingIcon from "../../components/Icons/Sharing/sharing";
// import TrashIcon from "../../components/Icons/Trash/trash";

const FolderNames = [
  { name: "Documents", numberOfFiles: 100, icon: "file", capacity: 100 },
  { name: "Videos", numberOfFiles: 100, icon: "camera", capacity: 100 },
  { name: "Images", numberOfFiles: 100, icon: "image", capacity: 100 },
  { name: "Audio", numberOfFiles: 100, icon: "music", capacity: 100 },
  { name: "Download", numberOfFiles: 100, icon: "download", capacity: 100 },
];

interface FileInterface {
  name: string;
  icon: string;
  fileNameExtension: string;
  type: string;
  sharing: string;
  size: string;
  date: string;
}

const files: FileInterface[] = [
  {
    name: "Assessment",
    icon: "file",
    fileNameExtension: "pdf",
    type: "document",
    sharing: "self",
    size: "2 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Recipe",
    fileNameExtension: "mp4",
    icon: "camera",
    type: "video",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Coconut",
    fileNameExtension: "jpeg",
    icon: "image",
    type: "image",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Assessment",
    fileNameExtension: "pdf",
    icon: "file",
    type: "document",
    sharing: "self",
    size: "2 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Recipe",
    fileNameExtension: "mp4",
    icon: "camera",
    type: "video",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Coconut",
    fileNameExtension: "jpeg",
    icon: "image",
    type: "image",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Coconut",
    fileNameExtension: "jpeg",
    icon: "image",
    type: "image",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Coconut",
    fileNameExtension: "jpeg",
    icon: "image",
    type: "image",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
  {
    name: "Coconut",
    fileNameExtension: "jpeg",
    icon: "image",
    type: "image",
    sharing: "self",
    size: "200 MB",
    date: "Sat, 27 May 2023",
  },
];

const progress = [
  { status: 100 },
  { status: 100 },
  { status: 40 },
  { status: "Upload failed" },
  { status: 40 },
];

interface Status {
  index: number;
  isOpen: boolean;
}

export const CloudDrivePage = () => {
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
          <CDHeader />
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
            <div>
              <button className="cdf-view-option active">
                <CDGallery />
              </button>
              <button className="cdf-view-option">
                <CDList />
              </button>
              <button className="cdf-upload">
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
          <article className="cd-content"></article>
        </div>
      </section>
      <section className="cloud-drive-storage "></section>
    </Style.Container>
  );
};

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

        div {
          display: flex;
          height: 100%;
          width: 27.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          button.cdf-view-option {
            border-radius: 50%;
            aspect-ratio: 1 / 1;
            height: 100%;
            display: grid;
            place-items: center;
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
        flex-grow: 1;
        border-radius: 16px;
        ${glassBackground};
        padding: ${convertToRelativeUnit(24, "vh")};
      }
    }
  `,
};
