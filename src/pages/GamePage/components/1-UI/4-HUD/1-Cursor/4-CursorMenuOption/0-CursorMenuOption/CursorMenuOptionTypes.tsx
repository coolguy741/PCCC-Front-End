import { Vector2 } from "three";
import { CursorMenuOptionTypes } from "../../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { ConstantVoidFunctionType } from "../../../../../../shared/Types/DefineTypes";
import {
  RefDivType,
  RefMeaseureType,
} from "../../../../../../shared/Types/RefTypes";
import { InspectActionTypes } from "../../../5-Inspect/7-InspectData/INSPECT_DATA";
import { MenuOptionStyleObjectType } from "./CursorMenuOptionDefines";

// Component
export interface CursorMenuOptionPropTypes {
  type: CursorMenuOptionTypes;
  label: string | InspectActionTypes;
  iconURL?: string;
  animOffset: number;
  offsetFactor: Vector2;
  hoverTrigger: boolean;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
  styleObject: MenuOptionStyleObjectType;
}

// Component Logic
export interface UseCursorMenuOptionLogicPropTypes {
  animOffset: number;
  hoverTrigger: boolean;
  offsetFactor: Vector2;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
}

export type UseCursorMenuOptionLogicReturnTypes = (
  props: UseCursorMenuOptionLogicPropTypes,
) => {
  cursorMenuOptionRef: RefDivType;
  cursorMenuOptionMeasureRef: RefMeaseureType;
};

// Animations
export type AnimateCursorOptionsHoverType = (
  cursorMenuOptionElement: HTMLDivElement,
) => void;

export type AnimateCursorMenuOptionInType = (
  cursorMenuOptionElement: HTMLDivElement,
  cursorMenuOptionPositionFinal: Vector2,
  cursorMenuOptionPositionStart: Vector2,
  cursorMenuOptionPositionEnd: Vector2,
  onUpdate: ConstantVoidFunctionType,
  animDelay: number,
  onComplete: ConstantVoidFunctionType,
) => void;

export type AnimateCursorMenuOptionOutType = (
  cursorMenuOptionElement: HTMLDivElement,
  cursorMenuOptionPositionFinal: Vector2,
  cursorMenuOptionPositionStart: Vector2,
  cursorMenuOptionPositionEnd: Vector2,
  onUpdate: ConstantVoidFunctionType,
  animDelay: number,
  onComplete: ConstantVoidFunctionType,
) => void;
