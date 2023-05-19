import { Vector2 } from "three";

// Types
export interface MenuOptionStyleObjectType {
  "--icon-border-color": string;
  "--label-background-color": string;
}

// Inspect Menu Option
const inspectBoundingRectVector: Vector2 = new Vector2();
const inspectMenuPositionOffset: Vector2 = new Vector2(-90, -80);
const inspectTempCopyCurrentLocation: Vector2 = new Vector2();
const inspectMenuPositionEnd: Vector2 = new Vector2();
const inspectMenuPositionDriver: Vector2 = new Vector2();
const inspectMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": "#26d07c",
  "--label-background-color": "#26d07c",
};

// Action One Menu Option
const actionOneBoundingRectVector: Vector2 = new Vector2();
const actionOneMenuPositionOffset: Vector2 = new Vector2(14, -160);
const actionOneTempCopyCurrentLocation: Vector2 = new Vector2();
const actionOneMenuPositionEnd: Vector2 = new Vector2();
const actionOneMenuPositionDriver: Vector2 = new Vector2();
const actionOneMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": "#ffcd00",
  "--label-background-color": "#ffcd00",
};

// Action One Menu Option
const actionTwoBoundingRectVector: Vector2 = new Vector2();
const actionTwoMenuPositionOffset: Vector2 = new Vector2(119, -80);
const actionTwoTempCopyCurrentLocation: Vector2 = new Vector2();
const actionTwoMenuPositionEnd: Vector2 = new Vector2();
const actionTwoMenuPositionDriver: Vector2 = new Vector2();
const actionTwoMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": "#0084d5",
  "--label-background-color": "#0084d5",
};

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
  inspectMenuOptionStyleObject,
  actionOneMenuOptionStyleObject,
  actionTwoMenuOptionStyleObject,
  inspectTempCopyCurrentLocation,
  actionOneTempCopyCurrentLocation,
  actionTwoTempCopyCurrentLocation,
};
