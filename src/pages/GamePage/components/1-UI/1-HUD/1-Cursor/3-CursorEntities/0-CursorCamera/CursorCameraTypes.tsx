import { OrthographicCamera, Vector2 } from "three";
import { CursorMenuOptionTypes } from "../../../../../../globalState/modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import {
  RefNumberType,
  RefOrthographicCameraType,
} from "../../../../../../shared/Types/RefTypes";

export type CursorCameraCameraUpdatefunctionType = (
  cursorCameraReference: OrthographicCamera,
) => void;

export interface UseCursorCameraLogicReturnTypes {
  cursorCameraRef: RefOrthographicCameraType;
}

export type AnimateCursorCameraToMenuRotationType = (
  step: RefNumberType,
) => void;

export type AnimateCursorCameraToFollowRotationType = (
  cursorCameraRotation: Vector2,
) => void;

interface SectionMapType {
  section: CursorMenuOptionTypes;
  condition: boolean;
}

export type SectionMapArrayType = SectionMapType[];
