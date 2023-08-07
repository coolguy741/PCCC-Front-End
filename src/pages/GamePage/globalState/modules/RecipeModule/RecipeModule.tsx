import { globalStateApiType } from "../../GlobalStateTypes";
import { ActiveRecipeType, RecipeTabTypes } from "./RecipeModuleTypes";
import {
  RoastedTomatoSoupGetCookinObject,
  RoastedTomatoSoupIngredientsObject,
  RoastedTomatoSoupPrepIngredientsObject,
  RoastedTomatoSoupTasksObject,
  RoastedTomatoSoupUtensilsObject,
} from "./RoastedTomatoSoup/RoastedTomatoSoupDefines";
import {
  RoastedTomatoSoupGetCookinKeyType,
  RoastedTomatoSoupIngredientsKeyType,
  RoastedTomatoSoupPrepIngredientsKeyType,
  RoastedTomatoSoupTasksKeyType,
  RoastedTomatoSoupUtensilsKeyType,
} from "./RoastedTomatoSoup/RoastedTomatoSoupTypes";
import {
  VegetableSpringRollsGetCookinObject,
  VegetableSpringRollsIngredientsObject,
  VegetableSpringRollsPrepIngredientsObject,
  VegetableSpringRollsTasksObject,
  VegetableSpringRollsUtensilsObject,
} from "./VegetableSpringRolls/VegetableSpringRollsDefines";
import {
  VegetableSpringRollsGetCookinKeyType,
  VegetableSpringRollsIngredientsKeyType,
  VegetableSpringRollsPrepIngredientsKeyType,
  VegetableSpringRollsTasksKeyType,
  VegetableSpringRollsUtensilsKeyType,
} from "./VegetableSpringRolls/VegetableSpringRollsTypes";
import {
  YogurtBerryParfaitGetCookinObject,
  YogurtBerryParfaitIngredientsObject,
  YogurtBerryParfaitPrepIngredientsObject,
  YogurtBerryParfaitTasksObject,
  YogurtBerryParfaitUtensilsObject,
} from "./YogurtBerryParfait/YogurtBerryParfaitDefines";
import {
  YogurtBerryParfaitGetCookinKeyType,
  YogurtBerryParfaitIngredientsKeyType,
  YogurtBerryParfaitPrepIngredientsKeyType,
  YogurtBerryParfaitTasksKeyType,
  YogurtBerryParfaitUtensilsKeyType,
} from "./YogurtBerryParfait/YogurtBerryParfaitTypes";

const RecipeModule = ({ set, get }: globalStateApiType) => {
  return {
    activeRecipe: "vegetable_spring_rolls" as ActiveRecipeType,
    setActiveRecipe: (newRecipe: ActiveRecipeType) => {
      set({ activeRecipe: newRecipe });
    },

    activeRecipeTab: "Ingredients" as RecipeTabTypes,
    setActiveRecipeTab: (newTab: RecipeTabTypes) => {
      set({ activeRecipeTab: newTab });
    },

    // Vegetable Spring Rolls
    vegetableSpringRollsIngredients: VegetableSpringRollsIngredientsObject,
    vegetableSpringRollsUtensils: VegetableSpringRollsUtensilsObject,
    vegetableSpringRollsPrepIngredients:
      VegetableSpringRollsPrepIngredientsObject,
    vegetableSpringRollsGetCookin: VegetableSpringRollsGetCookinObject,
    setVegetableSpringRollsTasks: (
      vsrTaskKey: VegetableSpringRollsTasksKeyType,
      completed: boolean,
    ) => {
      if (vsrTaskKey in VegetableSpringRollsTasksObject) {
        if (vsrTaskKey in VegetableSpringRollsIngredientsObject) {
          set((state) => {
            state.vegetableSpringRollsIngredients[
              vsrTaskKey as VegetableSpringRollsIngredientsKeyType
            ].completed = completed;
          });
        } else if (vsrTaskKey in VegetableSpringRollsUtensilsObject) {
          set((state) => {
            state.vegetableSpringRollsUtensils[
              vsrTaskKey as VegetableSpringRollsUtensilsKeyType
            ].completed = completed;
          });
        } else if (vsrTaskKey in VegetableSpringRollsPrepIngredientsObject) {
          set((state) => {
            state.vegetableSpringRollsPrepIngredients[
              vsrTaskKey as VegetableSpringRollsPrepIngredientsKeyType
            ].completed = completed;
          });
        } else if (vsrTaskKey in VegetableSpringRollsGetCookinObject) {
          set((state) => {
            state.vegetableSpringRollsGetCookin[
              vsrTaskKey as VegetableSpringRollsGetCookinKeyType
            ].completed = completed;
          });
        }
      }
    },

    // Roasted Tomato Soup
    roastedTomatoSoupIngredients: RoastedTomatoSoupIngredientsObject,
    roastedTomatoSoupUtensils: RoastedTomatoSoupUtensilsObject,
    roastedTomatoSoupPrepIngredients: RoastedTomatoSoupPrepIngredientsObject,
    roastedTomatoSoupGetCookin: RoastedTomatoSoupGetCookinObject,
    setRoastedTomatoSoupTasks: (
      rtsTaskKey: RoastedTomatoSoupTasksKeyType,
      completed: boolean,
    ) => {
      if (rtsTaskKey in RoastedTomatoSoupTasksObject) {
        if (rtsTaskKey in RoastedTomatoSoupIngredientsObject) {
          set((state) => {
            state.roastedTomatoSoupIngredients[
              rtsTaskKey as RoastedTomatoSoupIngredientsKeyType
            ].completed = completed;
          });
        } else if (rtsTaskKey in RoastedTomatoSoupUtensilsObject) {
          set((state) => {
            state.roastedTomatoSoupUtensils[
              rtsTaskKey as RoastedTomatoSoupUtensilsKeyType
            ].completed = completed;
          });
        } else if (rtsTaskKey in RoastedTomatoSoupPrepIngredientsObject) {
          set((state) => {
            state.roastedTomatoSoupPrepIngredients[
              rtsTaskKey as RoastedTomatoSoupPrepIngredientsKeyType
            ].completed = completed;
          });
        } else if (rtsTaskKey in RoastedTomatoSoupGetCookinObject) {
          set((state) => {
            state.roastedTomatoSoupGetCookin[
              rtsTaskKey as RoastedTomatoSoupGetCookinKeyType
            ].completed = completed;
          });
        }
      }
    },

    // Yogurt Berry Parfait
    yogurtBerryParfaitIngredients: YogurtBerryParfaitIngredientsObject,
    yogurtBerryParfaitUtensils: YogurtBerryParfaitUtensilsObject,
    yogurtBerryParfaitPrepIngredients: YogurtBerryParfaitPrepIngredientsObject,
    yogurtBerryParfaitGetCookin: YogurtBerryParfaitGetCookinObject,
    setYogurtBerryParfaitTasks: (
      ybpTaskKey: YogurtBerryParfaitTasksKeyType,
      completed: boolean,
    ) => {
      if (ybpTaskKey in YogurtBerryParfaitTasksObject) {
        if (ybpTaskKey in YogurtBerryParfaitIngredientsObject) {
          set((state) => {
            state.yogurtBerryParfaitIngredients[
              ybpTaskKey as YogurtBerryParfaitIngredientsKeyType
            ].completed = completed;
          });
        } else if (ybpTaskKey in YogurtBerryParfaitUtensilsObject) {
          set((state) => {
            state.yogurtBerryParfaitUtensils[
              ybpTaskKey as YogurtBerryParfaitUtensilsKeyType
            ].completed = completed;
          });
        } else if (ybpTaskKey in YogurtBerryParfaitPrepIngredientsObject) {
          set((state) => {
            state.yogurtBerryParfaitPrepIngredients[
              ybpTaskKey as YogurtBerryParfaitPrepIngredientsKeyType
            ].completed = completed;
          });
        } else if (ybpTaskKey in YogurtBerryParfaitGetCookinObject) {
          set((state) => {
            state.yogurtBerryParfaitGetCookin[
              ybpTaskKey as YogurtBerryParfaitGetCookinKeyType
            ].completed = completed;
          });
        }
      }
    },
  };
};

export { RecipeModule };
