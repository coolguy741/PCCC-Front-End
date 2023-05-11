import { Vector2 } from "three";

export interface UIModuleTypes {
  windowSize: Vector2;
  isCursorDown: boolean;
  cursorLocation: Vector2;
  setIsCursorDown: (isCursorDown: boolean) => void;
}
