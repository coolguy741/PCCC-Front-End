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
  const [total, setTotal] = useState(0);
  const [skipCount, setSkipCount] = useState(0);
  const [isReloadingByInfiniteScroll, setIsReloadingByInfiniteScroll] =
    useState(false);

  const { fetchData: deleteRecipe } = useFetch(
    "appCurriculumRecipesDelete",
    {},
  );
  const { isLoading, data, fetchData } = useFetch<{
    totalCount: number;
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
    setSelectedIds([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);

  useEffect(() => {
    isNeededToReload &&
      fetchData?.(undefined, { query: { ...(query ?? {}) } }, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);

  useEffect(() => {
    if (data) {
      setItems([
        ...(isReloadingByInfiniteScroll
          ? (items as PccServer23RecipesRecipeDto[]) || []
          : []),
        ...data.items,
      ]);
      isReloadingByInfiniteScroll && setIsReloadingByInfiniteScroll(false);
      setIsNeededToReload(false);
      setTotal(data.totalCount);
      setIsDeleting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    query && setIsNeededToReload(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setQuery({
      ...query,
      SkipCount: skipCount,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipCount]);

  const handleSortChange = (value: string) => {
    setQuery({
      ...query,
      Sorting: value,
    });
  };

  const getMoreItems = () => {
    setSkipCount((prev) => prev + 10);
    setIsReloadingByInfiniteScroll(true);
  };

  return (
    <ContentListAdminPageTemplate
      title={"Recipe"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={items ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      handleSortChange={handleSortChange}
      total={total}
      getMoreItems={getMoreItems}
      isLoading={isDeleting || isLoading}
    />
  );
};
