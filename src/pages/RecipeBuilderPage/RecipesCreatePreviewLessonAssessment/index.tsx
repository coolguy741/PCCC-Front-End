import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SmallButton } from "../../../components/Global/SmallButton";

export const RecipesCreatePreviewLessonAssessment = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handlePreview = () => {
    navigate("./preview");
  }

  return (
    <PageContainer>
      <button onClick={handleBack}>Back</button>
      <div className="title-buttons-container">
        <h2>Create recipe</h2>
        <div className="language-toggle">
          {currentLanguage == "en" ?
            <>
              <ClickedButton onClick={() => setCurrentLanguage('en')}>English</ClickedButton>
              <SmallButton onClick={() => setCurrentLanguage('fr')}>French</SmallButton>
            </>
            :
            <>
              <SmallButton onClick={() => setCurrentLanguage('en')}>English</SmallButton>
              <ClickedButton onClick={() => setCurrentLanguage('fr')}>French</ClickedButton>
            </>
          }
        </div>
        <SmallButton onClick={handlePreview}>Preview</SmallButton>
      </div>
    </PageContainer>
  );
};


const ClickedButton = styled(SmallButton)`
  background-color: green;
`

const PageContainer = styled.div`
  .title-buttons-container{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .language-toggle{
      display: flex;
      gap: 20px;
    }
  }
`;
