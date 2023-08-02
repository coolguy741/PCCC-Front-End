import { gsap } from "gsap";
import { BACK_1_OUT } from "../../../../../shared/Eases/Eases";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";

const animateAchievementPanelIn = (element: HTMLDivElement) => {
  gsap.fromTo(
    element,
    {
      y: -500,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      overwrite: true,
      ease: BACK_1_OUT,
    },
  );
};

const animateAchievementPanelOut = (
  element: HTMLDivElement,
  onComplete: ConstantVoidFunctionType,
) => {
  gsap.to(element, {
    y: -500,
    opacity: 0,
    duration: 0.5,
    overwrite: true,
    ease: BACK_1_OUT,
    onComplete: onComplete,
  });
};

export { animateAchievementPanelIn, animateAchievementPanelOut };
