import styled from "styled-components";
// import { Icon } from "../../components/Global/Icon";
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
  return (
    <Style.Container>
      <section className="cloud-drive-folders"></section>
      <section className="cloud-drive-storage "></section>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    display: flex;
  `,
};
