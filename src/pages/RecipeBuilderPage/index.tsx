import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useFetch } from "../../hooks/useFetch";
import {
  PccServer23RecipesRecipeDto,
  QueryParamsType,
} from "../../lib/api/api";
import { useRecipesStore } from "../../stores/contentBuilderStore";

export const RecipesPage = () => {
  const { items, setItems } = useRecipesStore();
  const [isNeededToReload, setIsNeededToReload] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [query, setQuery] = useState<QueryParamsType>();

  const { fetchData: deleteRecipe } = useFetch(
    "appCurriculumRecipesDelete",
    {},
  );
  const { isLoading, data, fetchData } = useFetch<{
    total: number;
    items: PccServer23RecipesRecipeDto[];
  }>("appCurriculumRecipesList", {}, { query: { ...(query ?? {}) } }, true);

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
    isNeededToReload &&
      fetchData?.(undefined, { query: { ...(query ?? {}) } }, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);

  useEffect(() => {
    if (data) {
      setItems(data.items);
      setIsNeededToReload(false);
      setIsDeleting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    query && setIsNeededToReload(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSortChange = (value: string) => {
    setQuery({
      ...query,
      Sorting: value,
    });
  };

  return (
    <ContentListAdminPageTemplate
      title={"Recipe"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={items ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      handleSortChange={handleSortChange}
      isLoading={isDeleting || isLoading}
    />
  );
};
