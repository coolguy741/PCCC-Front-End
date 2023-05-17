import { Vector2 } from "three";

interface HUDMenuOptionStyleObjectType {
  "--hud-menu-option-top": string;
  "--hud-menu-option-left": string;
  "--hud-menu-option-scale": string;
  "--hud-menu-option-right": string;
  "--hud-menu-option-bottom": string;
  "--hud-menu-option-bg-color": string;
  "--hud-menu-option-position": string;
  "--hud-menu-option-bg-scale": string;
  "--hud-menu-option-icon-scale": string;
  "--hud-menu-option-border-radius": string;
  "--hud-menu-option-bg-top-offset": string;
  "--hud-menu-option-bg-left-offset": string;
  "--hud-menu-option-bg-right-offset": string;
  "--hud-menu-option-icon-margin-top": string;
  "--hud-menu-option-bg-bottom-offset": string;
  "--hud-menu-option-icon-margin-left": string;
  "--hud-menu-option-icon-margin-right": string;
  "--hud-menu-option-icon-margin-bottom": string;
}

export interface HUDMenuOptionDataType {
  name: string;
  label: string;
  iconURL: string;
  animIconLanding: Vector2;
  styleObject: HUDMenuOptionStyleObjectType;
}

const InventoryHUDMenuOptionData: HUDMenuOptionDataType = {
  name: "inventory",
  label: "Inventory",
  animIconLanding: new Vector2(15, -15),
  iconURL: "/game_assets/ui_images/inventory/inventory.webp",
  styleObject: {
    "--hud-menu-option-bg-color": "#ffcd00",
    "--hud-menu-option-position": "fixed",
    "--hud-menu-option-left": "0",
    "--hud-menu-option-right": "auto",
    "--hud-menu-option-top": "auto",
    "--hud-menu-option-bottom": "0",
    "--hud-menu-option-scale": "14rem",
    "--hud-menu-option-bg-scale": "10rem",
    "--hud-menu-option-bg-left-offset": "-5rem",
    "--hud-menu-option-bg-right-offset": "auto",
    "--hud-menu-option-bg-top-offset": "auto",
    "--hud-menu-option-bg-bottom-offset": "-5rem",
    "--hud-menu-option-icon-scale": "8rem",
    "--hud-menu-option-icon-margin-left": "1.75rem",
    "--hud-menu-option-icon-margin-right": "0",
    "--hud-menu-option-icon-margin-top": "0",
    "--hud-menu-option-icon-margin-bottom": "1.75rem",
    "--hud-menu-option-border-radius": "0 100% 0 0",
  },
};

const RecipeBookHUDMenuOptionData: HUDMenuOptionDataType = {
  name: "recipe_book",
  label: "Recipe Book",
  animIconLanding: new Vector2(-15, -15),
  iconURL: "/game_assets/ui_images/recipe_book/recipe_book.webp",
  styleObject: {
    "--hud-menu-option-bg-color": "#F65321",
    "--hud-menu-option-position": "fixed",
    "--hud-menu-option-left": "auto",
    "--hud-menu-option-right": "0",
    "--hud-menu-option-top": "auto",
    "--hud-menu-option-bottom": "0",
    "--hud-menu-option-scale": "14rem",
    "--hud-menu-option-bg-scale": "10rem",
    "--hud-menu-option-bg-left-offset": "auto",
    "--hud-menu-option-bg-right-offset": "-5rem",
    "--hud-menu-option-bg-top-offset": "auto",
    "--hud-menu-option-bg-bottom-offset": "-5rem",
    "--hud-menu-option-icon-scale": "7rem",
    "--hud-menu-option-icon-margin-left": "0",
    "--hud-menu-option-icon-margin-right": "1.75rem",
    "--hud-menu-option-icon-margin-top": "0",
    "--hud-menu-option-icon-margin-bottom": "1.75rem",
    "--hud-menu-option-border-radius": "100% 0 0 0",
  },
};

const SettingsHUDMenuOptionData: HUDMenuOptionDataType = {
  name: "settings",
  label: "Settings",
  animIconLanding: new Vector2(-15, 15),
  iconURL: "/game_assets/ui_images/settings/settings.webp",
  styleObject: {
    "--hud-menu-option-bg-color": "#0084D5",
    "--hud-menu-option-position": "fixed",
    "--hud-menu-option-left": "auto",
    "--hud-menu-option-right": "0",
    "--hud-menu-option-top": "0",
    "--hud-menu-option-bottom": "auto",
    "--hud-menu-option-scale": "14rem",
    "--hud-menu-option-bg-scale": "10rem",
    "--hud-menu-option-bg-left-offset": "auto",
    "--hud-menu-option-bg-right-offset": "-5rem",
    "--hud-menu-option-bg-top-offset": "-5rem",
    "--hud-menu-option-bg-bottom-offset": "auto",
    "--hud-menu-option-icon-scale": "7rem",
    "--hud-menu-option-icon-margin-left": "0",
    "--hud-menu-option-icon-margin-right": "1.75rem",
    "--hud-menu-option-icon-margin-top": "1.75rem",
    "--hud-menu-option-icon-margin-bottom": "0",
    "--hud-menu-option-border-radius": "0 0 0 100%",
  },
};

const GoalListHUDMenuOptionData: HUDMenuOptionDataType = {
  name: "goal_list",
  label: "Goal List",
  animIconLanding: new Vector2(15, 15),
  iconURL: "/game_assets/ui_images/goal_list/goal_list.webp",
  styleObject: {
    "--hud-menu-option-bg-color": "#26D07C",
    "--hud-menu-option-position": "fixed",
    "--hud-menu-option-left": "0",
    "--hud-menu-option-right": "auto",
    "--hud-menu-option-top": "0",
    "--hud-menu-option-bottom": "auto",
    "--hud-menu-option-scale": "14rem",
    "--hud-menu-option-bg-scale": "10rem",
    "--hud-menu-option-bg-left-offset": "-5rem",
    "--hud-menu-option-bg-right-offset": "auto",
    "--hud-menu-option-bg-top-offset": "-5rem",
    "--hud-menu-option-bg-bottom-offset": "auto",
    "--hud-menu-option-icon-scale": "7rem",
    "--hud-menu-option-icon-margin-left": "2.25rem",
    "--hud-menu-option-icon-margin-right": "0",
    "--hud-menu-option-icon-margin-top": "2.25rem",
    "--hud-menu-option-icon-margin-bottom": "0",
    "--hud-menu-option-border-radius": "0 0 100% 0",
  },
};

export {
  GoalListHUDMenuOptionData,
  SettingsHUDMenuOptionData,
  InventoryHUDMenuOptionData,
  RecipeBookHUDMenuOptionData,
};
