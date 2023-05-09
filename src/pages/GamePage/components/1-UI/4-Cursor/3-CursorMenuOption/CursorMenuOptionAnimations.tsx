import gsap from "gsap";
import { Vector2 } from "three";
import { BACK_1_OUT, POWER_1_INOUT } from "../../../../shared/Eases/Eases";

const animateCursorOptionsIn = (
  cursorMenuOptionElement: HTMLDivElement,
): void => {
  gsap.to(cursorMenuOptionElement, {
    scale: 0.95,
    opacity: 1,
    overwrite: true,
    duration: 0.5,
    ease: BACK_1_OUT,
  });
};

const animateCursorOptionsOut = (
  cursorMenuOptionElement: HTMLDivElement,
): void => {
  gsap.to(cursorMenuOptionElement, {
    scale: 0,
    opacity: 0,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

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

const animateCursorToMenuLocation = (
  cursorMenuOptionElement: HTMLDivElement,
  targetX: number,
  targetY: number,
): void => {
  gsap.to(cursorMenuOptionElement, {
    x: targetX,
    y: targetY,
    overwrite: true,
    duration: 0.3,
    ease: BACK_1_OUT,
  });
};

const animateCursorToCenterLocation = (
  cursorMenuOptionElement: HTMLDivElement,
  targetX: number,
  targetY: number,
): void => {
  gsap.to(cursorMenuOptionElement, {
    x: targetX,
    y: targetY,
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
    overwrite: true,
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
      duration: 0.5,
      ease: POWER_1_INOUT,
      onUpdate: onUpdate,
      delay: animDelay - 0.05,
    },
  );
};

export {
  animateCursorOptionsIn,
  animateCursorOptionsOut,
  animateCursorMenuOptionIn,
  animateCursorMenuOptionOut,
  animateCursorOptionsHoverIn,
  animateCursorToMenuLocation,
  animateCursorOptionsHoverOut,
  animateCursorToCenterLocation,
};
