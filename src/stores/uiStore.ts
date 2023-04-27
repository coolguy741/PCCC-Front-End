import { create } from "zustand";

/**
 * Store for global UI element states.
 */

export const useUIStore = create<{
  showElement: boolean;
  setshowElement: (boolean: boolean) => void;
  language: string;
  setLanguage: (language: string) => void;
}>()((set) => ({
  showElement: true,
  setshowElement: (boolean) => set({ showElement: boolean }),
  language: "english",
  setLanguage: (language: string) => set({ language }),
}));
