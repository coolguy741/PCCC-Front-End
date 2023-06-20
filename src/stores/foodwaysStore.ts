import { create } from "zustand";

import { Language } from "../pages/types";

interface ISlide {
  tag?: string;
}

interface FoodwayProp {
  currentStep: number;
  slide: number;
  lang: Language;
}
interface State extends FoodwayProp {
  changeStep: (step: number) => void;
  addFoodwaySlide: () => void;
  getFoodwaySlide?: (index: number) => void;
  setLang: (lang: Language) => void;
  setSlide: (slide: number) => void;
  init: () => void;
}

const initialState: FoodwayProp = {
  currentStep: 0,
  slide: 0,
  lang: "en",
};

export const useFoodwayStore = create<State>()((set) => ({
  ...initialState,
  changeStep: (step) => set(() => ({ currentStep: step })),
  setSlide: (slide) => set(() => ({ slide })),
  setLang: (lang: Language) =>
    set(() => ({
      lang,
    })),
  init: () => set(() => ({ ...initialState })),
  addFoodwaySlide: () => set((state) => ({ slide: state.slide + 1 })),
}));
