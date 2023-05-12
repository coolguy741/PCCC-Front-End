import { DayRange } from "@amir04lm26/react-modern-calendar-date-picker";
import { create } from "zustand";
import { Filter } from "../pages/types";

interface State {
  currentStep: number;
  changeStep: (step: number) => void;
  mealsPerDay: number | undefined;
  changeMealsPerDay: (mealsPerDay: number) => void;
  childrenCount: number | undefined;
  changeChildrenCount: (childrenCount: number) => void;
  dates: DayRange | null;
  changeDates: (dates: DayRange) => void;
  filters: Filter[];
  selectedFilters: Filter[] | null;
  changeSelectedFilters: (selectedFilters: Filter[]) => void;
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
  filters: [
    { id: 1, label: "Eat well approved", value: "eat-well" },
    { id: 2, label: "No cook", value: "no-cook" },
    { id: 3, label: "Celebrations", value: "celebrations" },
    { id: 4, label: "Pantry items only", value: "pantry-items" },
    { id: 5, label: "Gluten free", value: "gluten-free" },
    { id: 6, label: "Diary free", value: "diary-free" },
    { id: 7, label: "Nut free", value: "nut-free" },
    { id: 8, label: "Peanut free", value: "peanut-free" },
    { id: 9, label: "Fish&shellfish work", value: "fish-free" },
    { id: 10, label: "Egg free", value: "egg-free" },
  ],
  selectedFilters: null,
  changeSelectedFilters: (selectedFilters) => set(() => ({ selectedFilters })),
}));
