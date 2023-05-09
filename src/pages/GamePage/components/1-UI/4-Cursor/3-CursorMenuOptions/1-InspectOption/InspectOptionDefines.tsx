import { Vector2 } from "three";

const inspectOptionCenterXOffset = -120;
const inspectOptionCenterYOffset = -30;
const inspectOptionBoundingRectDivisor = 2;
const inspectOptionDampedFollowLocationStep = 0.01;

const inspectOptionFollowLocation = new Vector2();
const inspectOptionDampedFollowLocation = new Vector2();
const inspectOptionBoundingRectDimensions = new Vector2();

export {
  inspectOptionCenterXOffset,
  inspectOptionCenterYOffset,
  inspectOptionFollowLocation,
  inspectOptionBoundingRectDivisor,
  inspectOptionDampedFollowLocation,
  inspectOptionBoundingRectDimensions,
  inspectOptionDampedFollowLocationStep,
};
