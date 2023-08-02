import { gsap } from "gsap";
import { Vector2 } from "three";
import {
  POWER_1_INOUT,
  POWER_3_INOUT,
} from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import {
  cursorCanvasDampStep,
  cursorCanvasToMenuOffset,
} from "./CursorCanvasConstants";
import {
  AnimateCursorCanvasToFollowPosition,
  AnimateCursorCanvasToMenuPositionType,
} from "./CursorCanvasTypes";

const animateCursorCanvasToMenuPosition: AnimateCursorCanvasToMenuPositionType =
  (
    affectedVector: Vector2,
    targetVector: Vector2,
    onComplete: ConstantVoidFunctionType,
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

const animateCursorCanvasToFollowPosition: AnimateCursorCanvasToFollowPosition =
  (step: Vector2): void => {
    gsap.to(step, {
      x: cursorCanvasDampStep,
      duration: 1,
      overwrite: true,
      ease: POWER_1_INOUT,
    });
  };

export {
  animateCursorCanvasToMenuPosition,
  animateCursorCanvasToFollowPosition,
};
