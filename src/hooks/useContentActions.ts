import Cookies from "js-cookie";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useUIStore } from "./../stores/uiStore";

import {
  PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
  PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
} from "../lib/api/api";
import { STORAGE_KEY_JWT } from "../pages/consts";
import { ContentBuilderType, Language } from "../pages/types";
import {
  ContentBuilderStoreState,
  useActivitiesStore,
  useEducatorNotesStore,
  useRecipesStore,
  useThemeStore,
} from "../stores/contentBuilderStore";
import { useThemeBuilderStore } from "../stores/themeBuilderStore";
import { ThemeProperties } from "./../pages/types";
import { useAPI } from "./useAPI";

type DetailResponse =
  | PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
  | PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull
  | PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull;
type StoreState = ContentBuilderStoreState;

const makeResponse = (
  response: DetailResponse,
  id: string,
  currentLang: string,
) => {
  return {
    slides: JSON.parse(
      response[currentLang === Language.EN ? "english" : "french"]?.jsonData ||
        "{}",
    ),
    id,
    concurrencyStamp:
      response[currentLang === Language.EN ? "english" : "french"]
        ?.concurrencyStamp || "{}",
    en: {
      title: response.english?.title ?? "",
      topic: response.english?.topic ?? "",
      description: response.english?.description ?? "",
      jsonData: JSON.parse(response.english?.jsonData ?? ""),
    },
    fr: {
      title: response.french?.title ?? "",
      topic: response.french?.topic ?? "",
      description: response.french?.description ?? "",
      jsonData: JSON.parse(response.french?.jsonData ?? "[]"),
    },
  };
};

const makeRequestData = (store: StoreState, hasTags?: boolean) => {
  const data = {
    english: {
      ...store.en,
      jsonData: JSON.stringify(
        store.currentLang === Language.EN ? store.slides : store.en.jsonData,
      ),
    },
    french: {
      ...store.fr,
      jsonData: JSON.stringify(
        store.currentLang === Language.FR ? store.slides : store.fr.jsonData,
      ),
    },
    tags: store.tags?.join(","),
  };

  return hasTags ? { ...data, tags: store.tags?.join(",") } : data;
};

export const useContentActions = () => {
  const { api } = useAPI();
  const { item } = useParams();
  const educatorNotesStore = useEducatorNotesStore();
  const themeStore = useThemeStore();
  const activityStore = useActivitiesStore();
  const recipeStore = useRecipesStore();
  const themeBuilderStore = useThemeBuilderStore();
  const { lang: currentLang } = useUIStore();

  const header = {
    headers: {
      Authorization: `Bearer ${Cookies.get(STORAGE_KEY_JWT)}`,
    },
  };

  const getContent = useCallback(
    async (type: ContentBuilderType) => {
      if (!item) {
        return false;
      }

      let response: DetailResponse;

      switch (type) {
        case ContentBuilderType.THEMES:
          response = (await api
            .appThemesDetail(item)
            .then(
              (res) => res.data,
            )) as PccServer23SharedIMultiLingualDto1PccServer23ThemesPublicThemeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull;

          themeStore.updateDetail(makeResponse(response, item, currentLang));
          break;
        case ContentBuilderType.ACTIVITIES:
          response = (await api
            .appActivitiesDetail(item)
            .then(
              (res) => res.data,
            )) as PccServer23SharedIMultiLingualDto1PccServer23ActivitiesPublicActivityDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull;
          activityStore.updateDetail(makeResponse(response, item, currentLang));
          break;
        case ContentBuilderType.RECIPES:
          response = (await api
            .appCurriculumRecipesDetail(item)
            .then(
              (res) => res.data,
            )) as PccServer23SharedIMultiLingualDto1PccServer23CurriculumRecipesPublicCurriculumRecipeDtoPccServer23ApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull;
          recipeStore.updateDetail(makeResponse(response, item, currentLang));
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item, api, activityStore, recipeStore, themeStore, currentLang],
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
    async (type: ContentBuilderType, prop?: ThemeProperties) => {
      let data;
      switch (type) {
        case ContentBuilderType.THEMES:
          if (!prop) {
            data = makeRequestData(themeStore);

            return themeStore.id
              ? await api
                  .appThemesUpdate(
                    themeStore.id,
                    { ...data, concurrencyStamp: themeStore.concurrencyStamp },

                    header,
                  )
                  .then((res) => res.data)
              : await api
                  .appThemesNewThemeCreate(data, header)
                  .then((res) => res.data);
          }

          if (prop === ThemeProperties.EDUCATOR_NOTES) {
            const data = {
              themeId: themeStore.id ?? "",
              title: JSON.stringify(educatorNotesStore.slides),
              englishDesc: educatorNotesStore.en.title,
              frenchDesc: educatorNotesStore.en.title,
              curriculumId: themeBuilderStore.selectedCurriculum ?? "",
            };
            await api.appThemesEducatorNoteCreate(data, header);
          }
          break;
        case ContentBuilderType.ACTIVITIES:
          data = makeRequestData(activityStore, true);

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
          data = makeRequestData(recipeStore, true);

          return recipeStore.id
            ? await api
                .appCurriculumRecipesUpdate(
                  recipeStore.id,
                  { ...data, concurrencyStamp: recipeStore.concurrencyStamp },
                  header,
                )
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
