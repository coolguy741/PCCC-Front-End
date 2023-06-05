import React, { useCallback } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Icon } from "../../Global/Icon";

interface FileDropzoneProps {
  onFilesDropped: (files: FileWithPath[]) => void;
  className?: string;
  title?: JSX.Element;
  description?: JSX.Element;
  fileType?: Record<string, string[]>;
}

const FileDropzone: React.FC<FileDropzoneProps> = ({
  onFilesDropped,
  title,
  description,
  className,
  fileType,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      onFilesDropped(acceptedFiles);
    },
    [onFilesDropped],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: fileType,
    maxFiles: 1,
    maxSize: 50000000,
  });

  return (
    <Style.Container {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={`label ${className ?? ""}`}>
        <Icon name="drop-files-green" />
        <div className="text">
          <p className="bold">{title ?? "Drop your files"}</p>
          <p className="normal">{description ?? "Supports all file formats"}</p>
        </div>
      </div>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    border: 1px dashed;
    border-color: var(--green-500);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    .label {
      display: flex;
      flex-direction: column;
      gap: 1vh;
      align-items: center;

      img {
        width: 4vh;
        height: 4vh;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.33vh;

        .bold {
          font-weight: 500;
          font-size: 1.6vh;
          color: var(--neutral-800);
        }

        .normal {
          font-weight: 400;
          font-size: 1.33vh;
          color: var(--neutral-400);
        }
      }
    }
  `,
};

export default FileDropzone;
