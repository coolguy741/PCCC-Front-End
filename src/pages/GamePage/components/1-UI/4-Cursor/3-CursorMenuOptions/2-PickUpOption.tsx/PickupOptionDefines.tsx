import { Vector2 } from "three";

const pickUpOptionCenterXOffset = 0;
const pickUpOptionCenterYOffset = -150;
const pickUpOptionBoundingRectDivisor = 2;
const pickUpOptionDampedFollowLocationStep = 0.01;

const pickUpOptionFollowLocation = new Vector2();
const pickUpOptionDampedFollowLocation = new Vector2();
const pickUpOptionBoundingRectDimensions = new Vector2();

export {
  pickUpOptionCenterXOffset,
  pickUpOptionCenterYOffset,
  pickUpOptionFollowLocation,
  pickUpOptionBoundingRectDivisor,
  pickUpOptionDampedFollowLocation,
  pickUpOptionBoundingRectDimensions,
  pickUpOptionDampedFollowLocationStep,
};
