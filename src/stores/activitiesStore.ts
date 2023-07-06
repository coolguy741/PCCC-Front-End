import { create } from "zustand";

import { components } from "../components/ContentBuilder/Components/Cards";
import { State as ComponentState } from "../components/ContentCreation/types";
import { PccServer23ActivitiesActivityDto } from "../lib/api/api";
import { Language, ThemeComponent } from "../pages/types";

interface IContent {
  tags?: string;
  curriculum?: string;
  slides: ThemeComponent[][];
}

interface ThemeProp {
  id?: string;
  activities?: PccServer23ActivitiesActivityDto[] | null;
  maxPageCount: number;
  currentStep: number;
  currentLang: Language;
  slideIndex: number;
  contents: IContent[];
  currentSlide: ThemeComponent[];
  activityIds: string[];
  recipeIds: string[];
  en: {
    contents: IContent[];
  };
  fr: {
    contents: IContent[];
  };
}
export interface ActivitiesStoreState extends ThemeProp {
  changeStep: (step: number) => void;
  addSlide: () => void;
  updatePage: (slide: ThemeComponent[]) => void;
  updatePageState: (
    slideIndex: number,
    index: number,
    state: ComponentState,
  ) => void;
  setLang: (lang: Language) => void;
  setSlideIndex: (slideIndex: number) => void;
  setItemIds: (activityId: string) => void;
  removeItemId: (activityId: string) => void;
  init: () => void;
  deleteSlide: () => void;
  continueWithFrench: () => void;
  updateId: (id: string | undefined) => void;
  setActivities: (
    activities: PccServer23ActivitiesActivityDto[] | undefined | null,
  ) => void;
  getDetailId: (index: number) => string | undefined;
}

const initialState: ThemeProp = {
  maxPageCount: 1,
  currentStep: 0,
  slideIndex: 0,
  contents: [{ slides: [[components[0]]] }],
  currentLang: "en",
  currentSlide: [],
  activityIds: [],
  recipeIds: [],
  en: {
    contents: [],
  },
  fr: {
    contents: [],
  },
};

export const useActivitiesStore = create<ActivitiesStoreState>()(
  (set, get) => ({
    ...initialState,
    updateId: (id) => set(() => ({ id })),
    setActivities: (activities) => set(() => ({ activities })),
    changeStep: (currentStep) =>
      set(({ contents }) => ({
        currentStep,
        contents:
          contents.length > currentStep
            ? [...contents]
            : [...contents, { slides: [[]] }],
      })),
    setItemIds: (itemId) =>
      set(({ activityIds, recipeIds, currentStep }) => ({
        activityIds: currentStep === 4 ? [...activityIds, itemId] : activityIds,
        recipeIds: currentStep === 5 ? [...recipeIds, itemId] : recipeIds,
      })),
    removeItemId: (itemId) =>
      set(({ activityIds, recipeIds, currentStep }) => ({
        activityIds: [
          ...(currentStep === 4
            ? activityIds.filter((id) => id === itemId)
            : activityIds),
        ],
        recipeIds: [
          ...(currentStep === 5
            ? recipeIds.filter((id) => id === itemId)
            : recipeIds),
        ],
      })),
    setSlideIndex: (slideIndex) => set(() => ({ slideIndex })),
    updatePage: (slide: ThemeComponent[]) =>
      set(({ contents, slideIndex, currentStep }) => ({
        contents: contents.map((page, index) => {
          if (index === currentStep) {
            page.slides[slideIndex] = [...slide];
          }
          return page;
        }) ?? [{ slides: [slide] }],
      })),
    addSlide: () =>
      set(({ contents, currentStep }) => ({
        contents: [
          ...(contents.map((page, index) => {
            if (index === currentStep) {
              page.slides.push([]);
            }

            return { ...page };
          }) ?? [{ slides: [] }]),
        ],
      })),
    setLang: (currentLang: Language) =>
      set(() => ({
        currentLang,
      })),
    deleteSlide: () =>
      set(({ contents, slideIndex, currentStep }) => ({
        contents: [
          ...contents.map((page, index) => {
            if (index === currentStep && currentStep + slideIndex !== 0) {
              const slides = [
                ...page.slides.filter((slide, index) => index !== slideIndex),
              ];

              page.slides = [...slides];
            }
            return { ...page };
          }),
        ],
        slideIndex: slideIndex > 0 ? slideIndex - 1 : slideIndex,
      })),
    continueWithFrench: () =>
      set(({ contents }) => ({
        currentStep: 0,
        en: { contents },
        contents: [{ slides: [[components[0]]] }],
        currentLang: "fr",
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ contents, currentStep }) => ({
        contents: contents.map((page, index) => {
          if (index === currentStep) {
            page.slides[sIndex][componentIndex].componentState = componentState;
          }
          return page;
        }),
      })),
    getDetailId: (index: number) => get().activities?.[index - 1].id,
    init: () => set(() => ({ ...initialState })),
  }),
);
