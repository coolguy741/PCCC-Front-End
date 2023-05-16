import styled from "styled-components";
import { Icon } from "../../Global/Icon";

interface FolderProps {
  width?: string;
  height?: string;
  icon: string;
  name: string;
  numberOfFiles?: number;
  capacity?: number;
}

export const Folder: React.FC<FolderProps> = ({
  width = "100%",
  height = "7vh",
  icon,
  name,
  numberOfFiles,
  capacity,
}) => {
  return (
    <Style.Container width={width} height={height}>
      <div className="icon-container">
        <Icon name={icon + "-dark-outlined"} />
      </div>
      <div className="info">
        <p className="name">{name}</p>
        {capacity && <p className="capacity">{capacity + " GB"}</p>}
        {numberOfFiles && (
          <p className="number-of-files">{numberOfFiles + " Files"}</p>
        )}
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div<{ width: string; height: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.2764px);
    border-radius: 8px;
    padding: 1.33vh;
    display: flex;
    align-items: center;
    gap: 1.33vh;

    .icon-container {
      height: 100%;
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

      .capacity,
      .number-of-files {
        font-size: 1.33vh;
        font-weight: 400;
        color: var(--neutral-400);
      }
    }
  `,
};
