import { useState } from "react";
import styled from "styled-components";

import FileDropzone from "../../../CloudDrive/FileDropzone";
import { Icon } from "../../../Global/Icon";
import { Modal, ModalProps } from "../../../Global/Modal";

export const RecipesUploadModal: React.FC<Omit<ModalProps, "children">> = ({
  ...props
}) => {
  const [file, setFile] = useState<File | undefined>(undefined);

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
        title={
          <Style.Title>
            <span>Click to upload</span> or drag and drop
          </Style.Title>
        }
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
            <div className="flex justify-between items-end">
              <div>
                <span className="uploading-icon">
                  <Icon name="uploading-file" />
                </span>
                {file?.name}
              </div>
              <span className="uploading-progress">100%</span>
            </div>
          </Style.FileInfo>
          <Icon name="close" />
        </Style.FileStatus>
      )}
    </Modal>
  );
};

const Style = {
  Title: styled.div`
    color: var(--neutral-400);
    margin: 8% 0;
    span {
      text-decoration: underline;
    }
  `,
  Description: styled.div`
    margin-bottom: 30%;
    color: var(--neutral-400);
    text-align: center;
  `,
  FileStatus: styled.section`
    padding-top: 5%;
    width: 100%;
    display: flex;
  `,
  FileInfo: styled.section`
    width: 100%;
    margin-right: 20px;
    display: flex;
    flex-direction: column;

    .uploading-icon {
      padding: 10px 8px 5px 10px;
      border-radius: 4px;
      margin-right: 15px;
      background: linear-gradient(#ffd760, #ffbf00);
    }

    .uploading-progress {
      float: right;
      color: var(--neutral-400);
      font-size: 10px;
    }
    .bar {
      border-bottom: 2px solid var(--green-500);
      width: 100%;
      margin-top: 10px;
    }
  `,
};
