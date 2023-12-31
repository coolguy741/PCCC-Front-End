import { Vector2 } from "three";
import { Theme } from "../../../../styles/Snippets/Theme";
import { HUDMenuOptionDataType } from "./HUDMenuOptionTypes";

const InventoryHUDMenuOptionData: HUDMenuOptionDataType = {
  name: "inventory",
  label: "Inventory",
  animIconLanding: new Vector2(15, -15),
  iconURL: "/game_assets/ui_images/inventory/inventory.webp",
  styleObject: {
    "--hud-menu-option-bg-color": Theme.PCCCYellow,
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
    "--hud-menu-option-bg-color": Theme.PCCCRed,
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
    "--hud-menu-option-bg-color": Theme.PCCCBlue,
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

const AchievementsHUDMenuOptionData: HUDMenuOptionDataType = {
  name: "achievements",
  label: "Achievements",
  animIconLanding: new Vector2(15, 15),
  iconURL: "/game_assets/ui_images/goal_list/goal_list.webp",
  styleObject: {
    "--hud-menu-option-bg-color": Theme.PCCCGreen,
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
  SettingsHUDMenuOptionData,
  InventoryHUDMenuOptionData,
  RecipeBookHUDMenuOptionData,
  AchievementsHUDMenuOptionData,
};
