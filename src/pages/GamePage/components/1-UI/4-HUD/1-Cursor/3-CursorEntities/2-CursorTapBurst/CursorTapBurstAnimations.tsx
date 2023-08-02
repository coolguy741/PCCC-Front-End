import { gsap } from "gsap";
import { RawShaderMaterial } from "three";
import { BACK_1_OUT } from "../../../../../../shared/Eases/Eases";
import { AnimateCursorTapBurstType } from "./CusorTapBurstTypes";

const animateCursorTapBurst: AnimateCursorTapBurstType = (
  material: RawShaderMaterial,
): void => {
  gsap.fromTo(
    material.uniforms.uTime,
    { value: 0.75 },
    {
      value: -1.5,
      duration: 0.45,
      overwrite: true,
      ease: BACK_1_OUT,
    },
  );
};

export { animateCursorTapBurst };
