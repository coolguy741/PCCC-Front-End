import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeCheckList from "../3-RecipeCheckList/RecipeCheckList";

const YogurtBerryParfaitIngredientTabCheckList: FC = () => {
  // Global State
  const { yogurtBerryParfaitIngredients, yogurtBerryParfaitUtensils } =
    useGlobalState(
      (state) => ({
        yogurtBerryParfaitUtensils: state.yogurtBerryParfaitUtensils,
        yogurtBerryParfaitIngredients: state.yogurtBerryParfaitIngredients,
      }),
      shallow,
    );

  return (
    <Fragment>
      <RecipeCheckList
        recipeItemTitle="Ingredient List"
        recipeItems={yogurtBerryParfaitIngredients}
      />
      <RecipeCheckList
        recipeItemTitle="Utensils"
        recipeItems={yogurtBerryParfaitUtensils}
      />
    </Fragment>
  );
};

export default memo(YogurtBerryParfaitIngredientTabCheckList);
