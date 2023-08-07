import { RecipeItemType } from "../RecipeModuleTypes";

export type YogurtBerryParfaitIngredientsKeyType =
  | "has_greek_yogurt"
  | "has_mixed_berries"
  | "has_honey"
  | "has_granola";

export type YogurtBerryParfaitIngredientsObjectType = {
  [key in YogurtBerryParfaitIngredientsKeyType]: RecipeItemType;
};

export type YogurtBerryParfaitUtensilsKeyType =
  | "has_small_bowl"
  | "has_measuring_cup"
  | "has_measuring_spoons";

export type YogurtBerryParfaitUtensilsObjectType = {
  [key in YogurtBerryParfaitUtensilsKeyType]: RecipeItemType;
};

export type YogurtBerryParfaitPrepIngredientsKeyType =
  | "has_measured_yogurt"
  | "has_measured_berries";

export type YogurtBerryParfaitPrepIngredientsObjectType = {
  [key in YogurtBerryParfaitPrepIngredientsKeyType]: RecipeItemType;
};

// TODO: Maybe account for reapeting layering twice
export type YogurtBerryParfaitGetCookinKeyType =
  | "action_fill_container"
  | "action_top_with_berries"
  | "action_drizzle_honey"
  | "action_repeat"
  | "action_top_with_granola";

export type YogurtBerryParfaitGetCookinObjectType = {
  [key in YogurtBerryParfaitGetCookinKeyType]: RecipeItemType;
};

export type YogurtBerryParfaitTasksKeyType =
  | YogurtBerryParfaitIngredientsKeyType
  | YogurtBerryParfaitUtensilsKeyType
  | YogurtBerryParfaitPrepIngredientsKeyType
  | YogurtBerryParfaitGetCookinKeyType;

export type YogurtBerryParfaitTasksType =
  | YogurtBerryParfaitIngredientsObjectType
  | YogurtBerryParfaitUtensilsObjectType
  | YogurtBerryParfaitPrepIngredientsObjectType
  | YogurtBerryParfaitGetCookinObjectType;
