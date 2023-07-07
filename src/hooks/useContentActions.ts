import Cookies from "js-cookie";
import { useCallback } from "react";
import { useParams } from "react-router-dom";

import { STORAGE_KEY_JWT } from "../pages/consts";
import { ContentBuilderType } from "../pages/types";
import { useActivitiesStore } from "../stores/activitiesStore";
import { useRecipesStore } from "../stores/recipesStore";
import { useThemeStore } from "../stores/themeStore";
import { useAPI } from "./useAPI";

export const useContentActions = () => {
  const { api } = useAPI();
  const params = useParams();
  const themeStore = useThemeStore();
  const activityStore = useActivitiesStore();
  const recipeStore = useRecipesStore();
  const header = {
    headers: {
      Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
    },
  };

  const getContent = useCallback(async (type: ContentBuilderType) => {
    const { item } = params as { item: string };
    let response;
    switch (type) {
      case ContentBuilderType.THEMES:
        response = await api.appThemesDetail(item).then((res) => res.data);
        break;
      case ContentBuilderType.ACTIVITIES:
        response = await api.appActivitiesDetail(item).then((res) => res.data);
        break;
      case ContentBuilderType.RECIPES:
        response = await api.appRecipesDetail(item).then((res) => res.data);
        break;
    }
    console.log(response);
    // const id = (
    //   type === ContentBuilderType.THEMES
    //     ? themeStore
    //     : type === ContentBuilderType.ACTIVITIES
    //     ? activityStore
    //     : recipeStore
    // ).getDetailId(1);
  }, []);

  const updateIdInStore = (
    id: string | undefined,
    type: ContentBuilderType,
  ) => {
    (type === ContentBuilderType.THEMES
      ? themeStore
      : type === ContentBuilderType.ACTIVITIES
      ? activityStore
      : recipeStore
    ).updateId(id);
  };

  const saveContent = useCallback(
    async (type: ContentBuilderType) => {
      let data;
      switch (type) {
        case ContentBuilderType.THEMES:
          return themeStore.id
            ? await api
                .appThemesUpdate(
                  themeStore.id,
                  {
                    english: {
                      ...themeStore.en,
                      jsonData: JSON.stringify(themeStore.en.jsonData),
                    },
                    french: {
                      ...themeStore.fr,
                      jsonData: JSON.stringify(themeStore.fr.jsonData),
                    },
                    tags: themeStore.tags?.join(","),
                  },
                  header,
                )
                .then((res) => res.data)
            : await api
                .appThemesCreate(
                  {
                    english: {
                      ...themeStore.en,
                      jsonData: JSON.stringify(themeStore.en.jsonData),
                    },
                    french: {
                      ...themeStore.fr,
                      jsonData: JSON.stringify(themeStore.fr.jsonData),
                    },
                    tags: themeStore.tags?.join(","),
                  },
                  header,
                )
                .then((res) => res.data);
        case ContentBuilderType.ACTIVITIES:
          data = {
            english: {
              ...activityStore.en,
              jsonData: JSON.stringify(
                activityStore.currentLang === "en"
                  ? activityStore.contents
                  : activityStore.en.jsonData,
              ),
            },
            french: {
              ...activityStore.fr,
              jsonData: JSON.stringify(
                activityStore.currentLang === "fr"
                  ? activityStore.contents
                  : activityStore.fr.jsonData,
              ),
            },
            tags: activityStore.tags?.join(","),
          };
          return activityStore.id
            ? await api
                .appActivitiesUpdate(activityStore.id, data, header)
                .then((res) => res.data)
            : await api
                .appActivitiesCreate(data, header)
                .then((res) => res.data);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api],
  );

  return { getContent, saveContent, updateIdInStore };
};
