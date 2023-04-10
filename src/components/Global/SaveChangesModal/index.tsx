import styled from "styled-components";
import { SmallButton } from "../SmallButton";

interface SaveChangesModalProps {
  onSave: () => void;
  onToggleLanguage: () => void;
}

export const SaveChangesModal = ({ onSave, onToggleLanguage }: SaveChangesModalProps) => {
  return (
    <Modal>
      <h3>The French content is incomplete. Are you sure you want to exit without it? </h3>
      <ButtonGroup>
        <SmallButton onClick={onSave}>Save changes and continue</SmallButton>
        <SmallButton onClick={onToggleLanguage}>Continue with other language</SmallButton>
      </ButtonGroup>
    </Modal>
  );
};

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

