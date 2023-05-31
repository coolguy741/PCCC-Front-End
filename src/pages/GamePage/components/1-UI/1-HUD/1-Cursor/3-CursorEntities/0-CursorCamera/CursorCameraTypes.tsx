import { OrthographicCamera, Vector2 } from "three";
import { CursorMenuOptionTypes } from "../../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import {
  RefNumberType,
  RefOrthographicCameraType,
} from "../../../../../../shared/Types/RefTypes";

// Component Logic
export type UseCursorCameraLogicHookTypes =
  () => UseCursorCameraLogicReturnTypes;

export interface UseCursorCameraLogicReturnTypes {
  cursorCameraRef: RefOrthographicCameraType;
}

// Animations
export type AnimateCursorCameraToMenuRotationType = (
  step: RefNumberType,
) => void;

export type AnimateCursorCameraToFollowRotationType = (
  cursorCameraRotation: Vector2,
) => void;

// Constants
export type CursorCameraCameraUpdateFunctionType = (
  cursorCameraReference: OrthographicCamera,
) => void;

interface CursorFourOptionMapType {
  section: CursorMenuOptionTypes;
  condition: boolean;
}

export type CursorFourOptionMapArrayType = CursorFourOptionMapType[];
