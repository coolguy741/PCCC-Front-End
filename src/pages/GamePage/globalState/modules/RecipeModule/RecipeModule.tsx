import { globalStateApiType } from "../../GlobalStateTypes";
import { RecipeTabTypes } from "./RecipeModuleTypes";

const RecipeModule = ({ set, get }: globalStateApiType) => {
  return {
    activeRecipeTab: "Ingredients" as RecipeTabTypes,
    setActiveRecipeTab: (newTab: RecipeTabTypes) => {
      set({ activeRecipeTab: newTab });
    },
  };
};

export { RecipeModule };
