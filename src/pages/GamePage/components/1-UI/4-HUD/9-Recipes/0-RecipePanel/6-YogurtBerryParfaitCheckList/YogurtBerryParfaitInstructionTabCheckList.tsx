import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeCheckList from "../3-RecipeCheckList/RecipeCheckList";

const YogurtBerryParfaitInstructionTabCheckList: FC = () => {
  // Global State
  const { yogurtBerryParfaitGetCookin, yogurtBerryParfaitPrepIngredients } =
    useGlobalState(
      (state) => ({
        yogurtBerryParfaitPrepIngredients:
          state.yogurtBerryParfaitPrepIngredients,
        yogurtBerryParfaitGetCookin: state.yogurtBerryParfaitGetCookin,
      }),
      shallow,
    );

  return (
    <Fragment>
      <RecipeCheckList
        recipeItemTitle="Prepare Ingredients"
        recipeItems={yogurtBerryParfaitPrepIngredients}
      />
      <RecipeCheckList
        recipeItemTitle="Get Cookin"
        recipeItems={yogurtBerryParfaitGetCookin}
      />
    </Fragment>
  );
};

export default memo(YogurtBerryParfaitInstructionTabCheckList);
