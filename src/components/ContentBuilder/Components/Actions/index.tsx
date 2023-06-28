import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

import Button from "../../../Button";
import { Typography } from "../../../Global/Typography";
import { ConfirmModal } from "../ConfirmModal";

interface Props {
  showingMessage?: boolean;
  currentStep: number;
  maxPageCount: number;
  addSlide: () => void;
  changeStep: (step: number) => void;
}

export const ContentEditorActions: React.FC<Props> = ({
  currentStep,
  changeStep,
  addSlide,
  maxPageCount,
  showingMessage = false,
}) => {
  const [showingConfirmModal, setShowingConfirmModal] = useState(false);

  const handleSaveAndContinue = () => {
    currentStep < maxPageCount - 1
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
      <AnimatePresence>
        {showingMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut" }}
            className="relative"
          >
            <Style.MessageWithSunny>
              <Typography
                variant="paragraph2"
                as="p"
                weight="medium"
                className="message"
              >
                Oops, bee-lieve it or not, there’s not enough space for this
                component in your slide! Let’s create some room and try again,
                shall we?”
              </Typography>
              <div className="relative">
                <img src="/images/content-builder/sunny.svg" alt="sunny" />
              </div>
            </Style.MessageWithSunny>
          </motion.div>
        )}
      </AnimatePresence>
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
    position: relative;
    justify-content: space-between;

    .relative {
      position: relative;

      margin-left: 30px;
    }
  `,
  MessageWithSunny: styled.div`
    display: flex;
    position: absolute;
    top: -30%;

    .message {
      background: #ffffff;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      width: 20vw;
      position: relative;
      padding: 1vh 1vw;
      z-index: 1;
      border-radius: 1rem;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

      &:after {
        content: "";
        background: #ffffff;
        position: absolute;
        top: 50%;
        z-index: -1;
        transform: translate(40%, -50%) rotate(45deg);
        right: 0;
        width: 1vw;
        height: 1vw;
      }
    }

    img {
      position: absolute;
      top: -20%;
      transform: translate(-5%);
      width: 6vw;
    }
  `,
};
