import { DayRange } from "@amir04lm26/react-modern-calendar-date-picker";
import { create } from "zustand";
import { PccServer23MealPlansOrganizedMealPlan } from "../lib/api/api";
import { Filter } from "../pages/types";

export interface Time {
  value: string;
  label: string;
  selected?: boolean;
}

interface State {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  mealsPerDay: number | undefined;
  changeMealsPerDay: (mealsPerDay: number) => void;
  childrenCount: number | undefined;
  changeChildrenCount: (childrenCount: number) => void;
  dates: DayRange | null;
  changeDates: (dates: DayRange) => void;
  filters: Filter[];
  selectedFilters: Filter[] | null;
  daysOfWeek: string[];
  addDayOfWeek: (dayOfWeek: string) => void;
  removeDayOfWeek: (dayOfWeek: string) => void;
  changeSelectedFilters: (selectedFilters: Filter[]) => void;
  times: Time[];
  changeTimes: (times: Time[]) => void;
  meals: PccServer23MealPlansOrganizedMealPlan[];
  setMeals: (meals: PccServer23MealPlansOrganizedMealPlan[]) => void;
}

export const useMealPlannerStore = create<State>()((set) => ({
  currentStep: 0,
  setCurrentStep: (step) => set(() => ({ currentStep: step })),
  mealsPerDay: undefined,
  changeMealsPerDay: (mealsPerDay) => set(() => ({ mealsPerDay })),
  childrenCount: undefined,
  changeChildrenCount: (childrenCount) => set(() => ({ childrenCount })),
  daysOfWeek: ["monday", "tuesday", "wednesday", "thursday", "friday"],
  addDayOfWeek: (dayOfWeek) =>
    set((state) => ({
      daysOfWeek: [...state.daysOfWeek, dayOfWeek],
    })),
  removeDayOfWeek: (dayOfWeek) =>
    set((state) => ({
      daysOfWeek: state.daysOfWeek.filter((day) => day !== dayOfWeek),
    })),
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
  times: [
    {
      value: "07:00",
      label: "7:00 AM",
      selected: false,
    },
    {
      value: "10:00",
      label: "10:00 AM",
      selected: false,
    },
    {
      value: "12:00",
      label: "12:00 PM",
      selected: false,
    },
    {
      value: "15:00",
      label: "3:00 PM",
      selected: false,
    },
    {
      value: "18:00",
      label: "6:00 PM",
      selected: false,
    },
  ],
  changeTimes: (times) => set(() => ({ times })),
  meals: [],
  setMeals: (meals) => set(() => ({ meals })),
}));
