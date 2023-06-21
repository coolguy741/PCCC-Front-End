import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import FileDropzone from "../../components/CloudDrive/FileDropzone";
import { Folder } from "../../components/CloudDrive/Folder";
import Scrollbar from "../../components/Global/Scrollable";
// import { Icon } from "../../components/Global/Icon";
// import DownloadIcon from "../../components/Icons/Download/download";
import { File } from "../../components/CloudDrive/File";
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
  const [isClicked, setIsClicked] = useState<string>("");
  const [status, setStatus] = useState<Status>({ index: 0, isOpen: false });
  return (
    <Style.Container>
      <div className="folders-files-container">
        <Style.Folders>
          <h3>Folders</h3>
          <div className="content">
            {FolderNames.map(({ name, numberOfFiles, icon }) => (
              <Folder
                key={name}
                name={name}
                numberOfFiles={numberOfFiles}
                icon={icon}
                width="18.5%"
                height="100%"
                setIsClicked={setIsClicked}
              />
            ))}
          </div>
        </Style.Folders>
        <Style.Files>
          <div className="title-container">
            <h3>Files</h3>
            <Button
              variant="orange"
              size="large"
              icon="add"
              iconPosition="left"
            >
              Upload
            </Button>
          </div>
          <div className="content">
            <Scrollbar thumbWidth="thin">
              {files.map((file, index) => (
                <File
                  key={index}
                  index={index}
                  width="18.5%"
                  height="200px"
                  icon={file.icon}
                  name={file.name}
                  fileNameExtension={file.fileNameExtension}
                  status={status}
                  setStatus={setStatus}
                />
              ))}
            </Scrollbar>
          </div>
        </Style.Files>
      </div>
      <Style.CloudStorage>
        <h3>Cloud Storage</h3>
        <div className="content">
          <div className="total-capacity">
            <div className="text">
              <p>Documents</p>
              <p>20/200 GB left</p>
            </div>
            <div className="value-container">
              <div className="value"></div>
            </div>
          </div>
          <FileDropzone
            onFilesDropped={() => {
              alert("File Dropped");
            }}
          />
          <div className="folders">
            {isClicked
              ? FolderNames.map(({ name, capacity, icon }, index) => (
                  <Folder
                    key={name}
                    name={isClicked}
                    capacity={capacity}
                    icon={icon}
                    width="100%"
                    height="7vh"
                    progress={progress[index]}
                    setIsClicked={setIsClicked}
                  />
                ))
              : ""}
          </div>
        </div>
      </Style.CloudStorage>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    display: flex;
    gap: 2vh;
    overflow: auto;

    .folders-files-container {
      width: 75%;
      display: flex;
      flex-direction: column;
      gap: 2.66vh;
    }
  `,
  Folders: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.33vh;

    .content {
      width: 100%;
      height: 7vh;
      display: flex;
      justify-content: space-between;
    }
  `,

  Files: styled.div`
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.33vh;
    .title-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 24px;
      padding-right: 16px;
      gap: 16px;
      isolation: isolate;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.2764px);
      overflow: hidden;
      position: relative;
    }
  `,

  CloudStorage: styled.div`
    flex-grow: 1;
    margin-top: 4.66vh;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 16px;
    padding: 2vh;
    display: flex;
    flex-direction: column;
    gap: 2.66vh;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2vh;

      .total-capacity {
        display: flex;
        flex-direction: column;
        gap: 0.66vh;

        .text {
          font-size: 1.58vh;
          font-weight: 500;
          color: var(--neutral-600);
          display: flex;
          justify-content: space-between;
        }

        .value-container {
          width: 100%;
          height: 3.5vh;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(59.2764px);
          border-radius: 4px;

          .value {
            height: 100%;
            width: 50%;
            z-index: 2;
            background: linear-gradient(
              177.73deg,
              #4cde96 1.85%,
              #20ad67 98.05%
            );
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(59.2764px);
            border-radius: 4px;
          }
        }
      }

      .folders {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.33vh;
      }
    }
  `,
};
