import Cookies from "js-cookie";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  PccServer23ActivitiesActivityDto,
  PccServer23CurriculumRecipesCurriculumRecipeDto,
  PccServer23ThemesThemeDto,
} from "../lib/api/api";

import { STORAGE_KEY_JWT } from "../pages/consts";
import { ContentBuilderType } from "../pages/types";
import { useActivitiesStore } from "../stores/activitiesStore";
import { useRecipesStore } from "../stores/recipesStore";
import { useThemeStore } from "../stores/themeStore";
import { useAPI } from "./useAPI";

export const useContentActions = () => {
  const { api } = useAPI();
  const { item } = useParams();
  const themeStore = useThemeStore();
  const activityStore = useActivitiesStore();
  const recipeStore = useRecipesStore();
  const header = {
    headers: {
      Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
    },
  };
  const currentLang = localStorage.getItem("lang") ?? "en";

  const getContent = useCallback(
    async (type: ContentBuilderType) => {
      if (!item) {
        return false;
      }

      let response:
        | PccServer23ThemesThemeDto
        | PccServer23ActivitiesActivityDto
        | PccServer23CurriculumRecipesCurriculumRecipeDto;

      switch (type) {
        case ContentBuilderType.THEMES:
          response = await api.appThemesDetail(item).then((res) => res.data);
          // themeStore.updateDetail(JSON.parse(response?.jsonData ?? ""));
          break;
        case ContentBuilderType.ACTIVITIES:
          response = await api
            .appActivitiesDetail(item)
            .then((res) => res.data);
          activityStore.updateDetail({
            contents: JSON.parse(response?.jsonData ?? ""),
            id: item,
            concurrencyStamp: response.concurrencyStamp ?? "",
            [currentLang]: {
              title: response.title,
              description: response.description,
              topic: response.topic,
            },
          });
          break;
        case ContentBuilderType.RECIPES:
          response = await api
            .appCurriculumRecipesDetail(item)
            .then((res) => res.data);
          recipeStore.updateDetail(JSON.parse(response?.jsonData ?? ""));
          recipeStore.updateId(item);
          break;
      }
    },
    [item, api, activityStore, recipeStore, currentLang],
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
                .appThemesNewThemeCreate(
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
              name: "activity",
              jsonData: JSON.stringify(
                activityStore.currentLang === "en"
                  ? activityStore.contents
                  : activityStore.en.jsonData,
              ),
            },
            french: {
              ...activityStore.fr,
              name: "activity",
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
                .appActivitiesUpdate(
                  activityStore.id,
                  { ...data, concurrencyStamp: activityStore.concurrencyStamp },
                  header,
                )
                .then((res) => res.data)
            : await api
                .appActivitiesCreate(data, header)
                .then((res) => res.data);
        case ContentBuilderType.RECIPES:
          data = {
            english: {
              ...recipeStore.en,
              jsonData: JSON.stringify(
                recipeStore.currentLang === "en"
                  ? recipeStore.contents
                  : recipeStore.en.jsonData,
              ),
            },
            french: {
              ...recipeStore.fr,
              jsonData: JSON.stringify(
                recipeStore.currentLang === "fr"
                  ? recipeStore.contents
                  : recipeStore.fr.jsonData,
              ),
            },
            tags: recipeStore.tags?.join(","),
          };
          return recipeStore.id
            ? await api
                .appCurriculumRecipesUpdate(recipeStore.id, data, header)
                .then((res) => res.data)
            : await api
                .appCurriculumRecipesCreate(data, header)
                .then((res) => res.data);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [api],
  );

  return { getContent, saveContent, updateIdInStore };
};
