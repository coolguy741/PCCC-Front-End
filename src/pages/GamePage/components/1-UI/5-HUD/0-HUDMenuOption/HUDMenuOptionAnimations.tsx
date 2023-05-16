import { gsap } from "gsap";
import { Vector2 } from "three";
import { BACK_1_OUT } from "../../../../shared/Eases/Eases";

const animateHUDMenuOptionBGIn = (hudMenuOptionBG: HTMLDivElement) => {
  gsap.to(hudMenuOptionBG, {
    scale: 3,
    duration: 0.35,
    overwrite: true,
    ease: BACK_1_OUT,
  });
};

const animateHUDMenuOptionBGOut = (hudMenuOptionBG: HTMLDivElement) => {
  gsap.to(hudMenuOptionBG, {
    scale: 1,
    duration: 0.35,
    overwrite: true,
    ease: BACK_1_OUT,
  });
};

const animateHUDMenuOptionIconIn = (
  hudMenuOptionIcon: HTMLImageElement,
  animIconLanding: Vector2,
) => {
  gsap.to(hudMenuOptionIcon, {
    scale: 1.25,
    x: animIconLanding.x,
    y: animIconLanding.y,
    duration: 0.5,
    overwrite: true,
    ease: BACK_1_OUT,
  });
};

const animateHUDMenuOptionIconOut = (hudMenuOptionIcon: HTMLImageElement) => {
  gsap.to(hudMenuOptionIcon, {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.5,
    overwrite: true,
    ease: BACK_1_OUT,
  });
};

export {
  animateHUDMenuOptionBGIn,
  animateHUDMenuOptionBGOut,
  animateHUDMenuOptionIconIn,
  animateHUDMenuOptionIconOut,
};
