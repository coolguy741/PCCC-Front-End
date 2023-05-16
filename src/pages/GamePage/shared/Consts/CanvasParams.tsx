import { MathUtils } from "three";

const devicePixelRatio: number = MathUtils.clamp(window.devicePixelRatio, 1, 2);

export { devicePixelRatio };
