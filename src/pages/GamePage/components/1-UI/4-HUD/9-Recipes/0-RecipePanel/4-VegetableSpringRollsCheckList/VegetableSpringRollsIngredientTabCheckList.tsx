import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeCheckList from "../3-RecipeCheckList/RecipeCheckList";

const VegetableSpringRollsIngredientTabCheckList: FC = () => {
  // Global State
  const { vegetableSpringRollsIngredients, vegetableSpringRollsUtensils } =
    useGlobalState(
      (state) => ({
        vegetableSpringRollsUtensils: state.vegetableSpringRollsUtensils,
        vegetableSpringRollsIngredients: state.vegetableSpringRollsIngredients,
      }),
      shallow,
    );

  return (
    <Fragment>
      <RecipeCheckList
        recipeItemTitle="Ingredient List"
        recipeItems={vegetableSpringRollsIngredients}
      />
      <RecipeCheckList
        recipeItemTitle="Utensils"
        recipeItems={vegetableSpringRollsUtensils}
      />
    </Fragment>
  );
};

export default memo(VegetableSpringRollsIngredientTabCheckList);
