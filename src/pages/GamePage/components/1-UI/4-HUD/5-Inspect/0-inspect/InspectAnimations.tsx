import { gsap } from "gsap";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import {
  AnimateInspectModalInType,
  AnimateInspectModalOutType,
} from "./InspectTypes";

const animateInspectModalIn: AnimateInspectModalInType = (
  inspectModalElement: HTMLDivElement,
) => {
  gsap.fromTo(
    inspectModalElement,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      delay: 0.3,
      ease: BACK_1_OUT,
    },
  );
};

const animateInspectModalOut: AnimateInspectModalOutType = (
  inspectModalElement: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
) => {
  gsap.to(inspectModalElement, {
    opacity: 0,
    y: 20,
    ease: BACK_1_OUT,
    onComplete: onComplete,
  });
};

export { animateInspectModalIn, animateInspectModalOut };
