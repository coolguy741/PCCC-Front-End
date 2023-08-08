import { create } from "zustand";

interface State {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const useSignInStore = create<State>()((set) => ({
  currentStep: 0,
  setCurrentStep: (step) => set(() => ({ currentStep: step })),
}));
