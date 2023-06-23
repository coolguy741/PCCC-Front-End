import { useThemeStore } from "../../../stores/themeStore";
import Button from "../../Button";
import { Modal, ModalProps } from "../../Global/Modal";
import { Typography } from "../../Global/Typography";

export const ConfirmModal: React.FC<Omit<ModalProps, "children">> = ({
  ...props
}) => {
  const { continueWithFrench } = useThemeStore();

  const handleContinue = () => {
    props.close();
    continueWithFrench();
  };

  const handleExit = () => {
    props.close();
  };

  return (
    <Modal {...props}>
      <Typography variant="h5" as="h5" weight="medium" mb={4}>
        The French content is incomplete. Are you sure you want to exit without
        it?
      </Typography>
      <div className="flex justify-between">
        <Button onClick={handleExit}>Save changes and exit</Button>
        <Button variant="yellow" onClick={handleContinue}>
          Continue with French
        </Button>
      </div>
    </Modal>
  );
};
