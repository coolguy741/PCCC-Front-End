import { create } from "zustand";

export type StepsForSignUp =
  | "age"
  | "role"
  | "confirm-role"
  | "input-information"
  | "input-account"
  | "input-password";

interface State {
  currentStep: StepsForSignUp;
  changeStep: (step: StepsForSignUp) => void;
}

export const useSignUpStore = create<State>()((set) => ({
  currentStep: "age",
  changeStep: (step) => set(() => ({ currentStep: step })),
}));
