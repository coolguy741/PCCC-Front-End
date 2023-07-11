import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useAPI } from "../../hooks/useAPI";
import { useActivitiesStore } from "../../stores/activitiesStore";
import { STORAGE_KEY_JWT } from "../consts";

export const ActivitiesPage = () => {
  const { activities, setActivities } = useActivitiesStore();
  const [isDeleted, setIsDeleted] = useState(true);
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
      await api.appActivitiesDelete(id, {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });
    }
    setIsDeleted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);

  useEffect(() => {
    api &&
      isDeleted &&
      (async () => {
        const activities = await api
          .appActivitiesList(
            {},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
            },
          )
          .then((res) => res.data);
        setActivities(activities.items);
        setIsDeleted(false);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeleted]);

  return (
    <ContentListAdminPageTemplate
      title={"Activity"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={activities ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
    />
  );
};
