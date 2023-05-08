import { MutableRefObject } from "react";
import { Mesh, PerspectiveCamera, Vector2 } from "three";

// R3F
export type RefVector2Type = MutableRefObject<Vector2>;
export type RefMeshType = MutableRefObject<Mesh | null>;
export type RefPerspectiveCameraType =
  MutableRefObject<PerspectiveCamera | null>;

// UI
export type RefDivType = MutableRefObject<HTMLDivElement | null>;

// Shared
export type RefNumberType = MutableRefObject<number>;
export type RefNumberNullType = MutableRefObject<number | null>;
