import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";

// Component Logic
export interface UseInspectExitColliderLogicReturnTypes {
  inspectExitColliderRef: RefDivType;
  handleExitInspect: ConstantVoidFunctionType;
}

export type UseInspectExitColliderLogicType =
  () => UseInspectExitColliderLogicReturnTypes;

// Animations
export type AnimateInspectExitColliderInType = (
  inspectExitColliderElement: HTMLDivElement,
) => void;

export type AnimateInspectExitColliderOutType = (
  inspectExitColliderElement: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
) => void;
