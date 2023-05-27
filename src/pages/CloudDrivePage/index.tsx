import styled from "styled-components";
import Button from "../../components/Button";
import FileDropzone from "../../components/CloudDrive/FileDropzone";
import { Folder } from "../../components/CloudDrive/Folder";
import { Icon } from "../../components/Global/Icon";
import DownloadIcon from "../../components/Icons/Download/download";
import SharingIcon from "../../components/Icons/Sharing/sharing";
import TrashIcon from "../../components/Icons/Trash/trash";

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
];

export const CloudDrivePage = () => {
  return (
    <Style.Container>
      <div className="folders-files-container">
        <Style.Folders>
          <h3>Folders</h3>
          <div className="content">
            {FolderNames.map(({ name, numberOfFiles, icon }) => (
              <Folder
                name={name}
                numberOfFiles={numberOfFiles}
                icon={icon}
                width="18.5%"
                height="100%"
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
            <Style.ScrollContainer>
              <Style.Table>
                <thead>
                  <tr>
                    <th className="name">Name</th>
                    <th className="sharing">Sharing</th>
                    <th className="size">Size</th>
                    <th className="date">Date</th>
                    <th className="actions"></th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <tr key={index}>
                      <td className="name">
                        <div className="icon-container">
                          <Icon name={file.icon + "-dark-outlined"} />
                        </div>
                        <p>
                          <b>{file.name}</b>
                          {"." + file.fileNameExtension}
                        </p>
                      </td>
                      <td className="sharing">{file.sharing}</td>
                      <td className="size">{file.size}</td>
                      <td className="date">{file.date}</td>
                      <td className="actions">
                        <SharingIcon
                          fill={"var(--neutral-600)"}
                          width={"20px"}
                        />
                        <DownloadIcon
                          fill={"var(--neutral-600)"}
                          width={"20px"}
                        />
                        <TrashIcon fill={"var(--neutral-600)"} width={"20px"} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Style.Table>
            </Style.ScrollContainer>
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
          <div className="folders">
            {FolderNames.map(({ name, capacity, icon }) => (
              <Folder
                name={name}
                capacity={capacity}
                icon={icon}
                width="100%"
                height="7vh"
              />
            ))}
          </div>
          <FileDropzone
            onFilesDropped={() => {
              alert("File Dropped");
            }}
          />
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
      width: 100%;
      height: 100%;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.2764px);
      padding: 2vh;
      padding-right: 3vh;
      overflow: hidden;
    }
  `,
  Table: styled.table`
    width: 100%;
    font-weight: 500;
    color: var(--neutral-400);
    border-collapse: collapse;
    padding-right: 2vh;

    thead {
      font-weight: 1.5vh;
      text-align: center;
      border-bottom: 2px solid;
      border-color: var(--neutral-400);

      th {
        padding-bottom: 1.33vh;
      }

      .name {
        width: 25%;
        text-align: start;
      }

      .sharing {
        width: 17.5%;
      }

      .date {
        width: 25%;
      }

      .size {
        width: 17.5%;
      }

      .actions {
        width: 15%;
      }
    }

    tbody {
      text-align: center;

      tr {
        border-bottom: 2px solid;
        border-color: var(--neutral-400);
      }

      td {
        font-size: 1.33vh;
        height: 7vh;
        justify-content: center;
        align-items: center;
      }

      .name {
        width: 25%;
        text-align: start;
        display: flex;
        justify-content: start;
        gap: 1.33vh;

        .icon-container {
          height: 4vh;
          aspect-ratio: 1/1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(
            182.85deg,
            rgba(255, 215, 96, 0.8) 2.47%,
            rgba(255, 191, 0, 0.8) 97.72%
          );
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          border-radius: 4px;

          img {
            width: 50%;
            height: 50%;
          }
        }

        p {
          b {
            color: var(--neutral-800);

            &:hover {
              color: red;
            }
          }
        }
      }

      .actions {
        display: flex;
        justify-content: space-around;
      }
    }
  `,
  ScrollContainer: styled.div`
    overflow-y: auto;
    height: 100%;
    padding-right: 1.33vh;
    margin-right: -2vh;
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
