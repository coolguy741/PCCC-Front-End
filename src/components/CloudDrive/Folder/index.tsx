import styled from "styled-components";
import { Icon } from "../../Global/Icon";

interface FolderProps {
  width?: string;
  height?: string;
  icon: string;
  name: string;
  numberOfFiles?: number;
  capacity?: number;
  progress?: {
    status: any;
  };
  setIsClicked: React.Dispatch<React.SetStateAction<any>>;
}

export const Folder: React.FC<FolderProps> = ({
  width = "100%",
  height = "7vh",
  icon,
  name,
  numberOfFiles,
  capacity,
  progress = { status: "" },
  setIsClicked,
}) => {
  return (
    <Style.Container
      width={width}
      height={height}
      name={name}
      status={progress.status}
    >
      <div className="line"></div>
      <div
        className="container"
        onClick={() => {
          setIsClicked(name);
        }}
      >
        <div className="icon-container">
          <Icon name={icon + "-dark-outlined"} />
        </div>
        <div className="info">
          <p className="name">{name}</p>
          {capacity && (
            <div className="info-content">
              <p className="capacity">{capacity + " GB"}</p>
              <p className="progress">
                {progress.status +
                  (typeof progress.status === "number" ? "%" : "")}
              </p>
            </div>
          )}
          {numberOfFiles && (
            <p className="number-of-files">{numberOfFiles + " Files"}</p>
          )}
        </div>
      </div>
      {progress ? (
        <div className="status">
          {progress.status === "Upload failed" ? (
            <Icon name="refresh" />
          ) : (
            <Icon name="close" />
          )}
        </div>
      ) : (
        ""
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div<{
    width: string;
    height: string;
    name: string;
    status: any;
  }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-shadow: ${(props) =>
      props.status ? "" : "0px 4px 16px rgba(0, 0, 0, 0.1)"};
    backdrop-filter: ${(props) => (props.status ? "" : "blur(59.2764px)")};
    border-radius: ${(props) => (props.status ? "" : "8px")};
    padding: ${(props) => (props.status ? "0vh" : "1.33vh")};
    display: flex;
    align-items: ${(props) => (props.status ? "" : "center")};
    gap: 1.33vh;
    position: relative;

    .line {
      position: absolute;
      bottom: 0px;
      border-bottom: ${(props) => (props.status ? "2px solid" : "")};
      border-bottom-color: ${(props) =>
        props.status
          ? props.status === "Upload failed"
            ? "rgba(218, 41, 28, 1)"
            : props.status > 80
            ? "rgba(38, 208, 124, 1)"
            : props.status > 30
            ? "rgba(0, 132, 213, 1)"
            : ""
          : ""};
      width: ${(props) =>
        props.status
          ? typeof props.status === "number"
            ? `calc(${props.status}% - 12.2%)`
            : "18%"
          : ""};
    }

    .container {
      width: 100%;
      height: 100%;
      display: inherit;
      gap: inherit;
      align-items: inherit;
    }

    &:hover {
      background: ${(props) =>
        !props.status
          ? "linear-gradient(182.85deg, rgba(255, 215, 96, 0.8) 2.47%, rgba(255, 191, 0, 0.8) 97.72%)"
          : ""};
      .icon-container {
        background: ${(props) =>
          props.status ? "" : "rgba(255, 239, 191, 1)"};
      }
    }

    .icon-container {
      height: ${(props) => (props.status ? "80%" : "100%")};
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

    .info {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 0.33vh;

      .name {
        font-size: 1.92vh;
        font-weight: 500;
        color: var(--neutral-800);
      }

      &-content {
        display: flex;
        justify-content: space-between;
      }

      .capacity,
      .number-of-files {
        font-size: 1.33vh;
        font-weight: 400;
        color: var(--neutral-400);
      }

      .progress {
        font-size: 1.33vh;
        font-weight: 400;
        color: var(--neutral-400);
        align-self: flex-end;
      }
    }

    .status {
      width: 12.2%;
      height: 75.8%;
      display: flex;
      align-items: center;

      img {
        width: 54.5%;
        height: 54.5%;
      }
    }
  `,
};
