import { create } from "zustand";

import { Language, ThemeComponent } from "../pages/types";

type TSlide = ThemeComponent[];

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
  updateSlide: (slide: ThemeComponent[]) => void;
  updatePage: (slide: ThemeComponent[]) => void;
  setLang: (lang: Language) => void;
  setSlideIndex: (slideIndex: number) => void;
  init: () => void;
}

const initialState: ThemeProp = {
  currentStep: 0,
  slideIndex: 0,
  theme: [{ slides: [[]] }],
  currentLang: "en",
  currentSlide: [],
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
  setSlideIndex: (slideIndex) => set(() => ({ slideIndex })),
  updatePage: (slide) =>
    set(({ theme, slideIndex, currentStep }) => ({
      theme: theme.map((page, index) => {
        if (index === currentStep) {
          page.slides[slideIndex] = [...slide];
        }
        return page;
      }) ?? [{ slides: [slide] }],
    })),
  updateSlide: (slide) => set(() => ({ currentSlide: slide })),
  addSlide: () =>
    set(({ theme, currentStep }) => ({
      theme: theme.map((page, index) => {
        if (index === currentStep) {
          page.slides.push([]);
        }
        return page;
      }) ?? [{ slides: [] }],
    })),
  setLang: (currentLang: Language) =>
    set(() => ({
      currentLang,
    })),
  init: () => set(() => ({ ...initialState })),
}));
