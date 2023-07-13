import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useAPI } from "../../hooks/useAPI";
import { useRecipesStore } from "../../stores/recipesStore";
import { STORAGE_KEY_JWT } from "../consts";

export const RecipesPage = () => {
  const { recipes, setRecipes } = useRecipesStore();
  const [isNeededToReload, setIsNeededToReload] = useState(true);
  const { api } = useAPI();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const handleSelectionChange = (id: string, isSelected: boolean) => {
    setSelectedIds((prevIds) => {
      return [
        ...prevIds.filter((prevId) => prevId !== id),
        isSelected ? id : "",
      ].filter(Boolean);
    });
  };

  const handleDelete = useCallback(async () => {
    for (const id of selectedIds) {
      await api.appCurriculumRecipesDelete(id, {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });
    }
    setIsNeededToReload(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);

  useEffect(() => {
    api &&
      isNeededToReload &&
      (async () => {
        const response = await api
          .appCurriculumRecipesList(
            {},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
            },
          )
          .then((res) => res.data);
        setRecipes(response.items);
        setIsNeededToReload(false);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);
  return (
    <ContentListAdminPageTemplate
      title={"Recipe"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={recipes ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
    />
  );
};
