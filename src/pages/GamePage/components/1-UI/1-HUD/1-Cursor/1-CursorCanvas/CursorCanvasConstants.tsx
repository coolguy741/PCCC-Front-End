import { CSSProperties } from "react";
import { Vector2 } from "three";
import {
  ConstantDampFunctionType,
  ConstantVoidFunctionType,
} from "../../../../../shared/Types/DefineTypes";
import { DampVector2 } from "../../../../../shared/Utility/UtilityFunctions";
import {
  HandleSetCursorCanvasLocationType,
  HandleUpdateCursorCanvasElementLocationType,
} from "./CursorCanvasTypes";

const cursorCanvasDampStep = 0.025;
const cursorCanvasDampedFollowStep: Vector2 = new Vector2(0.025, 0.025);

const cursorCanvasCenterOffseOffsetPercent = new Vector2(
  0.334599260172626,
  0.258840937114673,
);

const cursorCanvasCenterOffset: Vector2 = new Vector2();

const cursorCanvasToMenuOffsetPercent = new Vector2(
  0.378791615289766,
  0.568187422934649,
);

const cursorCanvasToMenuOffset: Vector2 = new Vector2();

const cursorCanvasFollowLocation: Vector2 = new Vector2();
const cursorCanvasFinalFollowLocation: Vector2 = new Vector2();
const cursorCanvasDampedFollowLocation: Vector2 = new Vector2();
const cursorCanvasTempCopyCurrentLocation: Vector2 = new Vector2();
const cursorCanvasStyles: CSSProperties = {
  width: "100%",
  height: "100%",
  touchAction: "none",
  borderRadius: "100%",
  pointerEvents: "none",
};

const handleSetCursorCanvasLocation: HandleSetCursorCanvasLocationType = (
  cursorLocation: Vector2,
): void => {
  cursorCanvasFollowLocation.set(
    cursorLocation.x - cursorCanvasCenterOffset.x,
    cursorLocation.y - cursorCanvasCenterOffset.y,
  );
};

const handleDampCursorCanvasLocation: ConstantDampFunctionType = (
  delta: number,
  step: number,
): void => {
  DampVector2(
    cursorCanvasDampedFollowLocation,
    cursorCanvasFollowLocation,
    step,
    delta,
  );
};

const handleUpdateCursorCanvasFinalLocation: ConstantVoidFunctionType =
  (): void => {
    cursorCanvasFinalFollowLocation.copy(cursorCanvasDampedFollowLocation);
  };

const handleUpdateCursorCanvasElementLocation: HandleUpdateCursorCanvasElementLocationType =
  (cursorCanvasReference: HTMLCanvasElement): void => {
    cursorCanvasReference.style.left = `${cursorCanvasFinalFollowLocation.x}px`;
    cursorCanvasReference.style.top = `${cursorCanvasFinalFollowLocation.y}px`;
  };

export {
  cursorCanvasStyles,
  cursorCanvasDampStep,
  cursorCanvasCenterOffset,
  cursorCanvasToMenuOffset,
  cursorCanvasFollowLocation,
  cursorCanvasDampedFollowStep,
  handleSetCursorCanvasLocation,
  handleDampCursorCanvasLocation,
  cursorCanvasFinalFollowLocation,
  cursorCanvasToMenuOffsetPercent,
  cursorCanvasDampedFollowLocation,
  cursorCanvasTempCopyCurrentLocation,
  cursorCanvasCenterOffseOffsetPercent,
  handleUpdateCursorCanvasFinalLocation,
  handleUpdateCursorCanvasElementLocation,
};
