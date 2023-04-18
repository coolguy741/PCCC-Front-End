import { create } from "zustand";

interface State {
  currentStep: number;
  changeStep: (step: number) => void;
  over18: boolean;
  setOver18: (over18: boolean) => void;
  province: string;
  setProvince: (province: string) => void;
  birthYear: number | undefined;
  setBirthYear: (birthYear: number) => void;
  firstUserName: string;
  setFirstUserName: (firstUserName: string) => void;
  secondUserName: string;
  setSecondUserName: (secondUserName: string) => void;
  thirdUserName: string;
  setThirdUserName: (thirdUserName: string) => void;
  isCoordinator: boolean | null;
  setIsCoordinator: (isCoordinator: boolean | null) => void;
  schoolId: string;
  setSchoolId: (schoolId: string) => void;
  schoolName: string;
  setSchoolName: (schoolName: string) => void;
}

export const useSignUpStore = create<State>()((set) => ({
  currentStep: 0,
  changeStep: (step) => set(() => ({ currentStep: step })),

  over18: false,
  setOver18: (over18) => set(() => ({ over18: over18 })),

  province: "",
  setProvince: (province) => set(() => ({ province: province })),

  birthYear: undefined,
  setBirthYear: (birthYear) => set(() => ({ birthYear: birthYear })),

  firstUserName: "",
  setFirstUserName: (firstUserName) =>
    set(() => ({ firstUserName: firstUserName })),

  secondUserName: "",
  setSecondUserName: (secondUserName) =>
    set(() => ({ secondUserName: secondUserName })),

  thirdUserName: "",
  setThirdUserName: (thirdUserName) =>
    set(() => ({ thirdUserName: thirdUserName })),

  isCoordinator: null,
  setIsCoordinator: (isCoordinator) =>
    set(() => ({ isCoordinator: isCoordinator })),

  schoolId: "",
  setSchoolId: (schoolId) => set(() => ({ schoolId: schoolId })),

  schoolName: "",
  setSchoolName: (schoolName) => set(() => ({ schoolName: schoolName })),
}));
