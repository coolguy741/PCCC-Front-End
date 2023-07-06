import Cookies from "js-cookie";
import { useEffect } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useAPI } from "../../hooks/useAPI";
import mockData from "../../lib/mockData/activities/activities.json";
import { STORAGE_KEY_JWT } from "../consts";

export const Themes = () => {
  const { api } = useAPI();
  const handleSelectionChange = (id: number, isSelected: boolean) => {
    return;
  };
  useEffect(() => {
    api &&
      (async () => {
        const themes = await api
          .appThemesList(
            {},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
            },
          )
          .then((res) => res.data);
      })();
  }, [api]);

  return (
    <ContentListAdminPageTemplate
      title={"Themes"}
      selectsGroup={["Theme", "Sort"]}
      listData={mockData.activities}
      onSelectionChange={handleSelectionChange}
    />
  );
};
