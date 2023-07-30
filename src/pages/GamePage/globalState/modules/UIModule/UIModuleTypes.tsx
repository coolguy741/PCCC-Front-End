import { Vector2 } from "three";

export type activeHoveredHudMenuOptionType =
  | "inventory"
  | "recipe_book"
  | "settings"
  | "achievements";

export interface UIModuleTypes {
  windowSize: Vector2;
  cursorSize: Vector2;
  isCursorDown: boolean;
  cursorLocation: Vector2;
  windowResizeEventTrigger: number;
  setWindowResizeEventTrigger: () => void;
  setIsCursorDown: (isCursorDown: boolean) => void;
  activeHoveredHudMenuOption: activeHoveredHudMenuOptionType | null;
  setActiveHoveredHudMenuOption: (
    newHoveredHudMenuOption: activeHoveredHudMenuOptionType | null,
  ) => void;
}
