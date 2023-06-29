import { Menu } from "./types";

export const STORAGE_KEY_PREFIX = "PCCC_";
export const STORAGE_KEY_JWT = STORAGE_KEY_PREFIX + "TOKEN";
export const WEEK_DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
export const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Northwest Territories",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];
export const MENUS: Menu[] = [
  { label: "Home", to: "/dashboard", icon: "home" },
  { label: "Manage Users", to: "accounts", icon: "user", auth: true },
  {
    label: "Build Content",
    icon: "content-builder",
    to: "content-builder",

    subMenus: [
      { label: "Themes", to: "themes", icon: "topic", auth: true },
      { label: "Activities", to: "activities", icon: "activities" },
      { label: "Recipes", to: "recipes", icon: "recipe" },
      { label: "Foodways", to: "foodways", icon: "foodways" },
      {
        label: "Mealtime Moments",
        to: "mealtime-moments",
        icon: "meal-time",
      },
    ],
  },
  { label: "Games", to: "games", icon: "game" },
  {
    label: "Planning Tools",
    to: "user-tools",
    icon: "tool",
    auth: true,
    subMenus: [
      { label: "Calendar", to: "calendar", icon: "calendar" },
      {
        label: "Plate Full Planner",
        to: "plate-full-planner",
        icon: "meal-planner",
      },
    ],
  },
  { label: "Reports", to: "reports", icon: "reports" },
  { label: "Cloud drive", to: "cloud-drive", icon: "cloud", auth: true },
];
