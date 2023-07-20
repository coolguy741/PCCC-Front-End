import { motion } from "framer-motion";
import styled from "styled-components";

import { useThemeBuilderStore } from "../../../../stores/themeBuilderStore";
import Button from "../../../Button";
import { Typography } from "../../../Global/Typography";

export const PreviewAction = () => {
  const { currentStep, changeStep } = useThemeBuilderStore();

  const handleNext = () => {
    changeStep(currentStep + 1);
  };

  return (
    <Style.ActionContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut" }}
        className="relative"
      >
        <Style.MessageWithSunny>
          <div className="message">
            <Typography variant="paragraph3" as="p" weight="semi-bold">
              It seems like you like this content.
            </Typography>
            <Typography variant="paragraph3" as="p">
              Learn more about gardening in
              <Typography variant="paragraph3" color="orange-500" as="span">
                'The places you will grow!'
              </Typography>
            </Typography>
            <Typography variant="paragraph3" as="p">
              OR check out another interesting theme
              <Typography variant="paragraph3" color="orange-500" as="span">
                'Kitchen Champ!'
              </Typography>
            </Typography>
          </div>
          <div className="relative">
            <img src="/images/content-builder/sunny.svg" alt="sunny" />
          </div>
        </Style.MessageWithSunny>
      </motion.div>
      <div className="flex ml-auto">
        <Button onClick={handleNext}>Next</Button>
      </div>
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
    }
  `,
  MessageWithSunny: styled.div`
    display: flex;
    position: absolute;
    top: -40%;

    .message {
      background: #ffffff;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.1));
      width: fit-content;
      position: relative;
      white-space: nowrap;
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
      transform: translate(10%);
      width: 6vw;
    }
  `,
};
