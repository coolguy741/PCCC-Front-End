import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContentBuilder } from "../../../components/ContentBuilder";
import { useContentActions } from "../../../hooks/useContentActions";
import { useRecipesStore } from "../../../stores/contentBuilderStore";
import { ContentBuilderType } from "../../types";

export const RecipeCreatePage = () => {
  const { getContent } = useContentActions();
  const { item } = useParams();

  useEffect(() => {
    item && getContent(ContentBuilderType.RECIPES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <ContentBuilder
      type={ContentBuilderType.RECIPES}
      store={useRecipesStore()}
    />
  );
};
