import { RecipeItemType } from "../RecipeModuleTypes";

export type RoastedTomatoSoupIngredientsKeyType =
  | "has_ripe_tomatoes"
  | "has_sweet_onion"
  | "has_head_of_garlic"
  | "has_fresh_thyme"
  | "has_olive_oil"
  | "has_salt_and_pepper";

export type RoastedTomatoSoupIngredientsObjectType = {
  [key in RoastedTomatoSoupIngredientsKeyType]: RecipeItemType;
};

export type RoastedTomatoSoupUtensilsKeyType =
  | "has_large_baking_dish"
  | "has_cutting_board"
  | "has_blender"
  | "has_chef_knife";

export type RoastedTomatoSoupUtensilsObjectType = {
  [key in RoastedTomatoSoupUtensilsKeyType]: RecipeItemType;
};

export type RoastedTomatoSoupPrepIngredientsKeyType =
  | "has_preheat_oven"
  | "has_cut_tomatoes"
  | "has_quartered_onion"
  | "has_separated_garlic"
  | "has_washed_thyme";

export type RoastedTomatoSoupPrepIngredientsObjectType = {
  [key in RoastedTomatoSoupPrepIngredientsKeyType]: RecipeItemType;
};

export type RoastedTomatoSoupGetCookinKeyType =
  | "action_arrange_tomatoes"
  | "action_wedge_onions_add_garlic"
  | "action_strip_thyme"
  | "action_sprinkle_in_dish"
  | "action_drizzle_olive_oil"
  | "action_salt_and_pepper"
  | "action_roast"
  | "action_transfer_to_blender"
  | "action_puree"
  | "action_add_salt_pepper";

export type RoastedTomatoSoupGetCookinObjectType = {
  [key in RoastedTomatoSoupGetCookinKeyType]: RecipeItemType;
};

export type RoastedTomatoSoupTasksKeyType =
  | RoastedTomatoSoupIngredientsKeyType
  | RoastedTomatoSoupUtensilsKeyType
  | RoastedTomatoSoupPrepIngredientsKeyType
  | RoastedTomatoSoupGetCookinKeyType;

export type RoastedTomatoSoupTasksType =
  | RoastedTomatoSoupIngredientsObjectType
  | RoastedTomatoSoupUtensilsObjectType
  | RoastedTomatoSoupPrepIngredientsObjectType
  | RoastedTomatoSoupGetCookinObjectType;
