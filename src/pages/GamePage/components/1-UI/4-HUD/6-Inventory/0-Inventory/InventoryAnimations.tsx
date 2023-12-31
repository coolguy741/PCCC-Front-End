import { gsap } from "gsap";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";

const animateInventoryIn = (
  inventoryRef: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
): void => {
  gsap.to(inventoryRef, {
    y: -400,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    ease: BACK_1_OUT,
    overwrite: true,
    onComplete: onComplete,
  });
};

const animateInventoryOut = (
  inventoryRef: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
): void => {
  gsap.to(inventoryRef, {
    y: 0,
    opacity: 0,
    duration: 0.5,
    ease: BACK_1_OUT,
    overwrite: true,
    onComplete: onComplete,
  });
};

export { animateInventoryIn, animateInventoryOut };
