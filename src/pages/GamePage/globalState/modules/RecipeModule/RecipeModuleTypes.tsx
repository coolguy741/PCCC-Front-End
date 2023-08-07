import {
  RoastedTomatoSoupGetCookinObjectType,
  RoastedTomatoSoupIngredientsObjectType,
  RoastedTomatoSoupPrepIngredientsObjectType,
  RoastedTomatoSoupTasksKeyType,
  RoastedTomatoSoupUtensilsObjectType,
} from "./RoastedTomatoSoup/RoastedTomatoSoupTypes";
import {
  VegetableSpringRollsGetCookinObjectType,
  VegetableSpringRollsIngredientsObjectType,
  VegetableSpringRollsPrepIngredientsObjectType,
  VegetableSpringRollsTasksKeyType,
  VegetableSpringRollsUtensilsObjectType,
} from "./VegetableSpringRolls/VegetableSpringRollsTypes";
import {
  YogurtBerryParfaitGetCookinObjectType,
  YogurtBerryParfaitIngredientsObjectType,
  YogurtBerryParfaitPrepIngredientsObjectType,
  YogurtBerryParfaitTasksKeyType,
  YogurtBerryParfaitUtensilsObjectType,
} from "./YogurtBerryParfait/YogurtBerryParfaitTypes";

export type RecipeTabTypes = "Ingredients" | "Instructions";

export type ActiveRecipeType =
  | "vegetable_spring_rolls"
  | "roasted_tomato_soup"
  | "yogurt_berry_parfait";

export type RecipeItemStepType = "step_1" | "step_2" | "step_3";

export interface RecipeItemType {
  frContent: string;
  engContent: string;
  completed: boolean;
  stepStatus?: RecipeItemStepType;
}

export interface RecipeModuleTypes {
  activeRecipeTab: RecipeTabTypes;
  setActiveRecipeTab: (newTab: RecipeTabTypes) => void;

  activeRecipe: ActiveRecipeType;
  setActiveRecipe: (newRecipe: ActiveRecipeType) => void;

  // Vegetable Spring Rolls
  vegetableSpringRollsIngredients: VegetableSpringRollsIngredientsObjectType;
  vegetableSpringRollsUtensils: VegetableSpringRollsUtensilsObjectType;
  vegetableSpringRollsPrepIngredients: VegetableSpringRollsPrepIngredientsObjectType;
  vegetableSpringRollsGetCookin: VegetableSpringRollsGetCookinObjectType;
  setVegetableSpringRollsTasks: (
    vsrTaskKey: VegetableSpringRollsTasksKeyType,
    completed: boolean,
  ) => void;

  // Roasted Tomato Soup
  roastedTomatoSoupIngredients: RoastedTomatoSoupIngredientsObjectType;
  roastedTomatoSoupUtensils: RoastedTomatoSoupUtensilsObjectType;
  roastedTomatoSoupPrepIngredients: RoastedTomatoSoupPrepIngredientsObjectType;
  roastedTomatoSoupGetCookin: RoastedTomatoSoupGetCookinObjectType;
  setRoastedTomatoSoupTasks: (
    rtsTaskKey: RoastedTomatoSoupTasksKeyType,
    completed: boolean,
  ) => void;

  // Yogurt Berry Parfait
  yogurtBerryParfaitIngredients: YogurtBerryParfaitIngredientsObjectType;
  yogurtBerryParfaitUtensils: YogurtBerryParfaitUtensilsObjectType;
  yogurtBerryParfaitPrepIngredients: YogurtBerryParfaitPrepIngredientsObjectType;
  yogurtBerryParfaitGetCookin: YogurtBerryParfaitGetCookinObjectType;

  setYogurtBerryParfaitTasks: (
    ybpTaskKey: YogurtBerryParfaitTasksKeyType,
    completed: boolean,
  ) => void;
}
