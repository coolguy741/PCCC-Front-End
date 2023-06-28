import { ContentBuilder } from "../../../components/ContentBuilder";
import { useRecipesStore } from "../../../stores/recipesStore";
import { ContentBuilderType } from "../../types";

export const RecipeCreatePage = () => {
  return (
    <ContentBuilder
      type={ContentBuilderType.RECIPES}
      store={useRecipesStore()}
    />
  );
};
