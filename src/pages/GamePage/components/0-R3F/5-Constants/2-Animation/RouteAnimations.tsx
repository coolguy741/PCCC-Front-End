import { gsap } from "gsap";
import { Vector2, Vector3 } from "three";
import { RefNumberType } from "../../7-Types/RefTypes";
import { POWER_1_INOUT } from "./Eases";

const animateRouteProgress = (
  targetRef: RefNumberType,
  from: number,
  to: number,
  duration: number,
  onUpdate: () => void,
) => {
  gsap.fromTo(
    targetRef,
    { current: from },
    {
      current: to,
      overwrite: true,
      duration: duration,
      onUpdate: onUpdate,
      ease: POWER_1_INOUT,
    },
  );
};

const animateRouteLookAt = (target: Vector3, to: Vector3, duration: number) => {
  gsap.to(target, {
    x: to.x,
    y: to.y,
    z: to.z,
    overwrite: true,
    duration: duration,
    ease: POWER_1_INOUT,
  });
};

const animateRouteFov = (target: Vector2, to: number, duration: number) => {
  gsap.to(target, {
    x: to,
    overwrite: true,
    duration: duration,
    ease: POWER_1_INOUT,
  });
};

export { animateRouteFov, animateRouteProgress, animateRouteLookAt };
