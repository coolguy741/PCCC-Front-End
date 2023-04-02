import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { LanguageChooser } from "../../../components/Global/LanguageChooser";
import { useState } from "react";
import { CenterAlignedContainer, LeftAlignedContainer, RightAlignedContainer } from "../../../components/Global/Container";
import mockData from "../../../lib/mockData/mealtime-moments/mealtime-moment-edit.json";
import { FileUploader } from "../../../components/Global/FileUploader";
import { SmallButton } from "../../../components/Global/SmallButton";

export const MealTimeMomentsEditMealTimeMomentPage = () => {
  const [lang, setLang] = useState<string>(localStorage.getItem('lang') ?? "en");
  const [titleEn, setTitleEn] = useState(mockData.en.title);
  const [titleFr, setTitleFr] = useState(mockData.fr.title);
  const [overivewEn, setOverviewEn] = useState(mockData.en.overview);
  const [overivewFr, setOverviewFr] = useState(mockData.fr.overview);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handleSave = () => {
    alert("Save changes");
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (lang === 'en') {
      setTitleEn(value);
    } else {
      setTitleFr(value);
    }
  };

  const handleOverviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (lang === 'en') {
      setOverviewEn(value);
    } else {
      setOverviewFr(value);
    }
  };

  return (
    <PageContainer>
      <LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </LeftAlignedContainer>
      <CenterAlignedContainer>
        <LanguageChooser lang={lang} setLang={setLang}/>
      </CenterAlignedContainer>
      <Content>
        <DetailContainer>
          <LeftAlignedContainer>
            <h3>Title</h3>
          </LeftAlignedContainer>
          <TitleInput value={lang === "en" ? mockData.en.title : mockData.fr.title} onChange={handleTitleChange}/>
        </DetailContainer>
        <OverviewImageContainer>
          <DetailContainer>
            <h3>Overview</h3>
            <OverviewTextArea value={lang === "en" ? mockData.en.overview : mockData.fr.overview} rows={15} onChange={handleOverviewChange}></OverviewTextArea>
          </DetailContainer>
          <DetailContainer>
            <h3>Images and Videos</h3>
            <FileUploader />
          </DetailContainer>
        </OverviewImageContainer>
      </Content>
      <RightAlignedContainer><SmallButton onClick={handleSave}>Save changes</SmallButton></RightAlignedContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px
`

const TitleInput = styled.input`
  border: solid 1px black;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #007bff33;
  }
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: 0;
  flex-grow: 1;
`

const OverviewImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
`

const OverviewTextArea = styled.textarea`
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px #007bff33;
  }
`