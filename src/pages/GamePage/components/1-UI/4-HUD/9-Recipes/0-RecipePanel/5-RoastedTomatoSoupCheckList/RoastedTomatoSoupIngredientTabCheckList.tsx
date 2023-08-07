import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeCheckList from "../3-RecipeCheckList/RecipeCheckList";

const RoastedTomatoSoupIngredientTabCheckList: FC = () => {
  // Global State
  const { roastedTomatoSoupIngredients, roastedTomatoSoupUtensils } =
    useGlobalState(
      (state) => ({
        roastedTomatoSoupUtensils: state.roastedTomatoSoupUtensils,
        roastedTomatoSoupIngredients: state.roastedTomatoSoupIngredients,
      }),
      shallow,
    );

  return (
    <Fragment>
      <RecipeCheckList
        recipeItemTitle="Ingredient List"
        recipeItems={roastedTomatoSoupIngredients}
      />
      <RecipeCheckList
        recipeItemTitle="Utensils"
        recipeItems={roastedTomatoSoupUtensils}
      />
    </Fragment>
  );
};

export default memo(RoastedTomatoSoupIngredientTabCheckList);
