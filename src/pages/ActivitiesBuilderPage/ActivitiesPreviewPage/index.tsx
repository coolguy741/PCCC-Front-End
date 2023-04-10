import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { LanguageChooser } from "../../../components/Global/LanguageChooser";
import { useState } from "react";
import { CenterAlignedContainer, LeftAlignedContainer } from "../../../components/Global/Container";
import { ActivityContent } from "../../../components/Activities/ActivityContent";


export const ActivitiesPreviewPage = () => {
  const [lang, setLang] = useState("en");
  const navigate = useNavigate();

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
      <ActivityContent/>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;


