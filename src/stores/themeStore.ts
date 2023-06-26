import { create } from "zustand";

import { State as ComponentState } from "../components/ContentCreation/types";
import { Language, ThemeComponent } from "../pages/types";

interface IPage {
  tags?: string;
  curriculum?: string;
  slides: ThemeComponent[][];
}

interface ThemeProp {
  currentStep: number;
  currentLang: Language;
  slideIndex: number;
  theme: IPage[];
  currentSlide: ThemeComponent[];
  activityIds: string[];
  recipeIds: string[];
  en: {
    theme: IPage[];
  };
  fr: {
    theme: IPage[];
  };
}
interface State extends ThemeProp {
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
}

const initialState: ThemeProp = {
  currentStep: 0,
  slideIndex: 0,
  theme: [{ slides: [[]] }],
  currentLang: "en",
  currentSlide: [],
  activityIds: [],
  recipeIds: [],
  en: {
    theme: [],
  },
  fr: {
    theme: [],
  },
};

export const useThemeStore = create<State>()((set) => ({
  ...initialState,
  changeStep: (currentStep) =>
    set(({ theme }) => ({
      currentStep,
      theme:
        theme.length > currentStep ? [...theme] : [...theme, { slides: [[]] }],
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
    set(({ theme, slideIndex, currentStep }) => ({
      theme: theme.map((page, index) => {
        if (index === currentStep) {
          page.slides[slideIndex] = [...slide];
        }
        return page;
      }) ?? [{ slides: [slide] }],
    })),
  addSlide: () =>
    set(({ theme, currentStep }) => ({
      theme: [
        ...(theme.map((page, index) => {
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
    set(({ theme, slideIndex, currentStep }) => ({
      theme: [
        ...theme.map((page, index) => {
          if (index === currentStep) {
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
    set(({ theme }) => ({
      currentStep: 0,
      en: { theme },
      theme: [{ slides: [[]] }],
      currentLang: "fr",
    })),
  updatePageState: (sIndex, componentIndex, componentState) =>
    set(({ theme, currentStep }) => ({
      theme: theme.map((page, index) => {
        if (index === currentStep) {
          page.slides[sIndex][componentIndex].componentState = componentState;
        }
        return page;
      }),
    })),
  init: () => set(() => ({ ...initialState })),
}));
