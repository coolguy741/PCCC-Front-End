import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useFetch } from "../../hooks/useFetch";
import {
  PccServer23ActivitiesActivityDto,
  QueryParamsType,
} from "../../lib/api/api";
import { useActivitiesStore } from "../../stores/contentBuilderStore";

export const ActivitiesPage = () => {
  const { items, setItems } = useActivitiesStore();
  const [isNeededToReload, setIsNeededToReload] = useState(false);
  const [skipCount, setSkipCount] = useState(0);
  const [isReloadingByInfiniteScroll, setIsReloadingByInfiniteScroll] =
    useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [query, setQuery] = useState<QueryParamsType>();
  const [total, setTotal] = useState(0);

  const { fetchData: deleteActivity } = useFetch("appActivitiesDelete", {});
  const { isLoading, data, fetchData } = useFetch<{
    totalCount: number;
    items: PccServer23ActivitiesActivityDto[];
  }>("appActivitiesList", {}, { query: { ...(query ?? {}) } }, true);

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
      await deleteActivity?.(id);
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

  useEffect(() => {
    if (data) {
      setItems([
        ...(isReloadingByInfiniteScroll
          ? (items as PccServer23ActivitiesActivityDto[]) || []
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
      title={"Activity"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={items ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      isLoading={!isReloadingByInfiniteScroll && (isLoading || isDeleting)}
      handleSortChange={handleSortChange}
      total={total}
      getMoreItems={getMoreItems}
    />
  );
};
