import { Mesh, Texture } from "three";
import { RefMeshType } from "../../../../../../shared/Types/RefTypes";

// Logic
export interface UseCursorHandLogicReturnTypes {
  cursorHandRef: RefMeshType;
  cursorTexture: Texture;
}

export type UseCursorHandLogicHookType = () => UseCursorHandLogicReturnTypes;

export type AnimateCursorHandScaleType = (cursorHand: Mesh) => void;
