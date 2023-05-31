import { Vector2 } from "three";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { DampVector2 } from "../../../../shared/Utility/UtilityFunctions";
import {
  HandleDampToolTipLocationFunctionType,
  HandleUpdateToolTipElementLocationFunctionType,
} from "./ToolTipTypes";

const toolTipBoundingRectDivisor = 2;
const toolTipDampedFollowLocationStep = 0.0025;
const toolTipMenuOffset: Vector2 = new Vector2(10, 70);
const toolTipFollowOffset: Vector2 = new Vector2(10, 110);
const toolTipInitFollowLocation: Vector2 = new Vector2();
const toolTipCurrentPositionCopy: Vector2 = new Vector2();
const toolTipFinalFollowLocation: Vector2 = new Vector2();
const toolTipDampedFollowLocation: Vector2 = new Vector2();
const toolTipBoundingRectDimensions: Vector2 = new Vector2();

const handleDampToolTipLocation: HandleDampToolTipLocationFunctionType = (
  delta: number,
): void => {
  DampVector2(
    toolTipDampedFollowLocation,
    toolTipInitFollowLocation,
    toolTipDampedFollowLocationStep,
    delta,
  );
};

const handleUpdateToolTipFinalLocation: ConstantVoidFunctionType = (): void => {
  toolTipFinalFollowLocation.copy(toolTipDampedFollowLocation);
};

const handleUpdateToolTipElementLocation: HandleUpdateToolTipElementLocationFunctionType =
  (toolTipReference: HTMLDivElement): void => {
    toolTipReference.style.left = `${toolTipFinalFollowLocation.x}px`;
    toolTipReference.style.top = `${toolTipFinalFollowLocation.y}px`;
  };

export {
  toolTipMenuOffset,
  toolTipFollowOffset,
  toolTipInitFollowLocation,
  handleDampToolTipLocation,
  toolTipCurrentPositionCopy,
  toolTipBoundingRectDivisor,
  toolTipDampedFollowLocation,
  toolTipBoundingRectDimensions,
  toolTipDampedFollowLocationStep,
  handleUpdateToolTipFinalLocation,
  handleUpdateToolTipElementLocation,
};
