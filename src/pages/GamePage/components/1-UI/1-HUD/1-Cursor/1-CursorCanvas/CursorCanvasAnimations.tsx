import { gsap } from "gsap";
import { Vector2 } from "three";
import {
  POWER_1_INOUT,
  POWER_3_INOUT,
} from "../../../../../shared/Eases/Eases";
import { RefNumberType } from "../../../../../shared/Types/RefTypes";
import { cursorCanvasToMenuOffset } from "./CursorCanvasDefines";

const animateCursorCanvasToMenuPosition = (
  affectedVector: Vector2,
  targetVector: Vector2,
  onComplete: () => void,
): void => {
  gsap.to(affectedVector, {
    x: targetVector.x - cursorCanvasToMenuOffset.x,
    y: targetVector.y - cursorCanvasToMenuOffset.y,
    duration: 0.85,
    overwrite: true,
    ease: POWER_3_INOUT,
    onComplete: onComplete,
  });
};

const animateCursorCanvasToFollowPosition = (step: RefNumberType): void => {
  gsap.to(step, {
    current: 0.01,
    duration: 1,
    overwrite: true,
    ease: POWER_1_INOUT,
  });
};

export {
  animateCursorCanvasToMenuPosition,
  animateCursorCanvasToFollowPosition,
};
