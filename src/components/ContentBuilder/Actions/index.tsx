import { useState } from "react";
import styled from "styled-components";

import { useThemeStore } from "../../../stores/themeStore";
import Button from "../../Button";
import { ConfirmModal } from "../ConfirmModal";

export const ThemeEditorActions = () => {
  const { currentStep, changeStep, addSlide } = useThemeStore();
  const [showingConfirmModal, setShowingConfirmModal] = useState(false);
  const handleSaveAndContinue = () => {
    currentStep < 5
      ? changeStep(currentStep + 1)
      : setShowingConfirmModal(true);
  };

  const handleAddSlide = () => {
    addSlide();
  };

  return (
    <Style.ActionContainer>
      {currentStep < 4 && (
        <Button variant="yellow" onClick={handleAddSlide}>
          Add Slide
        </Button>
      )}
      <div className="flex ml-auto">
        <Button variant="yellow" className="mr-4">
          Save changes and exit
        </Button>
        <Button variant="orange" onClick={handleSaveAndContinue}>
          Save changes and continue
        </Button>
      </div>
      <ConfirmModal
        isOpen={showingConfirmModal}
        close={() => setShowingConfirmModal(false)}
      />
    </Style.ActionContainer>
  );
};

const Style = {
  ActionContainer: styled.section`
    padding: 2vh 0;
    display: flex;
    justify-content: space-between;
  `,
};
