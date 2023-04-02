import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CenterAlignedContainer, LeftAlignedContainer } from "../../../components/Global/Container";
import { Button } from "../../../components/Global/Button";
import { LanguageChooser } from "../../../components/Global/LanguageChooser";
import { useState } from "react";
import mockData from "../../../lib/mockData/mealtime-moments/mealtime-moment-edit.json";
import { Text } from "../../../components/Global/Text";

export const MealTimeMomentsPreviewPage = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<string>(localStorage.getItem('lang') ?? "en");

  const handleBack = () => {
    navigate(-1);
  }
  
  return (
    <PageContainer>
      <LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </LeftAlignedContainer>
      <CenterAlignedContainer>
        <LanguageChooser lang={lang} setLang={setLang}/>
      </CenterAlignedContainer>
      <h2>{lang === "en" ? mockData.en.title : mockData.fr.title}</h2>
      <Content>
        <Text>{lang === "en" ? mockData.en.overview : mockData.fr.overview}</Text>
        <StyledImage src={lang === "en" ? mockData.en.image : mockData.fr.image} alt={lang === "en" ? mockData.en.alt : mockData.fr.alt}/> 
      </Content>
    </PageContainer>
  );
};

const PageContainer = styled.div`
`

const Content = styled.div`
  display: flex;
  gap: 50px;
`

const StyledImage = styled.img`
`