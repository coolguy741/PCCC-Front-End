import { gsap } from "gsap";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";

const animAchievementTabTextScale = (
  element: HTMLHeadingElement,
  scale: number,
) => {
  gsap.to(element, {
    scale: scale,
    duration: 0.2,
    overwrite: true,
    ease: BACK_1_OUT,
  });
};

export { animAchievementTabTextScale };
