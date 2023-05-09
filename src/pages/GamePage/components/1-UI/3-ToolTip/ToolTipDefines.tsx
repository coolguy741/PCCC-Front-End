import { Vector2 } from "three";

const toolTipCenterXOffset = 10;
const toolTipCenterYOffset = 110;
const toolTipBoundingRectDivisor = 2;
const toolTipDampedFollowLocationStep = 0.01;

const toolTipFollowLocation = new Vector2();
const toolTipDampedFollowLocation = new Vector2();
const toolTipBoundingRectDimensions = new Vector2();

export {
  toolTipCenterXOffset,
  toolTipCenterYOffset,
  toolTipFollowLocation,
  toolTipBoundingRectDivisor,
  toolTipDampedFollowLocation,
  toolTipBoundingRectDimensions,
  toolTipDampedFollowLocationStep,
};
