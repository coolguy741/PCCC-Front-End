import Cookies from "js-cookie";
import Dropzone from "react-dropzone";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../../../lib/api/api";
import { BASE_API_URL } from "../../../lib/api/helpers/consts";
import { STORAGE_KEY_JWT } from "../../../pages/consts";
import { Typography } from "../../Typography";

interface FileDropZoneProps {
  setProgress: (progress: any) => void;
  setUploads: (uploads: any) => void;
  uploads: any;
}

const FileDropzone = ({
  setProgress,
  setUploads,
  uploads,
}: FileDropZoneProps) => {
  const navigate = useNavigate();
  const { api } = new Api({
    baseURL: BASE_API_URL,
  });

  const onDrop = (files: any) => {
    files.forEach(async (file: any, index: number) => {
      setUploads((uploads: any) => [
        ...uploads,
        { name: file.name, size: file.size, progress: 0 },
      ]);

      await api.appCloudDriveUploadFileCreate(
        { file: file },
        { folder: "files" },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
          },
          onUploadProgress: (progressEvent) => {
            if (progressEvent.progress) {
              setUploads((prevState: any) => {
                console.log(prevState);

                return prevState.map((e: any, i: number) => {
                  return i === prevState.length - files.length + index
                    ? {
                        name: prevState[prevState.length - files.length + index]
                          .name,
                        size: prevState[prevState.length - files.length + index]
                          .size,
                        progress: progressEvent.progress,
                      }
                    : e;
                });
              });
            }
          },
        },
      );

      if (index === files.length - 1) {
        console.log(index, files.length - 1);

        navigate("./");
      }
    });
  };

  return (
    <Style.Container>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="wfp--dropzone">
            <div {...getRootProps({ className: "wfp--dropzone__input" })}>
              <input {...getInputProps()} />
              <div>
                <Typography
                  weight={400}
                  tag="h4"
                  size="1.5vh"
                  color="neutral-400"
                >
                  <Typography tag="span" color="blue-500">
                    <u>Click to upload</u>
                  </Typography>{" "}
                  or drag and drop
                </Typography>
                <Typography size="1.25vh" color="neutral-400">
                  Maximum file size 50 MB.
                </Typography>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    border-radius: 12px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%2326D07CFF' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(59.27639389038086px);
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;

    .wfp--dropzone__input {
      div {
        cursor: pointer;
      }
    }
  `,
};

export default FileDropzone;

// custom border styling generated with tool.
// https://kovart.github.io/dashed-border-generator/
