import { create } from "zustand";

export const useCloudDriveStore = create<{
  type: "documents" | "video" | "images" | "audio";
  setType: (type: "documents" | "video" | "images" | "audio") => void;
}>()((set) => ({
  type: "images",
  setType: (type) => set({ type }),
}));

// Imperative function to get store state
export const getCloudDriveStore = () => useCloudDriveStore.getState();
