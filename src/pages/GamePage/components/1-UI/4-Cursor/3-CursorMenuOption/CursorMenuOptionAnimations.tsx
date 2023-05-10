import gsap from "gsap";
import { Vector2 } from "three";
import { BACK_1_OUT, POWER_1_INOUT } from "../../../../shared/Eases/Eases";

const animateCursorOptionsHoverIn = (
  cursorMenuOptionElement: HTMLDivElement,
): void => {
  gsap.to(cursorMenuOptionElement, {
    scale: 1,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorOptionsHoverOut = (
  cursorMenuOptionElement: HTMLDivElement,
): void => {
  gsap.to(cursorMenuOptionElement, {
    scale: 0.9,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorMenuOptionIn = (
  cursorMenuOptionElement: HTMLDivElement,
  cursorMenuOptionPositionFinal: Vector2,
  cursorMenuOptionPositionStart: Vector2,
  cursorMenuOptionPositionEnd: Vector2,
  onUpdate: () => void,
  animDelay: number,
  onComplete: () => void,
): void => {
  gsap.fromTo(
    cursorMenuOptionElement,
    { scale: 0, opacity: 0 },
    {
      scale: 0.95,
      opacity: 1,
      overwrite: true,
      duration: 0.5,
      ease: BACK_1_OUT,
      delay: 0.5 + animDelay,
      onComplete: onComplete,
    },
  );

  gsap.fromTo(
    cursorMenuOptionPositionFinal,
    {
      x: cursorMenuOptionPositionStart.x,
      y: cursorMenuOptionPositionStart.y,
    },
    {
      x: cursorMenuOptionPositionEnd.x,
      y: cursorMenuOptionPositionEnd.y,
      overwrite: true,
      duration: 0.5,
      ease: BACK_1_OUT,
      onUpdate: onUpdate,
      delay: 0.5 + animDelay,
    },
  );
};

const animateCursorMenuOptionOut = (
  cursorMenuOptionElement: HTMLDivElement,
  cursorMenuOptionPositionFinal: Vector2,
  cursorMenuOptionPositionStart: Vector2,
  cursorMenuOptionPositionEnd: Vector2,
  onUpdate: () => void,
  animDelay: number,
): void => {
  gsap.to(cursorMenuOptionElement, {
    scale: 0,
    opacity: 0,
    duration: 0.25,
    ease: POWER_1_INOUT,
    delay: animDelay - 0.05,
  });

  gsap.fromTo(
    cursorMenuOptionPositionFinal,
    {
      x: cursorMenuOptionPositionStart.x,
      y: cursorMenuOptionPositionStart.y,
    },
    {
      x: cursorMenuOptionPositionEnd.x,
      y: cursorMenuOptionPositionEnd.y,
      overwrite: true,
      duration: 0.3,
      ease: POWER_1_INOUT,
      onUpdate: onUpdate,
      delay: animDelay - 0.05,
    },
  );
};

export {
  animateCursorMenuOptionIn,
  animateCursorMenuOptionOut,
  animateCursorOptionsHoverIn,
  animateCursorOptionsHoverOut,
};
