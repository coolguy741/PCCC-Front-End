import styled from "styled-components";
import { Icon } from "../../Global/Icon";

interface FileProps {
  width?: string;
  height?: string;
  icon: string;
  name: string;
  fileNameExtension: string;
  index: number;
  progress?: any;
  status: any;
  setStatus: React.Dispatch<React.SetStateAction<any>>;
}

export const File: React.FC<FileProps> = ({
  width = "100%",
  height = "100%",
  icon,
  name,
  fileNameExtension,
  index,
  status,
  setStatus,
}) => {
  return (
    <Style.Container
      width={width}
      height={height}
      index={index + 1}
      status={status.index}
    >
      <div className="header">
        <div className="icon-container">
          <Icon name={icon + "-dark-outlined"} />
        </div>
        <div className="info">
          <p className="name">{name}</p>
          <p className="extension">.{fileNameExtension}</p>
        </div>
        <div
          className="tooltip-icon"
          onClick={() => {
            setStatus({ index: index + 1 });
          }}
        >
          :
        </div>
      </div>
      <div className="tooltip-text">
        <div className="tooltip-text-span">
          <Icon name="camera-dark-outlined" />
          Share
        </div>
        <div className="line" />
        <div className="tooltip-text-span">
          <Icon name="camera-dark-outlined" />
          Download
        </div>
        <div className="line" />
        <div className="tooltip-text-span">
          <Icon name="camera-dark-outlined" />
          Share
        </div>
      </div>
      <div className="content">
        <div className="icon-container">
          <Icon name={icon + "-dark-outlined"} />
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div<{
    width: string;
    height: string;
    index: number;
    status: number;
  }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 8px;
    position: relative;
    z-index: ${(props) => (props.index ? `calc(99999 - ${props.index})` : "2")};

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px;
      gap: 8px;
      width: 100%;
      height: 19%;

      .icon-container {
        width: 24px;
        height: 24px;
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
        width: 46%;

        .name {
          font-size: 1.92vh;
          font-weight: 500;
          color: var(--neutral-800);
        }

        .extension {
          font-size: 1.92vh;
          font-weight: 500;
          color: var(--neutral-400);
        }
      }

      .tooltip-icon {
        width: 17%;
        height: 100%;
        display: inline-grid;
        justify-content: center;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100px;

        &:hover {
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        }
      }
    }

    .tooltip-text {
      visibility: ${(props) =>
        props.status === props.index ? "visible" : "hidden"};
      position: absolute;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      width: 90%;
      height: 60%;
      top: 22%;
      right: ${(props) => (props.index % 5 === 0 ? "15%" : "")};
      left: ${(props) => (props.index % 5 !== 0 ? "93%" : "")};
      border-radius: 8px;
      padding: 12px;
      gap: 12px;
      font-size: 14px;
      line-height: 16px;
      color: var(--neutral-600);
      align-items: center;
      transition: opacity 0.3s;
      z-index: 9;

      &-span {
        display: flex;
        align-items: flex-start;
        height: 34%;
        align-items: center;
        padding: 0px 12px;
        gap: 12px;

        img {
          height: 50%;
        }

        &:hover {
          background: rgba(210, 247, 229, 1);
        }
      }

      .line {
        height: 1px;
        background: rgba(236, 236, 236, 1);
      }
    }
    .content {
      width: 100%;
      height: 100%;
      background: rgba(225, 244, 255, 1);
      border-radius: 4px;
      padding: 0px;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon-container {
        width: 25%;
        height: 25%;
        display: flex;
        place-content: center;
        align-items: center;
        background: linear-gradient(
          182.85deg,
          rgba(255, 215, 96, 0.8) 2.47%,
          rgba(255, 191, 0, 0.8) 97.72%
        );
        box-shadow: 0px 3.66667px 14.6667px rgba(0, 0, 0, 0.1);
        border-radius: 4px;

        img {
          width: 50%;
          height: 50%;
        }
      }
    }
  `,
};
