import { Vector2 } from "three";

const actionOptionCenterXOffset = 120;
const actionOptionCenterYOffset = -30;
const actionOptionBoundingRectDivisor = 2;
const actionOptionDampedFollowLocationStep = 0.01;

const actionOptionFollowLocation = new Vector2();
const actionOptionDampedFollowLocation = new Vector2();
const actionOptionBoundingRectDimensions = new Vector2();

export {
  actionOptionCenterXOffset,
  actionOptionCenterYOffset,
  actionOptionFollowLocation,
  actionOptionBoundingRectDivisor,
  actionOptionDampedFollowLocation,
  actionOptionBoundingRectDimensions,
  actionOptionDampedFollowLocationStep,
};
