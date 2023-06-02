import FileDropzone from "../../../CloudDrive/FileDropzone";
import { Modal, ModalProps } from "../../../Global/Modal";

export const RecipesUploadModal: React.FC<Omit<ModalProps, "children">> = ({
  ...props
}) => {
  return (
    <Modal {...props}>
      <FileDropzone
        onFilesDropped={() => {
          alert("File Dropped");
        }}
      ></FileDropzone>
    </Modal>
  );
};
