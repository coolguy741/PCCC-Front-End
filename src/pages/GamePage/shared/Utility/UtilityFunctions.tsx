import { MathUtils, Vector2, Vector3 } from "three";

const DampVector3 = (
  target: Vector3,
  to: Vector3,
  step: number,
  delta: number,
): void => {
  target.x = MathUtils.damp(target.x, to.x, step, delta);
  target.y = MathUtils.damp(target.y, to.y, step, delta);
  target.z = MathUtils.damp(target.z, to.z, step, delta);
};

const DampVector2 = (
  target: Vector2,
  to: Vector2,
  step: number,
  delta: number,
): void => {
  target.x = MathUtils.damp(target.x, to.x, step, delta);
  target.y = MathUtils.damp(target.y, to.y, step, delta);
};

const DampScalar = (
  target: number,
  to: number,
  step: number,
  delta: number,
): void => {
  target = MathUtils.damp(target, to, step, delta);
};

const handleStopPropagation = (e: MouseEvent) => {
  e.stopPropagation();
};

export { DampVector3, DampScalar, DampVector2, handleStopPropagation };
