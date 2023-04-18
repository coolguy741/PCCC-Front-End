import { create } from "zustand";

export type StepsForSignIn =
  | "login"
  | "security"
  | "password-reset"
  | "incorrect-security"
  | "educator-recovery";

interface State {
  currentStep: StepsForSignIn;
  changeStep: (step: StepsForSignIn) => void;
}

export const useSignInStore = create<State>()((set) => ({
  currentStep: "login",
  changeStep: (step) => set(() => ({ currentStep: step })),
}));
