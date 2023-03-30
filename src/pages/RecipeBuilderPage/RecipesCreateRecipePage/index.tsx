import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { EditableText } from "../../../components/Global/EditableText";
import { FileUploader } from "../../../components/Global/FileUploader";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import { SmallButton } from "../../../components/Global/SmallButton";
import { NumberSetter } from "../../../components/Recipes/NumberSetter";
import { SaveRecipeModal } from "../../../components/Recipes/SaveRecipeModal";
import { SelectTags, Tag } from "../../../components/Recipes/SelectTags";
import { SelectIngredients, Ingredient } from "../../../components/Recipes/SelectIngredients";
import mockData from "../../../lib/mockData/recipes/recipesCreate.json";

export const RecipesCreateRecipePage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [ingredients, setIngredients] =  useState<Ingredient[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  const handlePreview = () => {
    navigate("./../recipe/preview");
  }

  const showModal = () => {
    setVisibleModal(true);
  }

  const handleSave = () => {
    navigate('./../recipe/preview');
  }

  const handleToggleLanguage = () => {
    setVisibleModal(false);
    if(currentLanguage === 'en')setCurrentLanguage('fr');
    if(currentLanguage === 'fr')setCurrentLanguage('en');
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
          <h3>Recipe Name</h3>
          <EditableText text={"Chocolate Granola Bites"} />
          <h3>What is it good for?</h3>
          <EditableText text={"These delicious bites are jam packed with fiber to keep you f"} />
          <div className="images-videos-tags-container">
            <div style={{width:'65%'}}>
              <h3>Images and Videos</h3>
              <FileUploader />
            </div>
            <div style={{width:'35%'}}>
              <h3>Tags</h3>
              <SelectTags tagOptions={mockData.Tags} tags={tags} setTags={setTags}/>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="servering-size-container">
            <h3>Servering Size</h3>
            <NumberSetter defaultValue={2} />
          </div>
          <div>
            <h3>Ingredients</h3>
            <SelectIngredients ingredients={ingredients} setIngredients={setIngredients} ingredientOptions={mockData.Ingredients} unitOptions={mockData.Units}/>
          </div>
          <div>
            <h3>Directions</h3>
            <EditableText text={"Combine all the ingredients together in a large bowl mix until well combined.Refrigerate for about 30 minutes Scoop out a tablespoon portion of mixture, roll each portion in the palm of your hands and place each ball into a resealable container for storage. Bites should be refrigerated to maintain shape or frozen for long term storage."} />
          </div>
          <RightAlignedContainer>
            <SmallButton onClick={showModal}>Save</SmallButton>
          </RightAlignedContainer>
        </div>
      </div>
      {visibleModal && 
      <ModalContainer>
        <SaveRecipeModal onSave={handleSave} onToggleLanguage={handleToggleLanguage}/>
      </ModalContainer>
      }
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
      width: 50%;

      .images-videos-tags-container{
        display: flex; 
        justify-content: space-between;
        gap: 20px;

      }
    }

    .right-content{
      display:flex;
      flex-direction: column;
      gap: 20px;
      width: 50%;

      .servering-size-container{
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
`;

const RightAlignedContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
