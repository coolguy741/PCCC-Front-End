import { FC, memo } from "react";
import RecipeTabButton from "../1-RecipeTabButton/RecipeTabButton";
import RecipePanelPages from "./assets/recipe_pages.webp";
import RecipePanelBG from "./assets/recipe_panel_bg.webp";
import RecipePanelStyleContainer from "./RecipePanelStyleContainer";

const RecipePanel: FC = () => {
  return (
    <RecipePanelStyleContainer>
      <div className="recipe-panel-bg">
        <img
          className="recipe-panel-bg-wood"
          alt="recipe-panel"
          draggable={false}
          src={RecipePanelBG}
        />
        <div className="recipe-tab-buttons">
          <RecipeTabButton title={"Ingredients"} />
          <RecipeTabButton title={"Instructions"} />
        </div>

        <img
          className="recipe-panel-bg-pages"
          alt="recipe-panel"
          draggable={false}
          src={RecipePanelPages}
        />
      </div>
      <div className="recipe-content"></div>
    </RecipePanelStyleContainer>
  );
};

export default memo(RecipePanel);
