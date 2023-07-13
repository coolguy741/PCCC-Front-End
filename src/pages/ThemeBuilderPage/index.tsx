import Cookies from "js-cookie";
import { useCallback, useEffect, useState } from "react";

import { ContentListAdminPageTemplate } from "../../components/Global/ContentListAdminPageTemplate";
import { useAPI } from "../../hooks/useAPI";
import { useThemeStore } from "../../stores/themeStore";
import { STORAGE_KEY_JWT } from "../consts";

export const Themes = () => {
  const { api } = useAPI();
  const { themes, setThemes } = useThemeStore();
  const [isNeededToReload, setIsNeededToReload] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSelectionChange = (id: string, isSelected: boolean) => {
    setSelectedIds((prevIds) => {
      return [
        ...prevIds.filter((prevId) => prevId !== id),
        isSelected ? id : "",
      ].filter(Boolean);
    });
  };
  useEffect(() => {
    api &&
      isNeededToReload &&
      (async () => {
        const response = await api
          .appThemesList(
            {},
            {
              headers: {
                Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
              },
            },
          )
          .then((res) => res.data);
        setThemes(response.items);
        setIsNeededToReload(false);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNeededToReload]);

  const handleDelete = useCallback(async () => {
    for (const id of selectedIds) {
      await api.appThemesDelete(id, {
        headers: {
          Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
        },
      });
    }
    setIsNeededToReload(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIds]);

  return (
    <ContentListAdminPageTemplate
      title={"Themes"}
      selectsGroup={["Theme", "Sort"]}
      listData={themes ?? []}
      onSelectionChange={handleSelectionChange}
      handleDelete={handleDelete}
    />
  );
};
