import { useCallback, useEffect, useState } from "react";
import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useFetch } from "../../hooks/useFetch";
import {
  PccServer23MealtimeMomentsMealtimeMomentDto,
  QueryParamsType,
} from "../../lib/api/api";
import { useMealtimeMomentsStore } from "../../stores/mealtimeMomentsStore";

export const MealtimeMomentsPage = () => {
  const { items, setItems } = useMealtimeMomentsStore();
  const [isNeededToReload, setIsNeededToReload] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [query, setQuery] = useState<QueryParamsType>();
  const [total, setTotal] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [skipCount, setSkipCount] = useState(0);
  const [isReloadingByInfiniteScroll, setIsReloadingByInfiniteScroll] =
    useState(false);

  const { fetchData: deleteActivity } = useFetch(
    "appMealtimeMomentsDelete",
    {},
  );
  const { isLoading, data, fetchData } = useFetch<{
    totalCount: number;
    items: PccServer23MealtimeMomentsMealtimeMomentDto[];
  }>("appMealtimeMomentsList", {}, { query: { ...(query ?? {}) } }, true);

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
    setSkipCount(0);
    setSelectedIds([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds, setSkipCount]);

  useEffect(() => {
    isNeededToReload &&
      fetchData?.(undefined, { query: { ...(query ?? {}) } }, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);

  useEffect(() => {
    if (data) {
      setItems([
        ...(isReloadingByInfiniteScroll
          ? (items as PccServer23MealtimeMomentsMealtimeMomentDto[]) || []
          : []),
        ...data.items,
      ]);
      isReloadingByInfiniteScroll && setIsReloadingByInfiniteScroll(false);
      setIsNeededToReload(false);
      setIsDeleting(false);
      setTotal(data.totalCount);
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
      title={"Mealtime Moments"}
      selectsGroup={["Sort"]}
      listData={items}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      handleSortChange={handleSortChange}
      getMoreItems={getMoreItems}
      total={total}
      isLoading={isLoading || isDeleting}
    />
  );
};
