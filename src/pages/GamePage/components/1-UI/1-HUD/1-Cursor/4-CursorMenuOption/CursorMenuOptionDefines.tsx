import { Vector2 } from "three";
import { Theme } from "../../../../../styles/Snippets/Theme";

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
  "--icon-border-color": Theme.PCCCGreen,
  "--label-background-color": Theme.PCCCGreen,
};

// Action One Menu Option
const actionOneBoundingRectVector: Vector2 = new Vector2();
const actionOneMenuPositionOffset: Vector2 = new Vector2(14, -160);
const actionOneTempCopyCurrentLocation: Vector2 = new Vector2();
const actionOneMenuPositionEnd: Vector2 = new Vector2();
const actionOneMenuPositionDriver: Vector2 = new Vector2();
const actionOneMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCYellow,
  "--label-background-color": Theme.PCCCYellow,
};

// Action One Menu Option
const actionTwoBoundingRectVector: Vector2 = new Vector2();
const actionTwoMenuPositionOffset: Vector2 = new Vector2(119, -80);
const actionTwoTempCopyCurrentLocation: Vector2 = new Vector2();
const actionTwoMenuPositionEnd: Vector2 = new Vector2();
const actionTwoMenuPositionDriver: Vector2 = new Vector2();
const actionTwoMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCBlue,
  "--label-background-color": Theme.PCCCBlue,
};

const exitBoundingRectVector: Vector2 = new Vector2();
const exitMenuPositionOffset: Vector2 = new Vector2(100, 25);
const exitTempCopyCurrentLocation: Vector2 = new Vector2();
const exitMenuPositionEnd: Vector2 = new Vector2();
const exitMenuPositionDriver: Vector2 = new Vector2();
const exitMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCRed,
  "--label-background-color": Theme.PCCCRed,
};

export {
  exitMenuPositionEnd,
  inspectMenuPositionEnd,
  exitBoundingRectVector,
  exitMenuPositionOffset,
  exitMenuPositionDriver,
  actionTwoMenuPositionEnd,
  actionOneMenuPositionEnd,
  inspectBoundingRectVector,
  inspectMenuPositionOffset,
  inspectMenuPositionDriver,
  exitMenuOptionStyleObject,
  actionOneBoundingRectVector,
  actionOneMenuPositionDriver,
  actionOneMenuPositionOffset,
  actionTwoBoundingRectVector,
  actionTwoMenuPositionDriver,
  actionTwoMenuPositionOffset,
  exitTempCopyCurrentLocation,
  inspectMenuOptionStyleObject,
  actionOneMenuOptionStyleObject,
  actionTwoMenuOptionStyleObject,
  inspectTempCopyCurrentLocation,
  actionOneTempCopyCurrentLocation,
  actionTwoTempCopyCurrentLocation,
};
