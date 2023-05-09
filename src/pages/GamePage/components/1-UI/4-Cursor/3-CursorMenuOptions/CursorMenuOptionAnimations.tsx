import gsap from "gsap";
import { BACK_1_OUT } from "../../../../shared/Eases/Eases";

const animateCursorOptionsIn = (optionElement: HTMLDivElement) => {
  gsap.to(optionElement, {
    scale: 0.95,
    opacity: 1,
    overwrite: true,
    duration: 0.5,
    ease: BACK_1_OUT,
  });
};

const animateCursorOptionsOut = (optionElement: HTMLDivElement) => {
  gsap.to(optionElement, {
    scale: 0,
    opacity: 0,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorOptionsHoverIn = (optionElement: HTMLDivElement) => {
  gsap.to(optionElement, {
    scale: 1,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorOptionsHoverOut = (optionElement: HTMLDivElement) => {
  gsap.to(optionElement, {
    scale: 0.9,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorToMenuLocation = (
  optionElement: HTMLDivElement,
  targetX: number,
  targetY: number,
) => {
  gsap.to(optionElement, {
    x: targetX,
    y: targetY,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorToCenterLocation = (
  optionElement: HTMLDivElement,
  targetX: number,
  targetY: number,
) => {
  gsap.to(optionElement, {
    x: targetX,
    y: targetY,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

export {
  animateCursorOptionsIn,
  animateCursorOptionsOut,
  animateCursorOptionsHoverIn,
  animateCursorToMenuLocation,
  animateCursorOptionsHoverOut,
  animateCursorToCenterLocation,
};
