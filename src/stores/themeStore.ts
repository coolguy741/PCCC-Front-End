import { create } from "zustand";

import { Language, ThemeComponent } from "../pages/types";

interface ISlide {
  tag?: string;
  components: ThemeComponent[];
}

interface ThemeProp {
  currentStep: number;
  slide: number;
  lang: Language;
  theme: ISlide[];
  currentThemeSlide: ISlide;
  overview: ISlide[];
  educatorNotes: ISlide[];
}
interface State extends ThemeProp {
  changeStep: (step: number) => void;
  updateTheme: (index: number, slide: ISlide) => void;
  addThemeSlide: () => void;
  getThemeSlide: (index: number) => void;
  setLang: (lang: Language) => void;
  setSlide: (slide: number) => void;
  init: () => void;
}

const initialState: ThemeProp = {
  currentStep: 0,
  slide: 0,
  theme: [],
  lang: "en",
  currentThemeSlide: { components: [] },
  overview: [],
  educatorNotes: [],
};

export const useThemeStore = create<State>()((set) => ({
  ...initialState,
  changeStep: (step) => set(() => ({ currentStep: step })),
  setSlide: (slide) => set(() => ({ slide })),
  updateTheme: (index: number, slide: ISlide) =>
    set((state) => ({
      theme: state.theme.map((currentSlide, currentIndex) =>
        currentIndex === index ? slide : currentSlide,
      ),
    })),
  addThemeSlide: () =>
    set((state) => ({
      theme: [...state.theme, { components: [] }],
    })),
  getThemeSlide: (index: number) =>
    set((state) => ({
      currentThemeSlide: state.theme[index],
    })),
  setLang: (lang: Language) =>
    set(() => ({
      lang,
    })),
  init: () => set(() => ({ ...initialState })),
}));
