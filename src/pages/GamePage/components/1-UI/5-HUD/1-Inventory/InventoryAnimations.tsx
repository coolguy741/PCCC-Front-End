import { gsap } from "gsap";
import { BACK_1_OUT } from "../../../../shared/Eases/Eases";

const animateInventoryIn = (inventoryRef: HTMLDivElement) => {
  gsap.to(inventoryRef, {
    y: -675,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
    ease: BACK_1_OUT,
    overwrite: true,
  });
};

const animateInventoryOut = (inventoryRef: HTMLDivElement) => {
  gsap.to(inventoryRef, {
    y: 0,
    opacity: 0,
    duration: 0.5,
    ease: BACK_1_OUT,
    overwrite: true,
  });
};

export { animateInventoryIn, animateInventoryOut };
