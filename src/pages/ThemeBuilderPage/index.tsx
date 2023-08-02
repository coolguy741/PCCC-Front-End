import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useFetch } from "../../hooks/useFetch";
import { PccServer23ThemesThemeDto, QueryParamsType } from "../../lib/api/api";
import { useThemeStore } from "../../stores/contentBuilderStore";

export const Themes = () => {
  const { items, setItems } = useThemeStore();
  const [isNeededToReload, setIsNeededToReload] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [query, setQuery] = useState<QueryParamsType>();

  const { fetchData: deleteTheme } = useFetch("appThemesDelete", {});
  const { isLoading, data, fetchData } = useFetch<{
    total: number;
    items: PccServer23ThemesThemeDto[];
  }>("appThemesList", {}, { query: { ...(query ?? {}) } }, true);

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
      await deleteTheme?.(id);
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
      title={"Themes"}
      selectsGroup={["Theme", "Sort"]}
      listData={items ?? []}
      onSelectionChange={handleSelectionChange}
      handleSortChange={handleSortChange}
      handleDelete={handleDelete}
      isLoading={isDeleting || isLoading}
    />
  );
};
