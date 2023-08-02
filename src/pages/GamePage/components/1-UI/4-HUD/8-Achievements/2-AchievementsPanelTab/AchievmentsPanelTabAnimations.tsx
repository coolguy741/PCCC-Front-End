import { gsap } from "gsap";
import { POWER_1_INOUT } from "../../../../../shared/Eases/Eases";

const animAchievementPanelTabOpacity = (
  opacity: number,
  delay: number,
  element: HTMLDivElement,
) => {
  gsap.to(element, {
    opacity: opacity,
    duration: 0.15,
    delay: delay,
    overwrite: true,
    ease: POWER_1_INOUT,
  });
};

export { animAchievementPanelTabOpacity };
