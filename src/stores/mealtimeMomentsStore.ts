import { create } from "zustand";

import { Language } from "../pages/types";

interface IContent {
  tags?: string;
  curriculum?: string;
}

interface ThemeProp {
  maxPageCount: number;
  currentLang: Language;
  contents: IContent;
  en: {
    contents: IContent | null;
  };
  fr: {
    contents: IContent | null;
  };
}

export interface MealtimeMomentsStore extends ThemeProp {
  init: () => void;
  setLang: (lang: Language) => void;
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

const initialState: ThemeProp = {
  maxPageCount: 1,
  contents: {},
  currentLang: "en",
  en: {
    contents: null,
  },
  fr: {
    contents: null,
  },
};

export const useMealtimeMomentsStore = create<MealtimeMomentsStore>()(
  (set) => ({
    ...initialState,
    setLang: (currentLang: Language) =>
      set(() => ({
        currentLang,
      })),
    init: () => set(() => ({ ...initialState })),
    title: "",
    description: "",
    setTitle: (title: string) => set(() => ({ title })),
    setDescription: (description: string) => set(() => ({ description })),
  }),
);
