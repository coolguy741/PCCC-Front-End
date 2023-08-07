import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { DropdownPosition } from "../../../../pages/types";

import { useAssessmentsStore } from "../../../../stores/assessmentsStore";
import { useEducatorNotesStore } from "../../../../stores/educatorNotesStore";
import { useThemeBuilderStore } from "../../../../stores/themeBuilderStore";
import Button from "../../../Button";
import { Typography } from "../../../Global/Typography";
import { CurriculumSelect } from "../ContentInfo/CurriculumSelect";

export const PreviewAction = () => {
  const {
    currentStep,
    curriculums,
    setCurrentStep,
    setCurriculum,
    selectedCurriculum,
  } = useThemeBuilderStore();
  const { changeCurriculum } = useEducatorNotesStore();
  const { changeCurriculum: changeAssessmentCurriculum } =
    useAssessmentsStore();

  useEffect(() => {
    curriculums?.length &&
      currentStep === 1 &&
      changeCurriculum(curriculums[0].id);
    curriculums?.length &&
      currentStep === 2 &&
      changeAssessmentCurriculum(curriculums[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curriculums, currentStep]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleChange = (value: string) => {
    currentStep === 1 && changeCurriculum(value, selectedCurriculum);
    currentStep === 2 && changeAssessmentCurriculum(value, selectedCurriculum);
    setCurriculum(value);
  };

  return (
    <Style.ActionContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut" }}
        className="relative w-1/2"
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
      {(currentStep === 1 || currentStep === 2) && (
        <div>
          <CurriculumSelect
            options={
              curriculums?.map((item) => ({
                label: item.name,
                value: item.id,
              })) ?? []
            }
            position={DropdownPosition.TOP}
            selectedValue={selectedCurriculum}
            onChange={handleChange}
          />
        </div>
      )}
      <Button onClick={handleNext}>Next</Button>
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
    .w-1/2 {
      width: 50%;
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
