import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";

// Component Logic
export interface UseInspectLogicReturnTypes {
  inspectModalRef: RefDivType;
}

export type UseInspectLogicType = () => UseInspectLogicReturnTypes;

// Animations
export type AnimateInspectModalInType = (
  inspectModalElement: HTMLDivElement,
) => void;

export type AnimateInspectModalOutType = (
  inspectModalElement: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
) => void;
