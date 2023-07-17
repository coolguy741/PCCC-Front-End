import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useFetch } from "../../hooks/useFetch";
import { PccServer23ActivitiesActivityDto } from "../../lib/api/api";
import { useActivitiesStore } from "../../stores/activitiesStore";

export const ActivitiesPage = () => {
  const { activities, setActivities } = useActivitiesStore();
  const [isNeededToReload, setIsNeededToReload] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { fetchData: deleteActivity } = useFetch("appActivitiesDelete", {});
  const { isLoading, data, fetchData } = useFetch<{
    total: number;
    items: PccServer23ActivitiesActivityDto[];
  }>("appActivitiesList", {}, undefined, true);

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
    isNeededToReload && fetchData?.(undefined, undefined, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);

  useEffect(() => {
    if (data) {
      setActivities(data.items);
      setIsNeededToReload(false);
      setIsDeleting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <ContentListAdminPageTemplate
      title={"Activity"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={activities ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
      isLoading={isLoading || isDeleting}
    />
  );
};
