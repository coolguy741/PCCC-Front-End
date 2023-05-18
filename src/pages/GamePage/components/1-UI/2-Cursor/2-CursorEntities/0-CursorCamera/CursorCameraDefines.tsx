import { MathUtils, OrthographicCamera, Vector2 } from "three";

const cursorCameraMaxRotation = 1.5;
const cursorCameraMinRotation = -0.25;
const haltInterpolationThreshold = 0.0001;

const range: number = cursorCameraMaxRotation - cursorCameraMinRotation;
const thirdOfRange: number = range / 3;

const cursorCameraBreakpoint1: number = cursorCameraMinRotation + thirdOfRange;
const cursorCameraBreakpoint2: number =
  cursorCameraMinRotation + 2 * thirdOfRange;

const cursorCameraInitRotation: Vector2 = new Vector2();
const cursorCameraDampedRotation: Vector2 = new Vector2();
const cursorCameraFinalRotation: Vector2 = new Vector2();
const cursorCameraCopyCurrentRotation: Vector2 = new Vector2();

const handleUpdateCursorCameraFinalRotation = (
  cursorCameraReference: OrthographicCamera,
): void => {
  cursorCameraReference.rotation.z = cursorCameraFinalRotation.x;
};

const handleCursorCameraDampedRotation = (
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

const handleCursorCameraFinalMenuRotation = (): void => {
  cursorCameraFinalRotation.copy(cursorCameraDampedRotation);
};

const handleHaltInterpolationCheck = (
  cursorCameraReference: OrthographicCamera,
): void => {
  if (cursorCameraReference.rotation.z < haltInterpolationThreshold) {
    cursorCameraReference.rotation.z = 0;
  }
};

export {
  cursorCameraBreakpoint1,
  cursorCameraBreakpoint2,
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
