import { useEffect } from "react";

import { ContentBuilderPrintPage } from "../../../../components/ContentBuilder/Components/Print";
import { useContentActions } from "../../../../hooks/useContentActions";
import { useRecipesStore } from "../../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../../types";

export const RecipePrintPage = () => {
  const { getContent } = useContentActions();
  const recipeStore = useRecipesStore();

  useEffect(() => {
    getContent(ContentBuilderType.RECIPES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ContentBuilderPrintPage store={recipeStore} />;
};
