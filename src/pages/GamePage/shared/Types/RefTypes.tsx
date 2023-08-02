import { MutableRefObject } from "react";
import {
  DirectionalLight,
  Group,
  Mesh,
  OrthographicCamera,
  PerspectiveCamera,
  Vector2,
} from "three";

export type RefPerspectiveCameraType =
  MutableRefObject<PerspectiveCamera | null>;
export type RefNumberType = MutableRefObject<number>;
export type RefVector2Type = MutableRefObject<Vector2>;
export type RefBooleanType = MutableRefObject<boolean>;
export type RefMeshType = MutableRefObject<Mesh | null>;
export type RefGroupType = MutableRefObject<Group | null>;
export type RefNumberNullType = MutableRefObject<number | null>;
export type RefDivType = MutableRefObject<HTMLDivElement | null>;
export type RefImageType = MutableRefObject<HTMLImageElement | null>;
export type RefCanvasType = MutableRefObject<HTMLCanvasElement | null>;
export type RefDirectionalLightType = MutableRefObject<DirectionalLight | null>;
export type RefHeadingType = MutableRefObject<HTMLHeadingElement | null>;
export type RefButtonType = MutableRefObject<HTMLButtonElement | null>;
export type RefVideoType = MutableRefObject<HTMLVideoElement | null>;
export type RefOrthographicCameraType =
  MutableRefObject<OrthographicCamera | null>;
export type RefTimeoutType = MutableRefObject<ReturnType<
  typeof setTimeout
> | null>;
export type RefMeaseureType = (
  element: HTMLElement | SVGElement | null,
) => void;
