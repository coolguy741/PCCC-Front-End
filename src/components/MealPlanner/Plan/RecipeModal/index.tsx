import styled from "styled-components";
import Button from "../../../Button";

import { useEffect, useState } from "react";
import { useAPI } from "../../../../hooks/useAPI";
import { Language } from "../../../../pages/types";
import { LanguageToggle } from "../../../ContentBuilder/Components/ContentInfo/LangToggle";
import { DoubleClickToEditComponent } from "../../../ContentCreation/DoubleClickToEdit";
import { Media } from "../../../ContentCreation/Media/media";
import { Icon } from "../../../Global/Icon";
import { Modal, ModalProps } from "../../../Global/Modal";
import Scrollable from "../../../Global/Scrollable";
import { Typography } from "../../../Global/Typography";

export const RecipeModal: React.FC<
  Omit<ModalProps, "children"> & { selectedRecipeId: string }
> = ({ selectedRecipeId, ...props }) => {
  const { api } = useAPI();
  const [lang, setLang] = useState<Language>(Language.EN);
  const [recipe, setRecipe] = useState<any>(null);
  const [isEditable, setIsEditable] = useState(false);

  const getRecipes = async () => {
    const response = await api.appRecipesDetail(selectedRecipeId);

    if (response.status === 200 && response.data) {
      setRecipe(response.data);
    }
  };

  const toggleEditable = () => {
    setIsEditable((prev) => !prev);
  };

  const changeMediaPattern = () => {
    console.log("pattern");
  };

  const addThumbnail = () => {
    console.log("addThumbnail");
  };

  const changeMediaState = () => {
    console.log("pattern");
  };

  useEffect(() => {
    getRecipes();
  }, [selectedRecipeId]);

  return (
    <Modal {...props} size="xl" withoutScroll>
      <Style.Header>
        <LanguageToggle lang={lang} setLang={setLang} />
        <div>
          <Icon name="edit" onClick={toggleEditable} />
          <Icon name="close" onClick={props.close} />
        </div>
      </Style.Header>
      {recipe ? (
        <Style.Container>
          <Style.Recipe>
            <Style.RecipeDetail>
              <div>
                <label>Recipe name</label>
                {isEditable}
                <div className="detail-content">
                  <DoubleClickToEditComponent
                    mode={isEditable ? "edit" : "view"}
                    // setText={changeText}
                    // changeEditState={changeEditState}
                    text={recipe.name}
                    name="question"
                    weight="semi-bold"
                  />
                </div>
              </div>
              <div>
                <label>Serving</label>
                <div className="detail-content">
                  <DoubleClickToEditComponent
                    mode={isEditable ? "edit" : "view"}
                    // setText={changeText}
                    // changeEditState={changeEditState}
                    text={recipe.servingSize || ""}
                    name="question"
                    weight="semi-bold"
                  />
                </div>
              </div>
            </Style.RecipeDetail>
            <article className="image">
              <Media
                changePattern={changeMediaPattern}
                isEditable={isEditable}
                changeMediaState={changeMediaState}
                media={{ src: recipe.image || "/patterns/grapes.png" }}
                addThumbnail={addThumbnail}
              />
            </article>
          </Style.Recipe>
          <Style.RecipeInfo>
            <Style.IngredientsContainer>
              <label>Ingredients</label>
              <Scrollable>
                <Style.Ingredients>
                  {recipe.ingredients &&
                    recipe.ingredients.map(
                      (ingredient: {
                        quantity: number;
                        measurement: string;
                        name: string;
                      }) => (
                        <div>
                          <Typography variant="h6" as="h6" weight="medium">
                            {ingredient.quantity} {ingredient.measurement}
                          </Typography>
                          <Typography variant="paragraph3" as="span">
                            {ingredient.name}
                          </Typography>
                        </div>
                      ),
                    )}
                </Style.Ingredients>
              </Scrollable>
            </Style.IngredientsContainer>
            <Style.DirectionsContainer>
              <label>Directions</label>
              <Scrollable>
                <Style.Directions>
                  <ol>
                    {recipe.directions &&
                      recipe.directions.map((direction: string) => (
                        <li>{direction}</li>
                      ))}
                  </ol>
                </Style.Directions>
              </Scrollable>
            </Style.DirectionsContainer>
          </Style.RecipeInfo>
        </Style.Container>
      ) : null}
      <div className="flex justify-end">
        <Button variant="orange">Print</Button>
      </div>
    </Modal>
  );
};

const Style = {
  Container: styled.section`
    display: flex;
    height: 50%;
    overflow: hidden;
    gap: 2rem;
    margin-bottom: 2rem;

    & > section {
      width: 50%;
    }
  `,
  Recipe: styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .image {
      height: 50vh;
      border-radius: 1rem;
    }

    img {
      border-radius: 0.5rem;
    }
  `,
  RecipeDetail: styled.div`
    display: flex;
    gap: 5%;

    .detail-content {
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      height: 6vh;
      padding: 0 2vh;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.27639389038086px);
    }

    & > div {
      display: flex;
      flex-direction: column;

      &:first-child {
        width: 80%;
      }
      &:last-child {
        width: 15%;
      }

      label {
        color: var(--neutral-500);
        font-size: 1.5vh;
        margin-bottom: 1vh;
      }
    }
  `,
  RecipeInfo: styled.section`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 5%;

    .directions {
      overflow: auto;
      height: 65%;
    }
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-bottom: 2rem;

    div {
      display: flex;
      gap: 1.5rem;
    }

    img {
      cursor: pointer;
    }
  `,
  IngredientsContainer: styled.div`
    overflow: hidden;
    height: 35%;
    display: flex;
    flex-direction: column;

    label {
      color: var(--neutral-500);
      font-size: 1.5vh;
      margin-bottom: 1vh;
    }

    & > section {
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.27639389038086px);
      padding: 1rem 2rem;
    }
  `,
  DirectionsContainer: styled.div`
    overflow: hidden;
    height: 65%;
    display: flex;
    flex-direction: column;
    label {
      color: var(--neutral-500);
      font-size: 1.5vh;
      margin-bottom: 1vh;
    }

    & > section {
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(59.27639389038086px);
      padding: 1rem 2rem;
    }
  `,
  Directions: styled.div`
    width: 100%;
    row-gap: 15%;
    column-gap: 5%;
    padding: 0 5%;

    ol {
      list-style: decimals;
      li {
        padding: 1%;
        &:before {
          content: counter(list-item) " ";
          left: -10%;
        }
      }
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  Ingredients: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 15%;
    column-gap: 5%;

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `,
};
