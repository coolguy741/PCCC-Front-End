export const STORAGE_KEY_PREFIX = "PCCC_";
export const STORAGE_KEY_JWT = STORAGE_KEY_PREFIX + "TOKEN";
export const MENUS = [
  { label: "Home", to: "/dashboard", icon: "home" },
  { label: "Accounts", to: "accounts", icon: "user" },
  {
    label: "User Tools",
    icon: "tool",
    subMenus: [
      { label: "Calendar", to: "calendar", icon: "calendar" },
      { label: "Meal Planner", to: "meal-planner", icon: "meal-planner" },
    ],
  },
  {
    label: "Content Builder",
    icon: "content-builder",
    subMenus: [
      { label: "Topics", to: "topic", icon: "topic" },
      { label: "Activities", to: "activities", icon: "activities" },
      { label: "Recipes", to: "recipes", icon: "recipe" },
      {
        label: "Meal Time Moments Editor",
        to: "mealtime-moments",
        icon: "meal-time",
      },
      { label: "Foodways", to: "foodways", icon: "foodways" },
    ],
  },
  { label: "Games", to: "games", icon: "game" },
  { label: "Reports", to: "reports", icon: "reports" },
  { label: "Cloud drive", to: "cloud-drive", icon: "cloud" },
];
