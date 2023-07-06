import { useState } from "react";
import styled from "styled-components";

import { Icon } from "../../../Global/Icon";
import { Typography } from "../../../Global/Typography";
import { CurriculumSelect } from "./CurriculumSelect";
import { LanguageToggle } from "./LangToggle";
import { Search } from "./Search";
import { Tags } from "./Tag";

const options = [
  { value: "key-1", label: "Key 1" },
  { value: "key-2", label: "Key 2" },
  { value: "key-3", label: "Key 3" },
  { value: "key-4", label: "Key 4" },
  { value: "key-5", label: "Key 5" },
  { value: "key-6", label: "Key 6" },
];

interface Props {
  slideIndex: number;
  currentStep: number;
  deleteSlide: () => void;
}

export const ContentInfo: React.FC<Props> = ({
  slideIndex,
  currentStep,
  deleteSlide,
}) => {
  const [tags, setTags] = useState(["foraging", "seeds"]);

  const addTag = (tag: string) => {
    setTags((prev) => [...prev, tag]);
  };

  const deleteTag = (tag: string) => {
    setTags((prev) => [...prev.filter((current) => current !== tag)]);
  };

  return (
    <Style.Container>
      {currentStep < 4 && (
        <div style={{ width: "20%", alignItems: "end", display: "flex" }}>
          <Typography variant="h5" as="h5" weight="semi-bold">
            Components
          </Typography>
        </div>
      )}
      <Style.Info>
        <div className="flex">
          {currentStep < 4 ? (
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
          <LanguageToggle />
        </div>

        <div className="flex">
          {(currentStep === 2 || currentStep === 3) && (
            <CurriculumSelect
              options={options}
              onChange={(e) => {
                return;
              }}
            />
          )}
          {(currentStep === 0 || currentStep === 2) && (
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