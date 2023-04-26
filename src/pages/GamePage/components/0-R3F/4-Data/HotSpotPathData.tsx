import { CubicBezierCurve3, Vector3 } from "three";

const GardenToHive = new CubicBezierCurve3(
  new Vector3(-3.895013, -4.410319, 2.909739),
  new Vector3(-2.423339, -3.233827, 2.977311),
  new Vector3(-0.664375, -1.942661, 0.283759),
  new Vector3(0.784177, -0.742489, 0.351812),
);

export { GardenToHive };
