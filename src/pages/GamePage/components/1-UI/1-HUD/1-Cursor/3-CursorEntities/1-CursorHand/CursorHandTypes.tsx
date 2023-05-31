import { Mesh, Texture } from "three";
import { RefMeshType } from "../../../../../../shared/Types/RefTypes";

// Component Logic
export interface UseCursorHandLogicReturnTypes {
  cursorHandRef: RefMeshType;
  cursorTexture: Texture;
}

export type UseCursorHandLogicHookType = () => UseCursorHandLogicReturnTypes;

// Animations
export type AnimateCursorHandScaleType = (cursorHand: Mesh) => void;
