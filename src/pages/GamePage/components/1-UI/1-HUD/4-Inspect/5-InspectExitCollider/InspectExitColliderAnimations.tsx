import { gsap } from "gsap";
import { POWER_2_INOUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import {
  AnimateInspectExitColliderInType,
  AnimateInspectExitColliderOutType,
} from "./InspectExitColliderTypes";

const animateInspectExitColliderIn: AnimateInspectExitColliderInType = (
  inspectExitColliderElement: HTMLDivElement,
) => {
  gsap.to(inspectExitColliderElement, {
    opacity: 1,
    duration: 0.5,
    ease: POWER_2_INOUT,
    overwrite: true,
  });
};

const animateInspectExitColliderOut: AnimateInspectExitColliderOutType = (
  inspectExitColliderElement: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
) => {
  gsap.to(inspectExitColliderElement, {
    opacity: 0,
    duration: 0.5,
    ease: POWER_2_INOUT,
    overwrite: true,
    onComplete: onComplete,
  });
};

export { animateInspectExitColliderIn, animateInspectExitColliderOut };
