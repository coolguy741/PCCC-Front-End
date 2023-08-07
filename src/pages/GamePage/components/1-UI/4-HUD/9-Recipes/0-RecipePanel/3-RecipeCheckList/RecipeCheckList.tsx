import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { RecipeItemType } from "../../../../../../globalState/modules/RecipeModule/RecipeModuleTypes";
import { RoastedTomatoSoupTasksType } from "../../../../../../globalState/modules/RecipeModule/RoastedTomatoSoup/RoastedTomatoSoupTypes";
import {
  VegetableSpringRollsGetCookinKeyType,
  VegetableSpringRollsIngredientsKeyType,
  VegetableSpringRollsPrepIngredientsKeyType,
  VegetableSpringRollsTasksType,
  VegetableSpringRollsUtensilsKeyType,
} from "../../../../../../globalState/modules/RecipeModule/VegetableSpringRolls/VegetableSpringRollsTypes";
import { YogurtBerryParfaitTasksType } from "../../../../../../globalState/modules/RecipeModule/YogurtBerryParfait/YogurtBerryParfaitTypes";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeItem from "../2-RecipeItem/RecipeItem";
import RecipeCheckListStyleContainer from "./RecipeCheckListStyleContainer";

type RecipeItemsObjectPropType =
  | VegetableSpringRollsTasksType
  | RoastedTomatoSoupTasksType
  | YogurtBerryParfaitTasksType;

type RecipeItemTitleType =
  | "Ingredient List"
  | "Utensils"
  | "Get Cookin"
  | "Prepare Ingredients";

type RecipeCheckListKeysType =
  | VegetableSpringRollsIngredientsKeyType
  | VegetableSpringRollsUtensilsKeyType
  | VegetableSpringRollsPrepIngredientsKeyType
  | VegetableSpringRollsGetCookinKeyType;

interface RecipeCheckListPropTypes {
  recipeItems: RecipeItemsObjectPropType;
  recipeItemTitle: RecipeItemTitleType;
}

const RecipeCheckList: FC<RecipeCheckListPropTypes> = ({
  recipeItems,
  recipeItemTitle,
}) => {
  // Global State
  const { activeLanguage } = useGlobalState(
    (state) => ({
      activeLanguage: state.activeLanguage,
    }),
    shallow,
  );

  return (
    <RecipeCheckListStyleContainer>
      <h1 className="recipe-check-list-header">{recipeItemTitle}</h1>
      {Object.keys(recipeItems).map((recipeItemKey) => {
        const typedRecipeItems = recipeItems as Record<
          RecipeCheckListKeysType,
          RecipeItemType
        >;
        const recipeItem =
          typedRecipeItems[recipeItemKey as RecipeCheckListKeysType];
        return (
          <Fragment key={recipeItemKey}>
            {recipeItem.stepStatus && (
              <div className="step-status-header">
                {recipeItem.stepStatus
                  .split("_")
                  .map(
                    (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`,
                  )
                  .join(" ")}
              </div>
            )}
            <RecipeItem
              completed={recipeItem.completed}
              recipeContent={
                activeLanguage === "eng"
                  ? recipeItem.engContent
                  : recipeItem.frContent
              }
            />
          </Fragment>
        );
      })}
    </RecipeCheckListStyleContainer>
  );
};

export default memo(RecipeCheckList);
