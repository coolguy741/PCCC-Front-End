import {
  Euler,
  PerspectiveCamera as PerspectiveCameraType,
  Quaternion,
  Vector2,
  Vector3,
} from "three";
import {
  DampVector2,
  DampVector3,
} from "../../../../../shared/Utility/UtilityFunctions";
import { GATE_FOV } from "../../../5-Constants/0-Garden/GARDEN_FOV";
import {
  GATE_LOOKAT_POSITION,
  GATE_LOOKAT_QUATERNION,
} from "../../../5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import { GATE_POSITION } from "../../../5-Constants/0-Garden/GARDEN_POSITION";

type Vector2Object = {
  x: number;
  y: number;
};

type Factors = {
  lowerFactor: number;
  upperFactor: number;
};

const playerCameraFOVDampener: Vector2 = new Vector2();
const playerCameraLookAtDampener: Vector3 = new Vector3();
const playerCameraLookAtFractionCalc: Vector3 = new Vector3();

const playerCameraMouseRotationEuler: Euler = new Euler();
const playerCameraMouseRotationDampener: Vector2 = new Vector2();
const playerCameraMouseRotationMultiplier: Vector2 = new Vector2();

const playerCameraMouseRotationQuaternion: Quaternion = new Quaternion();
const playerCameraMouseRotationMultiplierFactor: Vector2 = new Vector2(1, 1);
const playerCameraInitMouseRotationMultiplier: Vector2 = new Vector2();
const playerCameraFullMouseRotationMultiplier: Vector2 = new Vector2(1, 1);

const GateMouseRange: Vector2 = new Vector2(0.05, 0.05);

const playerCameraActiveFov: Vector2 = new Vector2(GATE_FOV, 0);
const playerCameraActivePosition: Vector3 = GATE_POSITION.clone();
const playerCameraActiveLookAt: Vector3 = GATE_LOOKAT_POSITION.clone();
const playerCameraActiveMouseRange: Vector2 = GateMouseRange.clone();
const playerCameraActiveQuaternion: Quaternion = GATE_LOOKAT_QUATERNION.clone();

const xyFactor: Vector2 = new Vector2(3, 3);
const xyExponent: Vector2 = new Vector2(10, 4);
const xySensitivity: Vector2 = new Vector2(1, 1);
const leftRightLimit: Vector2 = new Vector2(0.5, 1);
const bottomTopLimit: Vector2 = new Vector2(0.5, 0.75);
const xyThreshold: Vector2 = new Vector2(0.5, 0.5);

const getThresholdFactors = (threshold: number): Factors => {
  const lowerFactor = 1 / (1 - threshold);
  const upperFactor = 1 / threshold;
  return {
    lowerFactor,
    upperFactor,
  };
};

const getQuadraticAdjustment = (
  mousePos: number,
  limit: Vector2,
  threshold: number,
  factors: Factors,
): number => {
  const normalizedMousePos: number = (mousePos + 1) / 2;
  const adjustment: number =
    normalizedMousePos < threshold
      ? Math.pow(1 - normalizedMousePos * factors.lowerFactor, 2) * limit.x
      : Math.pow((normalizedMousePos - threshold) * factors.upperFactor, 2) *
        limit.y;
  return adjustment;
};

const getRotationMultiplier = (mousePos: Vector2): Vector2Object => {
  let xMultiplier: number =
    1 + xyFactor.x * Math.pow(Math.abs(mousePos.x), xyExponent.x);
  let yMultiplier: number =
    1 + xyFactor.y * Math.pow(Math.abs(mousePos.y), xyExponent.y);

  const yAdjustment: number = getQuadraticAdjustment(
    mousePos.y,
    bottomTopLimit,
    xyThreshold.y,
    getThresholdFactors(xyThreshold.y),
  );
  yMultiplier *= yAdjustment * xySensitivity.y;

  const xAdjustment: number = getQuadraticAdjustment(
    mousePos.x,
    leftRightLimit,
    xyThreshold.x,
    getThresholdFactors(xyThreshold.x),
  );
  xMultiplier *= xAdjustment * xySensitivity.x;

  return {
    x: xMultiplier,
    y: yMultiplier,
  };
};

const updatePlayerCameraMouseRotationMultiplier = (
  playerCameraReference: PerspectiveCameraType,
  mouse: Vector2,
  delta: number,
) => {
  const rotationMultiplier = getRotationMultiplier(mouse);
  playerCameraMouseRotationMultiplier.set(
    mouse.y *
      playerCameraActiveMouseRange.x *
      playerCameraMouseRotationMultiplierFactor.x *
      rotationMultiplier.y,
    mouse.x *
      playerCameraActiveMouseRange.y *
      playerCameraMouseRotationMultiplierFactor.x *
      -1 *
      rotationMultiplier.x,
  );

  DampVector2(
    playerCameraMouseRotationDampener,
    playerCameraMouseRotationMultiplier,
    2,
    delta,
  );

  playerCameraMouseRotationEuler.set(
    playerCameraMouseRotationDampener.x,
    playerCameraMouseRotationDampener.y,
    0,
  );

  playerCameraMouseRotationQuaternion.setFromEuler(
    playerCameraMouseRotationEuler,
  );

  playerCameraReference.quaternion.multiply(
    playerCameraMouseRotationQuaternion,
  );
};

const handlePlayerCameraInit = (
  playerCameraReference: PerspectiveCameraType,
): void => {
  playerCameraReference.position.copy(playerCameraActivePosition);
  playerCameraReference.lookAt(playerCameraActiveLookAt);
  playerCameraReference.fov = playerCameraFOVDampener.x =
    playerCameraActiveFov.x;
  playerCameraReference.updateProjectionMatrix();
};

const updatePlayerCameraFov = (
  playerCameraReference: PerspectiveCameraType,
  delta: number,
) => {
  if (playerCameraReference.fov !== playerCameraActiveFov.x) {
    DampVector2(playerCameraFOVDampener, playerCameraActiveFov, 1, delta);
    playerCameraReference.fov = playerCameraFOVDampener.x;
    playerCameraReference.updateProjectionMatrix();
  }
};

const updatePlayerCameraPosition = (
  playerCameraReference: PerspectiveCameraType,
  delta: number,
) => {
  DampVector3(
    playerCameraReference.position,
    playerCameraActivePosition,
    0.9,
    delta,
  );
};

const GATE_TO_PLANTBOX_LERP_FRACTION = 0.25;
const GATE_TO_TOOLRACK_LERP_FRACTION = 0.5;
const GARDENVIEW_TO_PLANTBOX_LERP_FRACTION = 0.5;
// const TOOLRACK_TO_GARDENVIEW = 0;

const updatePlayerCameraLookAt = (
  playerCameraReference: PerspectiveCameraType,
  delta: number,
) => {
  playerCameraLookAtFractionCalc.lerpVectors(
    playerCameraActiveLookAt,
    playerCameraActivePosition,
    0,
  );

  playerCameraReference.lookAt(playerCameraLookAtFractionCalc);
};

export {
  xyExponent,
  xyFactor,
  xySensitivity,
  leftRightLimit,
  bottomTopLimit,
  GateMouseRange,
  playerCameraFullMouseRotationMultiplier,
  playerCameraInitMouseRotationMultiplier,
  GARDENVIEW_TO_PLANTBOX_LERP_FRACTION,
  GATE_TO_TOOLRACK_LERP_FRACTION,
  GATE_TO_PLANTBOX_LERP_FRACTION,
  playerCameraActiveQuaternion,
  updatePlayerCameraFov,
  playerCameraActiveFov,
  handlePlayerCameraInit,
  playerCameraFOVDampener,
  updatePlayerCameraLookAt,
  playerCameraActiveLookAt,
  playerCameraLookAtDampener,
  playerCameraActivePosition,
  updatePlayerCameraPosition,
  playerCameraActiveMouseRange,
  playerCameraMouseRotationEuler,
  playerCameraMouseRotationDampener,
  playerCameraMouseRotationQuaternion,
  playerCameraMouseRotationMultiplier,
  playerCameraMouseRotationMultiplierFactor,
  updatePlayerCameraMouseRotationMultiplier,
};
