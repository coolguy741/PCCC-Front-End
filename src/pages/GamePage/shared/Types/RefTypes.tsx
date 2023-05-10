import { MutableRefObject } from "react";
import {
  Group,
  Mesh,
  OrthographicCamera,
  PerspectiveCamera,
  Vector2,
} from "three";

// R3F
export type RefVector2Type = MutableRefObject<Vector2>;
export type RefMeshType = MutableRefObject<Mesh | null>;
export type RefGroupType = MutableRefObject<Group | null>;
export type RefPerspectiveCameraType =
  MutableRefObject<PerspectiveCamera | null>;
export type RefOrthographicCameraType =
  MutableRefObject<OrthographicCamera | null>;

// UI
export type RefDivType = MutableRefObject<HTMLDivElement | null>;
export type RefImageType = MutableRefObject<HTMLImageElement | null>;

// Shared
export type RefNumberType = MutableRefObject<number>;
export type RefBooleanType = MutableRefObject<boolean>;
export type RefNumberNullType = MutableRefObject<number | null>;
export type RefCanvasType = MutableRefObject<HTMLCanvasElement | null>;
