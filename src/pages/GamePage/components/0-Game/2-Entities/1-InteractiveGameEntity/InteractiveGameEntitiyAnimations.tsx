import { gsap } from "gsap";
import { Bone } from "three";
import { BACK_17_IN } from "../../../../shared/Eases/Eases";

const animateInteractiveGameEntityOut = (entityBone: Bone) => {
  gsap.to(entityBone.scale, {
    duration: 0.25,
    delay: 0.5,
    x: 0,
    y: 0,
    z: 0,
    overwrite: true,
    ease: BACK_17_IN,
  });
};

export { animateInteractiveGameEntityOut };
