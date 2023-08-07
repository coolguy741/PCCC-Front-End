import { AnimatePresence, motion } from "framer-motion";
import { FC, Fragment, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import {
  RefDivType,
  RefTimeoutType,
} from "../../../../../../shared/Types/RefTypes";
import VegetableSpringRollsIngredientTabCheckList from "../4-VegetableSpringRollsCheckList/VegetableSpringRollsIngredientTabCheckList";
import VegetableSpringRollsInstructionTabCheckList from "../4-VegetableSpringRollsCheckList/VegetableSpringRollsInstructionTabCheckList";
import RoastedTomatoSoupIngredientTabCheckList from "../5-RoastedTomatoSoupCheckList/RoastedTomatoSoupIngredientTabCheckList";
import RoastedTomatoSoupInstructionTabCheckList from "../5-RoastedTomatoSoupCheckList/RoastedTomatoSoupInstructionTabCheckList";
import YogurtBerryParfaitIngredientTabCheckList from "../6-YogurtBerryParfaitCheckList/YogurtBerryParfaitIngredientTabCheckList";
import YogurtBerryParfaitInstructionTabCheckList from "../6-YogurtBerryParfaitCheckList/YogurtBerryParfaitInstructionTabCheckList";
import RecipeContentStyleContainer from "./RecipeContentStyleContainer";

const RecipeContent: FC = () => {
  // Refs
  const recipeContentContainerRef: RefDivType = useRef(null);
  const recipeContentScrollTimeoutrRef: RefTimeoutType = useRef(null);

  // Global State
  const { activeRecipeTab, activeRecipe } = useGlobalState(
    (state) => ({
      activeRecipe: state.activeRecipe,
      activeRecipeTab: state.activeRecipeTab,
    }),
    shallow,
  );

  // Handlers
  const handleRecipeContentScrollStartOnUpdate = useCallback(() => {
    if (recipeContentScrollTimeoutrRef.current) {
      clearTimeout(recipeContentScrollTimeoutrRef.current);
    }

    recipeContentScrollTimeoutrRef.current = setTimeout(() => {
      if (!recipeContentContainerRef.current) return;
      recipeContentContainerRef.current.scrollTo(0, 0);
    }, 300);
  }, []);

  // Listers
  useEffect(handleRecipeContentScrollStartOnUpdate, [
    activeRecipeTab,
    handleRecipeContentScrollStartOnUpdate,
  ]);

  return (
    <Fragment>
      <h1 className="recipe-header">
        {activeRecipe
          .split("_")
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(" ")}
      </h1>
      <RecipeContentStyleContainer ref={recipeContentContainerRef}>
        <AnimatePresence mode={"wait"}>
          {activeRecipeTab === "Ingredients" && (
            <motion.div
              key={"ingredients"}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              className="ingredients-container"
            >
              {activeRecipe === "vegetable_spring_rolls" && (
                <VegetableSpringRollsIngredientTabCheckList />
              )}

              {activeRecipe === "roasted_tomato_soup" && (
                <RoastedTomatoSoupIngredientTabCheckList />
              )}

              {activeRecipe === "yogurt_berry_parfait" && (
                <YogurtBerryParfaitIngredientTabCheckList />
              )}
            </motion.div>
          )}

          {activeRecipeTab === "Instructions" && (
            <motion.div
              key={"instruction-content"}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              className="instructions-container"
            >
              {activeRecipe === "vegetable_spring_rolls" && (
                <VegetableSpringRollsInstructionTabCheckList />
              )}

              {activeRecipe === "roasted_tomato_soup" && (
                <RoastedTomatoSoupInstructionTabCheckList />
              )}

              {activeRecipe === "yogurt_berry_parfait" && (
                <YogurtBerryParfaitInstructionTabCheckList />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </RecipeContentStyleContainer>
    </Fragment>
  );
};

export default memo(RecipeContent);
