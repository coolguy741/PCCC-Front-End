import { Vector2 } from "three";
import { Theme } from "../../../../../../styles/Snippets/Theme";

// Types
export interface MenuOptionStyleObjectType {
  "--icon-border-color": string;
  "--label-background-color": string;
}

// Inspect Menu Option
const inspectBoundingRectVector: Vector2 = new Vector2();
const inspectMenuPositionOffsetFactor: Vector2 = new Vector2(
  -0.750341952712825,
  -0.666970624633622,
);
const inspectMenuPositionOffset: Vector2 = new Vector2();
// -90, -80
const inspectTempCopyCurrentLocation: Vector2 = new Vector2();
const inspectMenuPositionEnd: Vector2 = new Vector2();
const inspectMenuPositionDriver: Vector2 = new Vector2();
const inspectMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCGreen,
  "--label-background-color": Theme.PCCCGreen,
};

// Action One Menu Option
const pickupBoundingRectVector: Vector2 = new Vector2();
const pickupMenuPositionOffsetFactor: Vector2 = new Vector2(
  0.116719859310884,
  -1.333941249267244,
);
const pickupMenuPositionOffset: Vector2 = new Vector2();
// 14, -160
const pickupTempCopyCurrentLocation: Vector2 = new Vector2();
const pickupMenuPositionEnd: Vector2 = new Vector2();
const pickupMenuPositionDriver: Vector2 = new Vector2();
const pickupMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCYellow,
  "--label-background-color": Theme.PCCCYellow,
};

// Action One Menu Option
const dynamicBoundingRectVector: Vector2 = new Vector2();
const dynamicMenuPositionOffsetFactor: Vector2 = new Vector2(
  0.992118804142513,
  -0.666970624633622,
);
const dynamicMenuPositionOffset: Vector2 = new Vector2();
// 119, -80
const dynamicTempCopyCurrentLocation: Vector2 = new Vector2();
const dynamicMenuPositionEnd: Vector2 = new Vector2();
const dynamicMenuPositionDriver: Vector2 = new Vector2();
const dynamicMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCBlue,
  "--label-background-color": Theme.PCCCBlue,
};

const exitBoundingRectVector: Vector2 = new Vector2();
const exitMenuPositionOffsetFactor: Vector2 = new Vector2(
  1.785216178521618,
  0.446304044630404,
);
const exitMenuPositionOffset: Vector2 = new Vector2();
// 100, 25
const exitTempCopyCurrentLocation: Vector2 = new Vector2();
const exitMenuPositionEnd: Vector2 = new Vector2();
const exitMenuPositionDriver: Vector2 = new Vector2();
const exitMenuOptionStyleObject: MenuOptionStyleObjectType = {
  "--icon-border-color": Theme.PCCCRed,
  "--label-background-color": Theme.PCCCRed,
};

export {
  exitMenuPositionEnd,
  pickupMenuPositionEnd,
  inspectMenuPositionEnd,
  exitBoundingRectVector,
  exitMenuPositionOffset,
  exitMenuPositionDriver,
  dynamicMenuPositionEnd,
  inspectBoundingRectVector,
  inspectMenuPositionOffset,
  inspectMenuPositionDriver,
  exitMenuOptionStyleObject,
  pickupBoundingRectVector,
  pickupMenuPositionDriver,
  pickupMenuPositionOffset,
  dynamicBoundingRectVector,
  dynamicMenuPositionDriver,
  dynamicMenuPositionOffset,
  pickupMenuOptionStyleObject,
  exitTempCopyCurrentLocation,
  inspectMenuOptionStyleObject,
  dynamicMenuOptionStyleObject,
  exitMenuPositionOffsetFactor,
  pickupTempCopyCurrentLocation,
  inspectTempCopyCurrentLocation,
  dynamicTempCopyCurrentLocation,
  pickupMenuPositionOffsetFactor,
  dynamicMenuPositionOffsetFactor,
  inspectMenuPositionOffsetFactor,
};
