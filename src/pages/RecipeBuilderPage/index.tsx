import Cookies from "js-cookie";
import { useEffect } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useAPI } from "../../hooks/useAPI";
import { useRecipesStore } from "../../stores/recipesStore";
import { STORAGE_KEY_JWT } from "../consts";

export const RecipesPage = () => {
  const { recipes, setRecipes } = useRecipesStore();
  const { api } = useAPI();
  const handleSelectionChange = (id: string, isSelected: boolean) => {
    return;
  };
  useEffect(() => {
    api &&
      (async () => {
        const recipes = await api
          .appCurriculumRecipesList(
            {},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
            },
          )
          .then((res) => res.data);
        setRecipes(recipes.items);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContentListAdminPageTemplate
      title={"Recipe"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={recipes ?? []}
      onSelectionChange={handleSelectionChange}
    />
  );
};
