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
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { fetchData: deleteActivity } = useFetch(
    "appMealtimeMomentsDelete",
    {},
  );
  const { isLoading, data, fetchData } = useFetch<{
    total: number;
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
      title={"Mealtime Moments"}
      selectsGroup={["Sort"]}
      listData={items}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      handleSortChange={handleSortChange}
      isLoading={isLoading || isDeleting}
    />
  );
};
