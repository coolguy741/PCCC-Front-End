import { Vector2 } from "three";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../shared/Types/RefTypes";

// Animations
export type AnimateToolTipFunctionType = (
  toolTipElement: HTMLDivElement,
) => void;

export type AnimateToolTipMenuInFunctionType = (
  targetVector: Vector2,
  endPosition: Vector2,
  onComplete: ConstantVoidFunctionType,
) => void;

// Defines
export type HandleUpdateToolTipElementLocationFunctionType = (
  toolTipReference: HTMLDivElement,
) => void;

export type HandleDampToolTipLocationFunctionType = (delta: number) => void;

// Logic
export interface UseToolTipLogicReturnTypes {
  toolTipRef: RefDivType;
  activeHoveredEntity: string | null;
}

export type UseToolTipLogicFuntionType = () => UseToolTipLogicReturnTypes;
