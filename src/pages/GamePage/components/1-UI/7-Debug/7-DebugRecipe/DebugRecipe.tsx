import { FC, memo, useCallback, useState } from "react";
import { shallow } from "zustand/shallow";
import { ActiveRecipeType } from "../../../../globalState/modules/RecipeModule/RecipeModuleTypes";
import { RoastedTomatoSoupTasksObject } from "../../../../globalState/modules/RecipeModule/RoastedTomatoSoup/RoastedTomatoSoupDefines";
import { RoastedTomatoSoupTasksKeyType } from "../../../../globalState/modules/RecipeModule/RoastedTomatoSoup/RoastedTomatoSoupTypes";
import { VegetableSpringRollsTasksObject } from "../../../../globalState/modules/RecipeModule/VegetableSpringRolls/VegetableSpringRollsDefines";
import {
  VegetableSpringRollsIngredientsKeyType,
  VegetableSpringRollsTasksKeyType,
} from "../../../../globalState/modules/RecipeModule/VegetableSpringRolls/VegetableSpringRollsTypes";
import { YogurtBerryParfaitTasksObject } from "../../../../globalState/modules/RecipeModule/YogurtBerryParfait/YogurtBerryParfaitDefines";
import { YogurtBerryParfaitTasksKeyType } from "../../../../globalState/modules/RecipeModule/YogurtBerryParfait/YogurtBerryParfaitTypes";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import DebugRecipeStyleContainer from "./DebugRecipeStyleContainer";

const DebugRecipe: FC = () => {
  // Local State
  const [recipeStage, setRecipeStage] =
    useState<VegetableSpringRollsIngredientsKeyType | string>("");

  // Global State
  const {
    activeRecipe,
    setActiveRecipe,
    setRoastedTomatoSoupTasks,
    setYogurtBerryParfaitTasks,
    setVegetableSpringRollsTasks,
  } = useGlobalState(
    (state) => ({
      activeRecipe: state.activeRecipe,
      setActiveRecipe: state.setActiveRecipe,
      setRoastedTomatoSoupTasks: state.setRoastedTomatoSoupTasks,
      setYogurtBerryParfaitTasks: state.setYogurtBerryParfaitTasks,
      setVegetableSpringRollsTasks: state.setVegetableSpringRollsTasks,
    }),
    shallow,
  );

  const handleSetTasks = useCallback(() => {
    if (
      recipeStage === "vegetable_spring_rolls" ||
      recipeStage === "roasted_tomato_soup" ||
      recipeStage === "yogurt_berry_parfait"
    ) {
      setActiveRecipe(recipeStage as ActiveRecipeType);
    } else {
      if (activeRecipe === "vegetable_spring_rolls") {
        if (recipeStage in VegetableSpringRollsTasksObject) {
          setVegetableSpringRollsTasks(
            recipeStage as VegetableSpringRollsTasksKeyType,
            true,
          );
        }
      } else if (activeRecipe === "roasted_tomato_soup") {
        if (recipeStage in RoastedTomatoSoupTasksObject) {
          setRoastedTomatoSoupTasks(
            recipeStage as RoastedTomatoSoupTasksKeyType,
            true,
          );
        }
      } else if (activeRecipe === "yogurt_berry_parfait") {
        if (recipeStage in YogurtBerryParfaitTasksObject) {
          setYogurtBerryParfaitTasks(
            recipeStage as YogurtBerryParfaitTasksKeyType,
            true,
          );
        }
      }
    }
  }, [
    recipeStage,
    activeRecipe,
    setActiveRecipe,
    setRoastedTomatoSoupTasks,
    setYogurtBerryParfaitTasks,
    setVegetableSpringRollsTasks,
  ]);

  // useEffect(() => {
  //   Object.keys(YogurtBerryParfaitTasksObject).forEach((key) => {
  //     setYogurtBerryParfaitTasks(key as YogurtBerryParfaitTasksKeyType, true);
  //   });
  // }, [setYogurtBerryParfaitTasks]);

  return (
    <DebugRecipeStyleContainer>
      <div className="alpha">
        <h1>Set Recipe Status</h1>
        <input onChange={(e) => setRecipeStage(e.target.value)} />
        <button onClick={handleSetTasks}>Set Recipe Status</button>
      </div>
    </DebugRecipeStyleContainer>
  );
};

export default memo(DebugRecipe);
