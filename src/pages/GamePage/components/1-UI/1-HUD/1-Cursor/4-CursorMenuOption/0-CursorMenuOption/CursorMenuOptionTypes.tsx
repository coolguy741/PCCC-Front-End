import { Vector2 } from "three";
import { CursorMenuOptionTypes } from "../../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { MenuOptionStyleObjectType } from "./CursorMenuOptionDefines";

// Component
export interface CursorMenuOptionPropTypes {
  type: CursorMenuOptionTypes;
  label: string;
  iconURL?: string;
  animOffset: number;
  hoverTrigger: boolean;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
  styleObject: MenuOptionStyleObjectType;
}

// Logic

export interface UseCursorMenuOptionLogicPropTypes {
  animOffset: number;
  hoverTrigger: boolean;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
}

// Animations
export type AnimateCursorOptionsHoverType = (
  cursorMenuOptionElement: HTMLDivElement,
) => void;

export type AnimateCursorMenuOptionInType = (
  cursorMenuOptionElement: HTMLDivElement,
  cursorMenuOptionPositionFinal: Vector2,
  cursorMenuOptionPositionStart: Vector2,
  cursorMenuOptionPositionEnd: Vector2,
  onUpdate: () => void,
  animDelay: number,
  onComplete: () => void,
) => void;

export type AnimateCursorMenuOptionOutType = (
  cursorMenuOptionElement: HTMLDivElement,
  cursorMenuOptionPositionFinal: Vector2,
  cursorMenuOptionPositionStart: Vector2,
  cursorMenuOptionPositionEnd: Vector2,
  onUpdate: () => void,
  animDelay: number,
) => void;
