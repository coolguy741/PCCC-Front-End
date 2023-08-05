export type RecipeTabTypes = "Ingredients" | "Instructions";

export interface RecipeModuleTypes {
  activeRecipeTab: RecipeTabTypes;
  setActiveRecipeTab: (newTab: RecipeTabTypes) => void;
}
