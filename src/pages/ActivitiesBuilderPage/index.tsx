import Cookies from "js-cookie";
import { useEffect } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useAPI } from "../../hooks/useAPI";
import { useActivitiesStore } from "../../stores/activitiesStore";
import { STORAGE_KEY_JWT } from "../consts";

export const ActivitiesPage = () => {
  const { activities, setActivities } = useActivitiesStore();
  const { api } = useAPI();
  const handleSelectionChange = (id: string, isSelected: boolean) => {
    return;
  };
  useEffect(() => {
    api &&
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
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentListAdminPageTemplate
      title={"Activity"}
      selectsGroup={["Curriculum", "Topic", "Sort"]}
      listData={activities ?? []}
      onSelectionChange={handleSelectionChange}
    />
  );
};
