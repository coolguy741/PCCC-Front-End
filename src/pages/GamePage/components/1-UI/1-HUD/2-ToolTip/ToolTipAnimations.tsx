import gsap from "gsap";
import { Vector2 } from "three";
import {
  BACK_1_OUT,
  POWER_1_INOUT,
  POWER_2_INOUT,
} from "../../../../shared/Eases/Eases";

const animateToolTipIn = (toolTipElement: HTMLDivElement): void => {
  gsap.fromTo(
    toolTipElement,
    {
      y: 15,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      delay: 0.1,
      duration: 0.25,
      overwrite: true,
      ease: BACK_1_OUT,
    },
  );
};

const animateToolTipOut = (toolTipElement: HTMLDivElement): void => {
  gsap.to(toolTipElement, {
    y: 15,
    opacity: 0,
    duration: 0.25,
    overwrite: true,
    ease: POWER_2_INOUT,
  });
};

const animateToolTipMenuIn = (
  targetVector: Vector2,
  endPosition: Vector2,
  onComplete: () => void,
): void => {
  gsap.to(targetVector, {
    x: endPosition.x,
    y: endPosition.y,
    overwrite: true,
    duration: 0.5,
    ease: POWER_1_INOUT,
    onComplete: onComplete,
  });
};

export { animateToolTipIn, animateToolTipOut, animateToolTipMenuIn };
