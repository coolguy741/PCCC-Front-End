import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useFetch } from "../../hooks/useFetch";
import { PccServer23RecipesRecipeDto } from "../../lib/api/api";
import { useRecipesStore } from "../../stores/recipesStore";

export const RecipesPage = () => {
  const { recipes, setRecipes } = useRecipesStore();
  const [isNeededToReload, setIsNeededToReload] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  const { fetchData: deleteRecipe } = useFetch(
    "appCurriculumRecipesDelete",
    {},
  );
  const { isLoading, data, fetchData } = useFetch<{
    total: number;
    items: PccServer23RecipesRecipeDto[];
  }>("appCurriculumRecipesList", {}, undefined, true);

  const handleSelectionChange = (id: string, isSelected: boolean) => {
    setSelectedIds((prevIds) => {
      return [
        ...prevIds.filter((prevId) => prevId !== id),
        isSelected ? id : "",
      ].filter(Boolean);
    });
  };

  const handleDelete = useCallback(async () => {
    setIsDeleting(true);
    for (const id of selectedIds) {
      await deleteRecipe?.(id);
    }
    setIsNeededToReload(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);

  useEffect(() => {
    isNeededToReload && fetchData?.(undefined, undefined, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);

  useEffect(() => {
    if (data) {
      setRecipes(data.items);
      setIsNeededToReload(false);
      setIsDeleting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ContentListAdminPageTemplate
      title={"Recipe"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={recipes ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      isLoading={isDeleting || isLoading}
    />
  );
};
