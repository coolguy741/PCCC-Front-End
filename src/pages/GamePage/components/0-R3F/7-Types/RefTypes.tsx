import { MutableRefObject } from "react";
import { Mesh, PerspectiveCamera } from "three";

// Ref Types
export type RefNumberType = MutableRefObject<number>;
export type RefMeshType = MutableRefObject<Mesh | null>;
export type RefPerspectiveCameraType =
  MutableRefObject<PerspectiveCamera | null>;
