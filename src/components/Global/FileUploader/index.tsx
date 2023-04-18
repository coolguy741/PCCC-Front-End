import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SmallButton } from "../SmallButton";

interface FileItem {
  file: File;
  preview: string;
}

export const FileUploader: React.FC = () => {
  const [fileList, setFileList] = useState<FileItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = event.target.files;
    if (newFiles) {
      const newFileList: FileItem[] = Array.from(newFiles).map((file) => {
        const isVideo = file.type.startsWith("video/");
        const preview = isVideo
          ? generateVideoThumbnail(file)
          : URL.createObjectURL(file);
        return { file, preview };
      });
      setFileList((prevFileList) => [...prevFileList, ...newFileList]);
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const generateVideoThumbnail = (file: File): string => {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    video.addEventListener("loadedmetadata", () => {
      video.currentTime = Math.min(0.5, video.duration);
    });
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
  };

  const handleRemoveFile = (fileToRemove: FileItem) => {
    setFileList((prevFileList) =>
      prevFileList.filter((fileItem) => fileItem !== fileToRemove),
    );
  };

  return (
    <Style.Container>
      <div className="thumbnail-container">
        {fileList.map((fileItem) => (
          <div
            key={fileItem.preview}
            style={{ display: "inline-block", position: "relative" }}
          >
            {fileItem.file.type.startsWith("image/") ? (
              <img
                src={fileItem.preview}
                alt={fileItem.file.name}
                style={{ width: "100px", height: "100px" }}
              />
            ) : (
              <img
                src={fileItem.preview}
                alt={fileItem.file.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            )}
            <button
              onClick={() => {
                handleRemoveFile(fileItem);
              }}
              style={{ position: "absolute", top: "0", right: "0" }}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="button-container">
        <label>
          <Style.HiddenInput
            type="file"
            accept="image/*,video/*"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <SmallButton onClick={handleUploadClick}>Upload</SmallButton>
        </label>
      </div>
    </Style.Container>
  );
};

const Style = {
  HiddenInput: styled.input`
    display: none;
  `,
  Container: styled.div`
    background-color: #c4c4c4;
    padding: 20px;

    .thumbnail-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .button-container {
      display: flex;
      justify-content: end;
    }
  `,
};
