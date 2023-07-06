import { create } from "zustand";

import { FoodwayStop, Language, ThemeComponent } from "../pages/types";

interface IContent {
  tags?: string;
  curriculum?: string;
  slides: FoodwayStop[];
}

interface ThemeProp {
  maxPageCount: number;
  currentStep: number;
  currentLang: Language;
  slideIndex: number;
  contents: IContent;
  currentSlide: ThemeComponent[];
  activityIds: string[];
  recipeIds: string[];
  en: {
    contents: IContent | null;
  };
  fr: {
    contents: IContent | null;
  };
}

export interface FoodwayStore extends ThemeProp {
  init: () => void;
  addFoodwaySlide: () => void;
  getFoodwaySlide?: (index: number) => void;
  setLang: (lang: Language) => void;
  activeSlide: number;
  setActiveSlide: (slide: number) => void;
  totalSlides: number;
  setTotalSlides: (totalSlides: number) => void;
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  stopTitle: string[] | undefined[];
  setStopTitle: (stopTitle: string[] | undefined[]) => void;
  stopDescription: string[] | undefined[];
  setStopDescription: (stopDescription: string[] | undefined[]) => void;
  stopTime: string[] | undefined[];
  setStopTime: (stopTime: string[] | undefined[]) => void;
  setContents: (
    stopTitle: string[] | undefined[],
    stopDescription: string[] | undefined[],
    stopTime: string[] | undefined[],
  ) => void;
}

const initialState: ThemeProp = {
  maxPageCount: 1,
  currentStep: 0,
  slideIndex: 0,
  contents: { slides: [] },
  currentLang: "en",
  currentSlide: [],
  activityIds: [],
  recipeIds: [],
  en: {
    contents: null,
  },
  fr: {
    contents: null,
  },
};

export const useFoodwayStore = create<FoodwayStore>()((set) => ({
  ...initialState,
  totalSlides: 1,
  activeSlide: 0,
  setActiveSlide: (activeSlide) => set(() => ({ activeSlide })),
  setLang: (currentLang: Language) =>
    set(() => ({
      currentLang,
    })),
  init: () => set(() => ({ ...initialState })),
  addFoodwaySlide: () =>
    set((state) => ({ totalSlides: state.totalSlides + 1 })),
  setTotalSlides: (totalSlides: number) =>
    set(() => ({ totalSlides: totalSlides })),
  title: "",
  description: "",
  setTitle: (title: string) => set(() => ({ title })),
  setDescription: (description: string) => set(() => ({ description })),
  stopTitle: [],
  setStopTitle: (stopTitle: string[] | undefined[]) =>
    set(({ stopTitle }) => ({
      stopTitle,
    })),
  stopDescription: [],
  setStopDescription: (stopDescription: string[] | undefined[]) =>
    set(({ stopDescription }) => ({
      stopDescription,
    })),
  stopTime: [],
  setStopTime: (stopTime: string[] | undefined[]) =>
    set(({ stopTime }) => ({
      stopTime,
    })),
  setContents: (
    stopTitle: string[] | undefined[],
    stopDescription: string[] | undefined[],
    stopTime: string[] | undefined[],
  ) =>
    set(() => ({
      contents: {
        slides: stopTitle.map(() => ({
          location: stopTitle,
          description: stopDescription,
          timePeriod: stopTime,
        })),
      },
    })),
}));
