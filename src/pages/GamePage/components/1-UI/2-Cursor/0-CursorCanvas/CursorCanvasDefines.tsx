import { CSSProperties } from "react";
import { Vector2 } from "three";
import { DampVector2 } from "../../../../shared/Utility/UtilityFunctions";

const cursorCanvasCenterOffset: Vector2 = new Vector2(50, 35);
const cursorCanvasToMenuOffset: Vector2 = new Vector2(65, 90);

const cursorCanvasDampedFollowLocationStep = 0.1;

const cursorCanvasFollowLocation: Vector2 = new Vector2();
const cursorCanvasFinalFollowLocation: Vector2 = new Vector2();
const cursorCanvasDampedFollowLocation: Vector2 = new Vector2();
const cursorCanvasTempCopyCurrentLocation: Vector2 = new Vector2();
const cursorCanvasStyles: CSSProperties = { pointerEvents: "none" };

const handleSetCursorCanvasLocation = (cursorLocation: Vector2): void => {
  cursorCanvasFollowLocation.set(
    cursorLocation.x - cursorCanvasCenterOffset.x,
    cursorLocation.y - cursorCanvasCenterOffset.y,
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
  cursorCanvasStyles,
  cursorCanvasCenterOffset,
  cursorCanvasToMenuOffset,
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
