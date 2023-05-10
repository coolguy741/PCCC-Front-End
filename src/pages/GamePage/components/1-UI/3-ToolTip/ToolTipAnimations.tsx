import gsap from "gsap";
import { Vector2 } from "three";
import { POWER_1_INOUT } from "../../../shared/Eases/Eases";

const animateToolTipIn = (toolTipElement: HTMLDivElement): void => {
  gsap.to(toolTipElement, {
    y: 0,
    delay: 0.1,
    opacity: 1,
    duration: 0.15,
    overwrite: true,
  });
};

const animateToolTipOut = (toolTipElement: HTMLDivElement): void => {
  gsap.to(toolTipElement, {
    y: 15,
    opacity: 0,
    duration: 0.15,
    overwrite: true,
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
