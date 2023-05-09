import { CSSProperties } from "react";
import { MathUtils, Vector2 } from "three";
import { DampVector2 } from "../../../../shared/Utility/UtilityFunctions";

const cursorCanvasCenterXOffset = 35;
const cursorCanvasCenterYOffset = 20;
const cursorCanvasToMenuXOffset = 50;
const cursorCanvasToMenuYOffset = 70;
const cursorCanvasDampedFollowLocationStep = 0.01;

const cursorCanvasFollowLocation: Vector2 = new Vector2();
const cursorCanvasFinalFollowLocation: Vector2 = new Vector2();
const cursorCanvasDampedFollowLocation: Vector2 = new Vector2();
const cursorCanvasTempCopyCurrentLocation: Vector2 = new Vector2();
const cursorCanvasStyles: CSSProperties = { pointerEvents: "none" };

const devicePixelRatio: number = MathUtils.clamp(window.devicePixelRatio, 1, 2);

const handleSetCursorCanvasLocation = (event: MouseEvent): void => {
  cursorCanvasFollowLocation.set(
    event.clientX - cursorCanvasCenterXOffset,
    event.clientY - cursorCanvasCenterYOffset,
  );
};

const handleDampCursorCanvasLocation = (delta: number, step: number): void => {
  DampVector2(
    cursorCanvasDampedFollowLocation,
    cursorCanvasFollowLocation,
    step,
    delta,
  );
};

const handleUpdateCursorCanvasFinalLocation = (): void => {
  cursorCanvasFinalFollowLocation.copy(cursorCanvasDampedFollowLocation);
};

const handleUpdateCursorCanvasElementLocation = (
  cursorCanvasReference: HTMLCanvasElement,
): void => {
  cursorCanvasReference.style.left = `${cursorCanvasFinalFollowLocation.x}px`;
  cursorCanvasReference.style.top = `${cursorCanvasFinalFollowLocation.y}px`;
};

export {
  devicePixelRatio,
  cursorCanvasStyles,
  cursorCanvasCenterXOffset,
  cursorCanvasCenterYOffset,
  cursorCanvasToMenuXOffset,
  cursorCanvasToMenuYOffset,
  cursorCanvasFollowLocation,
  handleSetCursorCanvasLocation,
  handleDampCursorCanvasLocation,
  cursorCanvasFinalFollowLocation,
  cursorCanvasDampedFollowLocation,
  cursorCanvasTempCopyCurrentLocation,
  cursorCanvasDampedFollowLocationStep,
  handleUpdateCursorCanvasFinalLocation,
  handleUpdateCursorCanvasElementLocation,
};
