import { ReactNode } from "react";
import { Vector2 } from "three";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefCanvasType } from "../../../../../shared/Types/RefTypes";

// Component
export interface CursorCanvasPropTypes {
  children: ReactNode;
}

// Component Logic
export interface UseCursorCanvasLogicReturnTypes {
  cursorCanvasRef: RefCanvasType;
  cursorCanvasMeasureRef: (element: HTMLElement | SVGElement | null) => void;
}

export type UseCursorCanvasLogicHookTypes =
  () => UseCursorCanvasLogicReturnTypes;

// Animations
export type AnimateCursorCanvasToMenuPositionType = (
  affectedVector: Vector2,
  targetVector: Vector2,
  onComplete: ConstantVoidFunctionType,
) => void;

export type AnimateCursorCanvasToFollowPosition = (step: Vector2) => void;

// Defines
export type HandleSetCursorCanvasLocationType = (
  cursorLocation: Vector2,
) => void;

export type HandleUpdateCursorCanvasElementLocationType = (
  cursorCanvasReference: HTMLCanvasElement,
) => void;
