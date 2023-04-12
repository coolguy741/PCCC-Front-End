import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { AlignmentStyle } from "../../../components/Global/Container";
import { FileUploader } from "../../../components/Global/FileUploader";
import { LanguageChooser } from "../../../components/Global/LanguageChooser";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import { SaveChangesModal } from "../../../components/Global/SaveChangesModal";
import { SmallButton } from "../../../components/Global/SmallButton";
import mockData from "../../../lib/mockData/mealtime-moments/mealtime-moment-edit.json";

export const MealTimeMomentsEditMealTimeMomentPage = () => {
  const [lang, setLang] = useState<string>(
    localStorage.getItem("lang") ?? "en",
  );
  const [titleEn, setTitleEn] = useState(mockData.en.title);
  const [titleFr, setTitleFr] = useState(mockData.fr.title);
  const [overivewEn, setOverviewEn] = useState(mockData.en.overview);
  const [overivewFr, setOverviewFr] = useState(mockData.fr.overview);
  const [visibleModal, setVisibleModal] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    alert("Save changes");
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (lang === "en") {
      setTitleEn(value);
    } else {
      setTitleFr(value);
    }
  };

  const handleOverviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    if (lang === "en") {
      setOverviewEn(value);
    } else {
      setOverviewFr(value);
    }
  };

  const handleToggleLanguage = () => {
    setVisibleModal(false);
    if (lang === "en") setLang("fr");
    else setLang("en");
  };

  return (
    <Style.PageContainer>
      <AlignmentStyle.LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </AlignmentStyle.LeftAlignedContainer>
      <AlignmentStyle.CenterAlignedContainer>
        <LanguageChooser lang={lang} setLang={setLang} />
      </AlignmentStyle.CenterAlignedContainer>
      <Style.Content>
        <Style.DetailContainer>
          <AlignmentStyle.LeftAlignedContainer>
            <h3>Title</h3>
          </AlignmentStyle.LeftAlignedContainer>
          <Style.TitleInput
            value={lang === "en" ? titleEn : titleFr}
            onChange={handleTitleChange}
          />
        </Style.DetailContainer>
        <Style.OverviewImageContainer>
          <Style.DetailContainer>
            <h3>Overview</h3>
            <Style.OverviewTextArea
              value={lang === "en" ? overivewEn : overivewFr}
              rows={15}
              onChange={handleOverviewChange}
            ></Style.OverviewTextArea>
          </Style.DetailContainer>
          <Style.DetailContainer>
            <h3>Images and Videos</h3>
            <FileUploader />
          </Style.DetailContainer>
        </Style.OverviewImageContainer>
      </Style.Content>
      <AlignmentStyle.RightAlignedContainer>
        <SmallButton onClick={() => setVisibleModal(true)}>
          Save changes
        </SmallButton>
      </AlignmentStyle.RightAlignedContainer>
      {visibleModal && (
        <ModalContainer>
          <SaveChangesModal
            onSave={handleSave}
            onToggleLanguage={handleToggleLanguage}
          />
        </ModalContainer>
      )}
    </Style.PageContainer>
  );
};

const Style = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  TitleInput: styled.input`
    border: solid 1px black;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px #007bff33;
    }
  `,
  DetailContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-basis: 0;
    flex-grow: 1;
  `,
  OverviewImageContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 30px;
  `,
  OverviewTextArea: styled.textarea`
    width: 100%;

    &:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 2px #007bff33;
    }
  `,
};
