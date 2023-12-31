import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { EditableText } from "../../../components/Global/EditableText";
import { FileUploader } from "../../../components/Global/FileUploader";
import { ModalContainer } from "../../../components/Global/ModalContainer";
import { SaveChangesModal } from "../../../components/Global/SaveChangesModal";
import { SmallButton } from "../../../components/Global/SmallButton";
import { NumberSetter } from "../../../components/Recipes/NumberSetter";
import {
  Ingredient,
  SelectIngredients,
} from "../../../components/Recipes/SelectIngredients";
import { SelectTags, Tag } from "../../../components/Recipes/SelectTags";
import mockData from "../../../lib/mockData/recipes/recipeEdit.json";
import { Language } from "../../types";

export const RecipesEditRecipePage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(Language.EN);
  const [ingredients, setIngredients] = useState<Ingredient[]>(
    mockData.initialIngredients,
  );
  const [tags, setTags] = useState<Tag[]>(mockData.initialTags);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handlePreview = () => {
    navigate("./../preview");
  };

  const showModal = () => {
    setVisibleModal(true);
  };

  const handleSave = () => {
    navigate("./../preview");
  };

  const handleToggleLanguage = () => {
    setVisibleModal(false);
    if (currentLanguage === Language.EN) setCurrentLanguage(Language.FR);
    if (currentLanguage === Language.FR) setCurrentLanguage(Language.EN);
  };

  return (
    <Style.PageContainer>
      <Button onClick={handleBack}>Back</Button>
      <div className="title-buttons-container">
        <h2>Edit recipe</h2>
        <div className="language-toggle">
          {currentLanguage === Language.EN ? (
            <>
              <SmallButton
                onClick={() => setCurrentLanguage(Language.EN)}
                bgColor="green"
              >
                English
              </SmallButton>
              <SmallButton onClick={() => setCurrentLanguage(Language.FR)}>
                French
              </SmallButton>
            </>
          ) : (
            <>
              <SmallButton onClick={() => setCurrentLanguage(Language.EN)}>
                English
              </SmallButton>
              <SmallButton
                onClick={() => setCurrentLanguage(Language.FR)}
                bgColor="green"
              >
                French
              </SmallButton>
            </>
          )}
        </div>
        <SmallButton onClick={handlePreview}>Preview</SmallButton>
      </div>
      <div className="content">
        <div className="left-content">
          <h3>Recipe Name</h3>
          <EditableText text={mockData.recipeName} />
          <h3>What is it good for?</h3>
          <EditableText text={mockData.advantage} />
          <div className="images-videos-tags-container">
            <div style={{ width: "65%" }}>
              <h3>Images and Videos</h3>
              <FileUploader />
            </div>
            <div style={{ width: "35%" }}>
              <h3>Tags</h3>
              <SelectTags
                tagOptions={mockData.Tags}
                tags={tags}
                setTags={setTags}
              />
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
            <SelectIngredients
              ingredients={ingredients}
              setIngredients={setIngredients}
              ingredientOptions={mockData.Ingredients}
              unitOptions={mockData.Units}
            />
          </div>
          <div>
            <h3>Directions</h3>
            <EditableText text={mockData.directions} />
          </div>
          <Style.RightAlignedContainer>
            <SmallButton onClick={showModal}>Save changes</SmallButton>
          </Style.RightAlignedContainer>
        </div>
      </div>
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
  ClickedButton: styled(SmallButton)`
    background-color: green;
  `,
  PageContainer: styled.div`
    .title-buttons-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .language-toggle {
        display: flex;
        gap: 20px;
      }
    }

    .content {
      display: flex;
      gap: 20px;

      .left-content {
        width: 50%;

        .images-videos-tags-container {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
      }

      .right-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;

        .servering-size-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }
      }
    }
  `,
  RightAlignedContainer: styled.div`
    display: flex;
    justify-content: flex-end;
  `,
};
