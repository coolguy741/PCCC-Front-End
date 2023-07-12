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

  const getContent = useCallback(
    async (type: ContentBuilderType) => {
      console.log(params);
      // const id = (
      //   type === ContentBuilderType.THEMES
      //     ? themeStore
      //     : type === ContentBuilderType.ACTIVITIES
      //     ? activityStore
      //     : recipeStore
      // ).getDetailId(1);
    },
    [api],
  );

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
      switch (type) {
        case ContentBuilderType.THEMES:
          return themeStore.id
            ? await api
                .appThemesUpdate(
                  themeStore.id,
                  {
                    english: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                    french: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                  },
                  header,
                )
                .then((res) => res.data)
            : await api
                .appThemesNewThemeCreate(
                  {
                    english: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                    french: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                  },
                  header,
                )
                .then((res) => res.data);
        case ContentBuilderType.ACTIVITIES:
          return activityStore.id
            ? await api
                .appActivitiesUpdate(
                  activityStore.id,
                  {
                    english: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                    french: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                    tags: "garden",
                  },
                  header,
                )
                .then((res) => res.data)
            : await api
                .appActivitiesCreate(
                  {
                    english: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                    french: {
                      name: "hello",
                      jsonData: JSON.stringify(themeStore.contents),
                    },
                    tags: "garden",
                  },
                  header,
                )
                .then((res) => res.data);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api],
  );

  return { getContent, saveContent, updateIdInStore };
};
