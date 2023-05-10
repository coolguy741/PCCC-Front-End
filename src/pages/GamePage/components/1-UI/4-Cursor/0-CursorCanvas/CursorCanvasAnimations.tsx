import { gsap } from "gsap";
import { Vector2 } from "three";
import { POWER_1_INOUT, POWER_3_INOUT } from "../../../../shared/Eases/Eases";
import { RefNumberType } from "../../../../shared/Types/RefTypes";
import {
  cursorCanvasToMenuXOffset,
  cursorCanvasToMenuYOffset,
} from "./CursorCanvasDefines";

const animateCursorCanvasToMenuPosition = (
  affectedVector: Vector2,
  targetVector: Vector2,
  onComplete: () => void,
) => {
  gsap.to(affectedVector, {
    x: targetVector.x - cursorCanvasToMenuXOffset,
    y: targetVector.y - cursorCanvasToMenuYOffset,
    duration: 0.85,
    overwrite: true,
    ease: POWER_3_INOUT,
    onComplete: onComplete,
  });
};

const animateCursorCanvasToFollowPosition = (step: RefNumberType) => {
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
