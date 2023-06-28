import { ContentBuilderPreview } from "../../../../components/ContentBuilder/Preview";
import { useRecipesStore } from "../../../../stores/recipesStore";
import { ContentBuilderType } from "../../../types";

export const RecipePreviewPage = () => {
  return (
    <ContentBuilderPreview
      type={ContentBuilderType.RECIPES}
      store={useRecipesStore()}
    />
  );
};
