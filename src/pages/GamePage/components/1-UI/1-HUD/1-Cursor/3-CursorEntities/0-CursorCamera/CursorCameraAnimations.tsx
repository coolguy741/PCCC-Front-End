import { gsap } from "gsap";
import { Vector2 } from "three";
import { POWER_1_INOUT } from "../../../../../../shared/Eases/Eases";
import { RefNumberType } from "../../../../../../shared/Types/RefTypes";
import {
  AnimateCursorCameraToFollowRotationType,
  AnimateCursorCameraToMenuRotationType,
} from "./CursorCameraTypes";

const animateCursorCameraToMenuRotation: AnimateCursorCameraToMenuRotationType =
  (step: RefNumberType): void => {
    gsap.fromTo(
      step,
      { current: 0 },
      {
        current: 5,
        duration: 1,
        overwrite: true,
        ease: POWER_1_INOUT,
      },
    );
  };

const animateCursorCameraToFollowRotation: AnimateCursorCameraToFollowRotationType =
  (cursorCameraRotation: Vector2): void => {
    gsap.to(cursorCameraRotation, {
      x: 0,
      duration: 1,
      overwrite: true,
      ease: POWER_1_INOUT,
    });
  };

export {
  animateCursorCameraToMenuRotation,
  animateCursorCameraToFollowRotation,
};
