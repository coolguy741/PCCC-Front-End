import { gsap } from "gsap";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";

const animCCCButton = (
  element: HTMLButtonElement,
  scale: number,
  rotation: number,
) => {
  gsap.to(element, {
    scale: scale,
    overwrite: true,
    ease: BACK_1_OUT,
    rotate: rotation,
  });
};

export { animCCCButton };
