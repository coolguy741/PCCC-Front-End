import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { EditableText } from "../../../components/Global/EditableText";
import { FileUploader } from "../../../components/Global/FileUploader";
import { SmallButton } from "../../../components/Global/SmallButton";
import { Search } from "../../../components/Recipes/Search";
import { SearchWithText } from "../../../components/Recipes/SearchWithText";


export const RecipesCreateRecipePage = () => {
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
      <Button onClick={handleBack}>Back</Button>
      <div className="title-buttons-container">
        <h2>Create recipe</h2>
        <div className="language-toggle">
          {currentLanguage == "en" ?
            <>
              <SmallButton onClick={() => setCurrentLanguage('en')} bgColor="green">English</SmallButton>
              <SmallButton onClick={() => setCurrentLanguage('fr')}>French</SmallButton>
            </>
            :
            <>
              <SmallButton onClick={() => setCurrentLanguage('en')}>English</SmallButton>
              <ClickedButton onClick={() => setCurrentLanguage('fr')} bgColor="green">French</ClickedButton>
            </>
          }
        </div>
        <SmallButton onClick={handlePreview}>Preview</SmallButton>
      </div>
      <div className="content">
        <div className="left-content">
          <h3>Recipe Nmae</h3>
          <EditableText text={""} />
          <h3>What is it good for?</h3>
          <EditableText text={""} />
          <div className="images-videos-tags-container">
            <div style={{width:'65%'}}>
              <h3>Images and Videos</h3>
              <FileUploader />
            </div>
            <div style={{width:'35%'}}>
              <h3>Tags</h3>
              <SearchWithText />
            </div>
          </div>
        </div>
        <div className="right-content">
        </div>
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

  .content{
    display: flex;
    gap: 20px;

    .left-content{

      .images-videos-tags-container{
        display: flex; 
        justify-content: space-between;
        gap: 20px;
      }
    }
  }
`;
