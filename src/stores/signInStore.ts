import { create } from "zustand";

interface State {
  currentStep: number;
  changeStep: (step: number) => void;
}

export const useSignInStore = create<State>()((set) => ({
  currentStep: 0,
  changeStep: (step) => set(() => ({ currentStep: step })),
}));
