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
  birthMonth: number | undefined;
  setBirthMonth: (birthMonth: number) => void;
  birthDate: number | undefined;
  setBirthDate: (birthDate: number) => void;
  email: string;
  setEmail: (email: string) => void;
  name: string;
  setName: (name: string) => void;
  title: string;
  setTitle: (title: string) => void;
  schoolIdCode: string;
  setSchoolIdCode: (schoolIdCode: string) => void;
  firstUsername: string;
  setFirstUsername: (firstUsername: string) => void;
  secondUsername: string;
  setSecondUsername: (secondUsername: string) => void;
  thirdUsername: string;
  setThirdUsername: (thirdUsername: string) => void;
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

  birthMonth: undefined,
  setBirthMonth: (birthMonth) => set(() => ({ birthMonth: birthMonth })),

  birthDate: undefined,
  setBirthDate: (birthDate) => set(() => ({ birthDate: birthDate })),

  email: "",
  setEmail: (email) => set(() => ({ email: email })),

  name: "",
  setName: (name) => set(() => ({ name: name })),

  title: "",
  setTitle: (title) => set(() => ({ title: title })),

  schoolIdCode: "",
  setSchoolIdCode: (schoolIdCode) =>
    set(() => ({ schoolIdCode: schoolIdCode })),

  firstUsername: "",
  setFirstUsername: (firstUsername) =>
    set(() => ({ firstUsername: firstUsername })),

  secondUsername: "",
  setSecondUsername: (secondUsername) =>
    set(() => ({ secondUsername: secondUsername })),

  thirdUsername: "",
  setThirdUsername: (thirdUsername) =>
    set(() => ({ thirdUsername: thirdUsername })),

  isCoordinator: null,
  setIsCoordinator: (isCoordinator) =>
    set(() => ({ isCoordinator: isCoordinator })),

  schoolId: "",
  setSchoolId: (schoolId) => set(() => ({ schoolId: schoolId })),

  schoolName: "",
  setSchoolName: (schoolName) => set(() => ({ schoolName: schoolName })),
}));
