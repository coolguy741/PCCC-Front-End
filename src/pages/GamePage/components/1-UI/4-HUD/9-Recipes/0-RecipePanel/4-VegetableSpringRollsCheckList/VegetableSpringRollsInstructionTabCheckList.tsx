import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeCheckList from "../3-RecipeCheckList/RecipeCheckList";

const VegetableSpringRollsInstructionTabCheckList: FC = () => {
  // Global State
  const { vegetableSpringRollsGetCookin, vegetableSpringRollsPrepIngredients } =
    useGlobalState(
      (state) => ({
        vegetableSpringRollsPrepIngredients:
          state.vegetableSpringRollsPrepIngredients,
        vegetableSpringRollsGetCookin: state.vegetableSpringRollsGetCookin,
      }),
      shallow,
    );

  return (
    <Fragment>
      <RecipeCheckList
        recipeItemTitle="Prepare Ingredients"
        recipeItems={vegetableSpringRollsPrepIngredients}
      />
      <RecipeCheckList
        recipeItemTitle="Get Cookin"
        recipeItems={vegetableSpringRollsGetCookin}
      />
    </Fragment>
  );
};

export default memo(VegetableSpringRollsInstructionTabCheckList);
