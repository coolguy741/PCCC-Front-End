import { MathUtils, OrthographicCamera, Vector2 } from "three";
import {
  ConstantDampFunctionType,
  ConstantVoidFunctionType,
} from "../../../../../../shared/Types/DefineTypes";
import { CursorCameraCameraUpdatefunctionType } from "./CursorCameraTypes";

const cursorCameraMaxRotation = 2.5;
const cursorCameraMinRotation = -0.25;
const haltInterpolationThreshold = 0.0001;

const range: number = cursorCameraMaxRotation - cursorCameraMinRotation;
const fourthOfRange: number = range / 4;

const cursorCameraBreakpoint1: number = cursorCameraMinRotation + fourthOfRange;
const cursorCameraBreakpoint2: number =
  cursorCameraMinRotation + fourthOfRange * 2;
const cursorCameraBreakpoint3: number =
  cursorCameraMinRotation + fourthOfRange * 3;

const cursorCameraInitRotation: Vector2 = new Vector2();
const cursorCameraDampedRotation: Vector2 = new Vector2();
const cursorCameraFinalRotation: Vector2 = new Vector2();
const cursorCameraCopyCurrentRotation: Vector2 = new Vector2();

const handleUpdateCursorCameraFinalRotation: CursorCameraCameraUpdatefunctionType =
  (cursorCameraReference: OrthographicCamera): void => {
    cursorCameraReference.rotation.z = cursorCameraFinalRotation.x;
  };

const handleCursorCameraDampedRotation: ConstantDampFunctionType = (
  step: number,
  delta: number,
): void => {
  cursorCameraDampedRotation.x = MathUtils.damp(
    cursorCameraDampedRotation.x,
    cursorCameraInitRotation.x,
    step,
    delta,
  );
};

const handleCursorCameraFinalMenuRotation: ConstantVoidFunctionType =
  (): void => {
    cursorCameraFinalRotation.copy(cursorCameraDampedRotation);
  };

const handleHaltInterpolationCheck: CursorCameraCameraUpdatefunctionType = (
  cursorCameraReference: OrthographicCamera,
): void => {
  if (cursorCameraReference.rotation.z < haltInterpolationThreshold) {
    cursorCameraReference.rotation.z = 0;
  }
};

export {
  cursorCameraBreakpoint1,
  cursorCameraBreakpoint2,
  cursorCameraBreakpoint3,
  cursorCameraMaxRotation,
  cursorCameraMinRotation,
  cursorCameraInitRotation,
  cursorCameraFinalRotation,
  cursorCameraDampedRotation,
  handleHaltInterpolationCheck,
  cursorCameraCopyCurrentRotation,
  handleCursorCameraDampedRotation,
  handleCursorCameraFinalMenuRotation,
  handleUpdateCursorCameraFinalRotation,
};
