import { create } from "zustand";

import { Language } from "../pages/types";

type Curriculum = {
  id: string;
  name: string;
};

interface ThemeProp {
  id?: string;
  concurrencyStamp?: string;
  currentStep: number;
  currentLang: Language;
  maxPageCount: number;
  curriculums?: Curriculum[];
  selectedCurriculum?: string;
  activityIds: string[];
  recipeIds: string[];
  tags?: string[];
}
export interface ThemeStoreState extends ThemeProp {
  setCurrentStep: (step: number) => void;
  setLang: (lang: Language) => void;
  init: () => void;
  continueWithFrench: () => void;
  updateId: (id: string | undefined) => void;
  setCurriculums: (curriculums: Curriculum[]) => void;
  setCurriculum: (selectedCurriculum: string) => void;
  setItemIds: (activityId: string) => void;
  removeItemId: (activityId: string) => void;
}

const initialState: ThemeProp = {
  currentStep: 0,
  maxPageCount: 5,
  currentLang: Language.EN,
  activityIds: [],
  recipeIds: [],
};

export const useThemeBuilderStore = create<ThemeStoreState>()((set, get) => ({
  ...initialState,
  updateId: (id) => set(() => ({ id })),
  setCurrentStep: (currentStep) => set(() => ({ currentStep })),
  setCurriculums: (curriculums) =>
    set(() => ({ curriculums, selectedCurriculum: curriculums?.[0].id })),
  setCurriculum: (selectedCurriculum) => set(() => ({ selectedCurriculum })),
  setLang: (currentLang: Language) => set(() => ({ currentLang })),
  continueWithFrench: () => set(() => ({ currentLang: Language.FR })),
  init: () => set(() => ({ ...initialState })),
  setItemIds: (itemId) =>
    set(({ activityIds, recipeIds, currentStep }) => ({
      activityIds: currentStep === 3 ? [...activityIds, itemId] : activityIds,
      recipeIds: currentStep === 4 ? [...recipeIds, itemId] : recipeIds,
    })),
  removeItemId: (itemId) =>
    set(({ activityIds, recipeIds, currentStep }) => ({
      activityIds: [
        ...(currentStep === 3
          ? activityIds.filter((id) => id !== itemId)
          : activityIds),
      ],
      recipeIds: [
        ...(currentStep === 4
          ? recipeIds.filter((id) => id !== itemId)
          : recipeIds),
      ],
    })),
}));
