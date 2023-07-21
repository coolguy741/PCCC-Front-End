import { create } from "zustand";

import { Language } from "../pages/types";

/**
 * Store for global UI element states.
 */

export const useUIStore = create<{
  showElement: boolean;
  setshowElement: (boolean: boolean) => void;
  lang: Language;
  setLanguage: (language: Language) => void;
}>()((set) => ({
  showElement: true,
  setshowElement: (boolean) => set({ showElement: boolean }),
  lang: Language.EN,
  setLanguage: (lang: Language) => set({ lang }),
}));
