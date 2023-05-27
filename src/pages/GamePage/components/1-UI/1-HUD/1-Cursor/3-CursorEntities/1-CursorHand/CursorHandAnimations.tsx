import { gsap } from "gsap";
import { Mesh } from "three";
import { AnimateCursorHandScaleType } from "./CursorHandTypes";

const animateCursorHandScaleIn: AnimateCursorHandScaleType = (
  cursorHand: Mesh,
): void => {
  gsap.to(cursorHand.scale, {
    x: 0.8,
    y: 0.8,
    z: 0.8,
    duration: 0.15,
    overwrite: true,
  });
};

const animateCursorHandScaleOut: AnimateCursorHandScaleType = (
  cursorHand: Mesh,
): void => {
  gsap.to(cursorHand.scale, {
    x: 1,
    y: 1,
    z: 1,
    duration: 0.15,
    overwrite: true,
  });
};

export { animateCursorHandScaleIn, animateCursorHandScaleOut };
