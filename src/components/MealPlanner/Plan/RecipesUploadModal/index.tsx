import { useState } from "react";
import styled from "styled-components";

import FileDropzone from "../../../CloudDrive/FileDropzone";
import { Icon } from "../../../Global/Icon";
import { Modal, ModalProps } from "../../../Global/Modal";

export const RecipesUploadModal: React.FC<Omit<ModalProps, "children">> = ({
  ...props
}) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isUploading, setIsUpploading] = useState<boolean>(false);
  const [isUploaded, setIsUpploaded] = useState<boolean>(false);

  const handleClose = () => {
    setFile(undefined);
    props.close();
  };

  return (
    <Modal {...props} close={handleClose} size="lg" width="680px">
      <FileDropzone
        onFilesDropped={(files: File[]) => {
          if (files.length) {
            setFile(files[0]);
          }
        }}
        fileType={{ "application/vnd.ms-excel": [".xls"] }}
        className="mt-8"
        title="or drag and drop"
        trigger="Click to upload"
        noClick={true}
        description={
          <Style.Description>
            <p>Support .xls file only</p>
            <p>Maximum file size 50 MB</p>
          </Style.Description>
        }
      />
      {!!file && (
        <Style.FileStatus>
          <Style.FileInfo>
            <div>
              <span className="uploading-icon">
                <Icon name="uploading-file" />
              </span>
            </div>
            <div>
              <p>{file?.name}</p>
              <p className="file-size">{file.size / 1024}KB</p>
            </div>
          </Style.FileInfo>
          <Style.UploadingStatus>
            {isUploading && (
              <div className="uploading-progress">Uploading...</div>
            )}
            {isUploaded && (
              <div className="uploading-success">
                Upload successful
                <Icon name="upload-success" />
              </div>
            )}
            {!isUploaded && !isUploading && !!file && (
              <div className="uploading-failed">
                Upload failed
                <Icon name="refresh" />
              </div>
            )}
          </Style.UploadingStatus>
        </Style.FileStatus>
      )}
    </Modal>
  );
};

const Style = {
  Description: styled.div`
    margin-bottom: 30%;
    color: var(--neutral-400);
    text-align: center;
  `,
  FileStatus: styled.section`
    padding-top: 5%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,
  FileInfo: styled.section`
    display: flex;
    align-items: center;
    .uploading-icon {
      padding: 15px 10px 8px 15px;
      border-radius: 4px;
      margin-right: 15px;
      background: linear-gradient(#ffd760, #ffbf00);
    }

    .bar {
      border-bottom: 2px solid var(--green-500);
      width: 100%;
      margin-top: 10px;
    }

    .file-size {
      font-size: 1.2vh;
    }
  `,
  UploadingStatus: styled.div`
    display: flex;
    align-items: center;
    & > div {
      display: flex;
      gap: 20px;
    }
    .uploading-progress {
      float: right;
      color: var(--neutral-400);
      font-size: 10px;
    }

    .uploading-success {
      color: var(--green-500);
    }

    .uploading-failed {
      color: var(--red-500);
    }
  `,
};
