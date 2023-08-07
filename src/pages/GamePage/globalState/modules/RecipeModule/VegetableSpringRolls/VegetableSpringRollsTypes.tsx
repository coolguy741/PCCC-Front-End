import { RecipeItemType } from "../RecipeModuleTypes";

export type VegetableSpringRollsIngredientsKeyType =
  | "has_noodles"
  | "has_rice_paper"
  | "has_carrots"
  | "has_red_pepper"
  | "has_yellow_pepper"
  | "has_mint_leaves"
  | "has_cilantro_leaves"
  | "has_red_cabbage"
  | "has_hoisin_sauce";

export type VegetableSpringRollsIngredientsObjectType = {
  [key in VegetableSpringRollsIngredientsKeyType]: RecipeItemType;
};

export type VegetableSpringRollsUtensilsKeyType =
  | "has_large_bowl"
  | "has_tea_kettle"
  | "has_plastic_wrap"
  | "has_strainer"
  | "has_warm_water"
  | "has_tea_towel";

export type VegetableSpringRollsUtensilsObjectType = {
  [key in VegetableSpringRollsUtensilsKeyType]: RecipeItemType;
};

export type VegetableSpringRollsPrepIngredientsKeyType =
  | "has_sliced_carrots"
  | "has_sliced_red_pepper"
  | "has_sliced_yellow_peppers"
  | "has_sliced_cabbage";

export type VegetableSpringRollsPrepIngredientsObjectType = {
  [key in VegetableSpringRollsPrepIngredientsKeyType]: RecipeItemType;
};

export type VegetableSpringRollsGetCookinKeyType =
  | "action_noodles_in_bowl"
  | "action_pour_boiling_water"
  | "action_plastic_wrap"
  | "action_let_stand"
  | "action_dip_rice_paper"
  | "action_arrange_rice_paper"
  | "action_lay_out_veggies"
  | "action_fold_up_wrapper"
  | "action_fold_sides"
  | "action_roll_paper";

export type VegetableSpringRollsGetCookinObjectType = {
  [key in VegetableSpringRollsGetCookinKeyType]: RecipeItemType;
};

export type VegetableSpringRollsTasksKeyType =
  | VegetableSpringRollsIngredientsKeyType
  | VegetableSpringRollsUtensilsKeyType
  | VegetableSpringRollsPrepIngredientsKeyType
  | VegetableSpringRollsGetCookinKeyType;

export type VegetableSpringRollsTasksType =
  | VegetableSpringRollsIngredientsObjectType
  | VegetableSpringRollsUtensilsObjectType
  | VegetableSpringRollsPrepIngredientsObjectType
  | VegetableSpringRollsGetCookinObjectType;
