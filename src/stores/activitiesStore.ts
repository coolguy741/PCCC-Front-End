import { create } from "zustand";
import { Language } from "./../pages/types";

import { components } from "../components/ContentBuilder/Components/Cards";
import { State as ComponentState } from "../components/ContentCreation/types";
import { PccServer23ActivitiesActivityDto } from "../lib/api/api";
import { ThemeComponent } from "../pages/types";

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
  tags?: string[];
  en: {
    name?: string;
    title?: string;
    topic?: string;
    description?: string;
    jsonData: IContent[];
  };
  fr: {
    name?: string;
    title?: string;
    topic?: string;
    description?: string;
    jsonData: IContent[];
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
    jsonData: [],
  },
  fr: {
    jsonData: [],
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
    setLang: (newLang: Language) =>
      set(({ contents, currentLang, ...state }) => {
        state[newLang].jsonData = contents;
        state.currentStep = 0;
        state.slideIndex = 0;
        return {
          ...state,
          contents: state[currentLang].jsonData.length
            ? state[currentLang].jsonData
            : [{ slides: [[components[0]]] }],
          currentLang: newLang,
        };
      }),
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
        en: { jsonData: contents },
        contents: [{ slides: [[components[0]]] }],
        currentLang: "fr",
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ contents, currentStep, currentLang, ...state }) => ({
        contents: contents.map((page, index) => {
          if (!sIndex && !index) {
            state[currentLang].title = state[currentLang].title =
              componentState.heading.text;
            state[currentLang].description = componentState.desc.text;
            state[currentLang].topic = componentState.tag.text;
          }
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
