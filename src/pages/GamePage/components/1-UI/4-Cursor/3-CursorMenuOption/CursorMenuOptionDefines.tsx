import { Vector2 } from "three";

// Inspect Menu Option
const inspectBoundingRectVector: Vector2 = new Vector2();
const inspectMenuPositionOffset: Vector2 = new Vector2(-90, -80);
const inspectTempCopyCurrentLocation: Vector2 = new Vector2();
const inspectMenuPositionEnd: Vector2 = new Vector2();
const inspectMenuPositionDriver: Vector2 = new Vector2();

// Action One Menu Option
const actionOneBoundingRectVector: Vector2 = new Vector2();
const actionOneMenuPositionOffset: Vector2 = new Vector2(14, -160);
const actionOneTempCopyCurrentLocation: Vector2 = new Vector2();
const actionOneMenuPositionEnd: Vector2 = new Vector2();
const actionOneMenuPositionDriver: Vector2 = new Vector2();

// Action One Menu Option
const actionTwoBoundingRectVector: Vector2 = new Vector2();
const actionTwoMenuPositionOffset: Vector2 = new Vector2(115, -80);
const actionTwoTempCopyCurrentLocation: Vector2 = new Vector2();
const actionTwoMenuPositionEnd: Vector2 = new Vector2();
const actionTwoMenuPositionDriver: Vector2 = new Vector2();

export {
  inspectMenuPositionEnd,
  actionTwoMenuPositionEnd,
  actionOneMenuPositionEnd,
  inspectBoundingRectVector,
  inspectMenuPositionOffset,
  inspectMenuPositionDriver,
  actionOneBoundingRectVector,
  actionOneMenuPositionDriver,
  actionOneMenuPositionOffset,
  actionTwoBoundingRectVector,
  actionTwoMenuPositionDriver,
  actionTwoMenuPositionOffset,
  inspectTempCopyCurrentLocation,
  actionOneTempCopyCurrentLocation,
  actionTwoTempCopyCurrentLocation,
};
