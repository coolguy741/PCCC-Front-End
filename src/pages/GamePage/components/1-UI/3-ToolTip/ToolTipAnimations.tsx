import gsap from "gsap";

const animateToolTipIn = (toolTipElement: HTMLDivElement) => {
  gsap.to(toolTipElement, {
    y: 0,
    delay: 0.1,
    opacity: 1,
    duration: 0.15,
    overwrite: true,
  });
};

const animateToolTipOut = (toolTipElement: HTMLDivElement) => {
  gsap.to(toolTipElement, {
    y: 15,
    opacity: 0,
    duration: 0.15,
    overwrite: true,
  });
};

export { animateToolTipIn, animateToolTipOut };
