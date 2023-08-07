import { useEffect, useState } from "react";
import styled from "styled-components";

import { ContentBuilderType, Language } from "../../../../pages/types";
import { useAssessmentsStore } from "../../../../stores/assessmentsStore";
import { useEducatorNotesStore } from "../../../../stores/educatorNotesStore";
import { useThemeBuilderStore } from "../../../../stores/themeBuilderStore";
import { Icon } from "../../../Global/Icon";
import { Typography } from "../../../Global/Typography";
import { CurriculumSelect } from "./CurriculumSelect";
import { LanguageToggle } from "./LangToggle";
import { Search } from "./Search";
import { Tags } from "./Tag";

interface Props {
  slideIndex: number;
  deleteSlide: () => void;
  setLang: (lang: Language) => void;
  currentLang: Language;
  type: ContentBuilderType;
}

export const ContentInfo: React.FC<Props> = ({
  slideIndex,
  deleteSlide,
  setLang,
  type,
  currentLang,
}) => {
  const [tags, setTags] = useState(["foraging", "seeds"]);
  const { currentStep, curriculums, setCurriculum, selectedCurriculum } =
    useThemeBuilderStore();
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

  const handleChange = (value: string) => {
    currentStep === 1 && changeCurriculum(value, selectedCurriculum);
    currentStep === 2 && changeAssessmentCurriculum(value, selectedCurriculum);
    setCurriculum(value);
  };

  const addTag = (tag: string) => {
    setTags((prev) => [...prev, tag]);
  };

  const deleteTag = (tag: string) => {
    setTags((prev) => [...prev.filter((current) => current !== tag)]);
  };

  return (
    <Style.Container>
      {(currentStep < 3 || type !== ContentBuilderType.THEMES) && (
        <div style={{ width: "20%", alignItems: "end", display: "flex" }}>
          <Typography variant="h5" as="h5" weight="semi-bold">
            Components
          </Typography>
        </div>
      )}
      <Style.Info>
        <div className="flex">
          {currentStep < 3 || type !== ContentBuilderType.THEMES ? (
            <Style.SlideDeleteButton
              onClick={deleteSlide}
              disabled={slideIndex === 0}
            >
              <Typography variant="h6" as="h6" weight="semi-bold">
                Slide - {slideIndex + 1}
              </Typography>
              <Icon name="trash" />
            </Style.SlideDeleteButton>
          ) : (
            <Search />
          )}
          <LanguageToggle setLang={setLang} lang={currentLang} />
        </div>

        <div className="flex">
          {(currentStep === 1 || currentStep === 2) && (
            <CurriculumSelect
              options={
                curriculums?.map((item) => ({
                  label: item.name,
                  value: item.id,
                })) ?? []
              }
              selectedValue={selectedCurriculum}
              onChange={handleChange}
            />
          )}
          {(currentStep === 0 || currentStep === 1) && (
            <Tags tags={tags} addTag={addTag} deleteTag={deleteTag} />
          )}
        </div>
      </Style.Info>
    </Style.Container>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    margin-top: 2vh;
    margin-bottom: 1vh;
    column-gap: 4%;
  `,
  Info: styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
  `,
  SlideDeleteButton: styled.button`
    display: flex;
    gap: 10%;
    align-items: center;
    background: #ffffff50;
    margin-right: 2rem;
    padding: 0.1vh 1vw;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);

    * {
      white-space: nowrap;
    }
  `,
  Language: styled.div`
    display: flex;
  `,
};
