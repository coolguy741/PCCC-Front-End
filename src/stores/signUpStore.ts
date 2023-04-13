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
  over18: boolean;
  setOver18: (over18: boolean) => void;
  province: string;
  setProvince: (province: string) => void;
  birthYear: number | null;
  setBirthYear: (birthYear: number) => void;
  firstUserName: string;
  setFirstUserName: (firstUserName: string) => void;
  secondUserName: string;
  setSecondUserName: (secondUserName: string) => void;
  isCoordinator: boolean;
  setIsCoordinator: (isCoordinator: boolean) => void;
}

export const useSignUpStore = create<State>()((set) => ({
  currentStep: "age",
  changeStep: (step) => set(() => ({ currentStep: step })),

  over18: false,
  setOver18: (over18) => set(() => ({ over18: over18 })),

  province: "",
  setProvince: (province) => set(() => ({ province: province })),

  birthYear: null,
  setBirthYear: (birthYear) => set(() => ({ birthYear: birthYear })),

  firstUserName: "",
  setFirstUserName: (firstUserName) =>
    set(() => ({ firstUserName: firstUserName })),

  secondUserName: "",
  setSecondUserName: (secondUserName) =>
    set(() => ({ secondUserName: secondUserName })),

  isCoordinator: false,
  setIsCoordinator: (isCoordinator) =>
    set(() => ({ isCoordinator: isCoordinator })),
}));
