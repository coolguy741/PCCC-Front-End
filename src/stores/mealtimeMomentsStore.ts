import { create } from "zustand";

import { CCFormat, State } from "../components/ContentCreation/types";
import { Language } from "../pages/types";

interface ThemeProp {
  id?: string;
  currentLang: Language;
  image?: string;
  tags?: string;
  concurrencyStamp?: string;
  en: {
    title?: string;
    topic?: string;
    description?: string;
    componentState?: State;
  };
  fr: {
    title?: string;
    topic?: string;
    description?: string;
    componentState?: State;
  };
}

export interface MealtimeMomentsStore extends ThemeProp {
  init: () => void;
  setLang: (lang: Language) => void;
  setTitle: (title: string) => void;
  setTopic: (topic: string) => void;
  setDescription: (description: string) => void;
  updatePageState: (slideIndex: number, index: number, state: State) => void;
}

const initialState: ThemeProp = {
  id: undefined,
  currentLang: Language.EN,
  en: {},
  fr: {},
};

export const useMealtimeMomentsStore = create<MealtimeMomentsStore>()(
  (set) => ({
    ...initialState,
    setLang: (currentLang: Language) =>
      set(() => ({
        currentLang,
      })),
    init: () => set(() => ({ ...initialState })),
    setTitle: (title: string) =>
      set(({ currentLang, ...state }) => ({
        [currentLang]: { ...state[currentLang], title },
      })),
    setTopic: (topic: string) =>
      set(({ currentLang, ...state }) => ({
        [currentLang]: { ...state[currentLang], topic },
      })),
    setDescription: (description: string) =>
      set(({ currentLang, ...state }) => ({
        [currentLang]: { ...state[currentLang], description },
      })),
    updatePageState: (sIndex, componentIndex, componentState) =>
      set(({ currentLang, ...state }) => {
        if (!sIndex) {
          state[currentLang].title = (
            componentState as Record<string, CCFormat>
          ).heading.text;
          state[currentLang].description = (
            componentState as Record<string, CCFormat>
          ).desc.text;
          state[currentLang].componentState = componentState;
        }
        return { ...state };
      }),
  }),
);
