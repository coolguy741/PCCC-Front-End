import { useEffect } from "react";

import { ContentBuilderOverview } from "../../../components/ContentBuilder/Overview";
import { useContentActions } from "../../../hooks/useContentActions";
import { useRecipesStore } from "../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../types";

export const RecipePage = () => {
  const { getContent } = useContentActions();

  useEffect(() => {
    getContent(ContentBuilderType.RECIPES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentBuilderOverview
      type={ContentBuilderType.RECIPES}
      store={useRecipesStore()}
    />
  );
};
