import { create } from "zustand";

import { Language } from "../pages/types";

interface ISlide {
  tag?: string;
}

interface FoodwayProp {
  activeSlide: number;
  totalSlides: number;
  lang: Language;
}
interface State extends FoodwayProp {
  addFoodwaySlide: () => void;
  getFoodwaySlide?: (index: number) => void;
  setLang: (lang: Language) => void;
  setActiveSlide: (slide: number) => void;
  init: () => void;
  totalSlides: number;
}

const initialState: FoodwayProp = {
  activeSlide: 0,
  totalSlides: 1,
  lang: "en",
};

export const useFoodwayStore = create<State>()((set) => ({
  ...initialState,
  totalSlides: 1,
  setActiveSlide: (activeSlide) => set(() => ({ activeSlide })),
  setLang: (lang: Language) =>
    set(() => ({
      lang,
    })),
  init: () => set(() => ({ ...initialState })),
  addFoodwaySlide: () =>
    set((state) => ({ totalSlides: state.totalSlides + 1 })),
}));
