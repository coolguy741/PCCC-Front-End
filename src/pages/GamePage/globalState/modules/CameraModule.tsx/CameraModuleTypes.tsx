import { Vector2, Vector3 } from "three";

export interface CameraModuleTypes {
  activeCamera: string;
  setActiveCamera: (newCamera: string) => void;

  playerCameraActiveFov: Vector2;
  playerCameraActiveLookAt: Vector3;
  playerCameraActivePosition: Vector3;
}
