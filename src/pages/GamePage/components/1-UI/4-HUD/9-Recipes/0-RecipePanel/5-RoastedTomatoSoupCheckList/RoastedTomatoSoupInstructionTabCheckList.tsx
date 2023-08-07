import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import RecipeCheckList from "../3-RecipeCheckList/RecipeCheckList";

const RoastedTomatoSoupInstructionTabCheckList: FC = () => {
  // Global State
  const { roastedTomatoSoupGetCookin, roastedTomatoSoupPrepIngredients } =
    useGlobalState(
      (state) => ({
        roastedTomatoSoupPrepIngredients:
          state.roastedTomatoSoupPrepIngredients,
        roastedTomatoSoupGetCookin: state.roastedTomatoSoupGetCookin,
      }),
      shallow,
    );

  return (
    <Fragment>
      <RecipeCheckList
        recipeItemTitle="Prepare Ingredients"
        recipeItems={roastedTomatoSoupPrepIngredients}
      />
      <RecipeCheckList
        recipeItemTitle="Get Cookin"
        recipeItems={roastedTomatoSoupGetCookin}
      />
    </Fragment>
  );
};

export default memo(RoastedTomatoSoupInstructionTabCheckList);
