import { Vector2 } from "three";

export interface UIModuleTypes {
  windowSize: Vector2;
  cursorSize: Vector2;
  isCursorDown: boolean;
  cursorLocation: Vector2;
  windowResizeEventTrigger: number;
  setWindowResizeEventTrigger: () => void;
  setIsCursorDown: (isCursorDown: boolean) => void;
  activeHoveredHudMenuOption: null | string;
  setActiveHoveredHudMenuOption: (
    newHoveredHudMenuOption: string | null,
  ) => void;
}
