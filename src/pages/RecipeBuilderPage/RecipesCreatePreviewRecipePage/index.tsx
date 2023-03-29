import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { SmallButton } from "../../../components/Global/SmallButton";

export const RecipesCreatePreviewRecipePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const toggleLanguage = () => {
      
  }

  return (
    <PageContainer>
      <LeftAlignedContainer>
        <Button onClick={handleBack}>Back</Button>
      </LeftAlignedContainer>
      <LanguageButtonGroup>
        <SmallButton onClick={toggleLanguage}>English</SmallButton>
        <SmallButton onClick={toggleLanguage}>French</SmallButton>
      </LanguageButtonGroup>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LanguageButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

const LeftAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`