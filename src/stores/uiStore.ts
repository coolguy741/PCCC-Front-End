import create from "zustand";

/**
 * Store for global UI element states.
 */

export const useUIStore = create<{
  showElement: boolean;
  setshowElement: (boolean: boolean) => void;
}>((set) => ({
  showElement: true,
  setshowElement: (boolean) => set({ showElement: boolean }),
}));
