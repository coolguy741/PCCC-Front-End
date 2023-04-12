import styled from "styled-components";
import { SmallButton } from "../SmallButton";

interface SaveChangesModalProps {
  onSave: () => void;
  onToggleLanguage: () => void;
}

export const SaveChangesModal = ({
  onSave,
  onToggleLanguage,
}: SaveChangesModalProps) => {
  return (
    <Style.Modal>
      <h3>
        The French content is incomplete. Are you sure you want to exit without
        it?{" "}
      </h3>
      <Style.ButtonGroup>
        <SmallButton onClick={onSave}>Save changes and continue</SmallButton>
        <SmallButton onClick={onToggleLanguage}>
          Continue with other language
        </SmallButton>
      </Style.ButtonGroup>
    </Style.Modal>
  );
};

const Style = {
  Modal: styled.div`
    background-color: white;
    padding: 20px;
    position: relative;
  `,
  ButtonGroup: styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  `,
};
