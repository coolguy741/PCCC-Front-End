import { Vector2 } from "three";
import { DampVector2 } from "../../../shared/Utility/UtilityFunctions";

const toolTipCenterXOffset = 10;
const toolTipCenterYOffset = 110;
const toolTipBoundingRectDivisor = 2;
const toolTipDampedFollowLocationStep = 0.0025;

const toolTipInitFollowLocation = new Vector2();
const toolTipFinalFollowLocation = new Vector2();
const toolTipDampedFollowLocation = new Vector2();
const toolTipBoundingRectDimensions = new Vector2();

const handleDampToolTipLocation = (delta: number): void => {
  DampVector2(
    toolTipDampedFollowLocation,
    toolTipInitFollowLocation,
    toolTipDampedFollowLocationStep,
    delta,
  );
};

const handleUpdateToolTipFinalLocation = (): void => {
  toolTipFinalFollowLocation.copy(toolTipDampedFollowLocation);
};

const handleUpdateToolTipElementLocation = (
  toolTipReference: HTMLDivElement,
): void => {
  toolTipReference.style.left = `${toolTipFinalFollowLocation.x}px`;
  toolTipReference.style.top = `${toolTipFinalFollowLocation.y}px`;
};

export {
  toolTipCenterXOffset,
  toolTipCenterYOffset,
  toolTipInitFollowLocation,
  handleDampToolTipLocation,
  toolTipBoundingRectDivisor,
  toolTipDampedFollowLocation,
  toolTipBoundingRectDimensions,
  toolTipDampedFollowLocationStep,
  handleUpdateToolTipFinalLocation,
  handleUpdateToolTipElementLocation,
};
