import { create } from "zustand";

interface State {
  currentStep: number;
  changeStep: (step: number) => void;
  mealsPerDay: number | undefined;
  changeMealsPerDay: (mealsPerDay: number) => void;
  childrenCount: number | undefined;
  changeChildrenCount: (childrenCount: number) => void;
  dates: [Date, Date] | null;
  changeDates: (dates: [Date, Date]) => void;
}

export const useMealPlannerStore = create<State>()((set) => ({
  currentStep: 0,
  changeStep: (step) => set(() => ({ currentStep: step })),
  mealsPerDay: undefined,
  changeMealsPerDay: (mealsPerDay) => set(() => ({ mealsPerDay })),
  childrenCount: undefined,
  changeChildrenCount: (childrenCount) => set(() => ({ childrenCount })),
  dates: null,
  changeDates: (dates) => set(() => ({ dates })),
}));
