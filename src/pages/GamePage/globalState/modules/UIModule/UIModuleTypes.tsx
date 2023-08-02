import { Vector2 } from "three";

export type activeHoveredHudMenuOptionType =
  | "inventory"
  | "recipe_book"
  | "settings"
  | "achievements";

export type UIPhaseType = "Loader" | "Landing" | "SkinTonePicker" | "Game";

export type SkintToneType =
  | "skin-tone-one"
  | "skin-tone-two"
  | "skin-tone-three";

export interface UIModuleTypes {
  UIPhase: UIPhaseType;
  setUIPhase: (newUIPhase: UIPhaseType) => void;
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
  activeSkinTone: SkintToneType;
  setActiveSkinTone: (newActiveSkinTone: SkintToneType) => void;
}
