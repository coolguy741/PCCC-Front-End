import { create } from "zustand";

interface SignupProp {
  currentStep: number;
  over18: boolean;
  province: string;
  birthYear: number | undefined;
  birthMonth: number | undefined;
  birthDate: number | undefined;
  email: string;
  name: string;
  title: string;
  schoolIdCode: string;
  firstUsername: string;
  secondUsername: string;
  thirdUsername: string;
  isCoordinator: boolean | null;
  schoolId: string;
  schoolName: string;
  avatar: string;
}
interface State extends SignupProp {
  setCurrentStep: (step: number) => void;
  setOver18: (over18: boolean) => void;
  setProvince: (province: string) => void;
  setBirthYear: (birthYear: number) => void;
  setBirthMonth: (birthMonth: number) => void;
  setBirthDate: (birthDate: number) => void;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setTitle: (title: string) => void;
  setSchoolIdCode: (schoolIdCode: string) => void;
  setFirstUsername: (firstUsername: string) => void;
  setSecondUsername: (secondUsername: string) => void;
  setThirdUsername: (thirdUsername: string) => void;
  setIsCoordinator: (isCoordinator: boolean | null) => void;
  setSchoolId: (schoolId: string) => void;
  setSchoolName: (schoolName: string) => void;
  setAvatar: (avatar: string) => void;
  init: () => void;
}

const initialState: SignupProp = {
  currentStep: 0,
  over18: false,
  province: "",
  birthYear: undefined,
  birthMonth: undefined,
  birthDate: undefined,
  email: "",
  name: "",
  title: "",
  schoolIdCode: "",
  firstUsername: "Awesome",
  secondUsername: "Apple",
  thirdUsername: "",
  isCoordinator: null,
  schoolId: "",
  schoolName: "",
  avatar: "",
};

export const useSignUpStore = create<State>()((set) => ({
  ...initialState,
  setCurrentStep: (step) => set(() => ({ currentStep: step })),
  setOver18: (over18) => set(() => ({ over18: over18 })),
  setProvince: (province) => set(() => ({ province: province })),
  setBirthYear: (birthYear) => set(() => ({ birthYear: birthYear })),
  setBirthMonth: (birthMonth) => set(() => ({ birthMonth: birthMonth })),
  setBirthDate: (birthDate) => set(() => ({ birthDate: birthDate })),
  setEmail: (email) => set(() => ({ email: email })),
  setName: (name) => set(() => ({ name: name })),
  setTitle: (title) => set(() => ({ title: title })),
  setSchoolIdCode: (schoolIdCode) =>
    set(() => ({ schoolIdCode: schoolIdCode })),
  setFirstUsername: (firstUsername) =>
    set(() => ({ firstUsername: firstUsername })),
  setSecondUsername: (secondUsername) =>
    set(() => ({ secondUsername: secondUsername })),
  setThirdUsername: (thirdUsername) =>
    set(() => ({ thirdUsername: thirdUsername })),
  setIsCoordinator: (isCoordinator) =>
    set(() => ({ isCoordinator: isCoordinator })),
  setSchoolId: (schoolId) => set(() => ({ schoolId: schoolId })),
  setSchoolName: (schoolName) => set(() => ({ schoolName: schoolName })),
  setAvatar: (avatar) => set(() => ({ avatar: avatar })),
  init: () => set(() => ({ ...initialState })),
}));
