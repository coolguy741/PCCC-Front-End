import { BakeShadows, SoftShadows } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";

const Shadows: FC = () => {
  const { size, focus, samples, enableSS, enableBS } = useControls({
    shadows: folder(
      {
        softShadows: folder(
          {
            enableSS: true,
            samples: {
              value: 8,
              min: 0,
              max: 16,
              step: 4,
            },
            focus: {
              value: 0,
              min: 0,
              max: 1,
              step: 0.0001,
            },
            size: {
              value: 20,
              min: 0,
              max: 40,
              step: 1,
            },
          },
          { collapsed: true },
        ),
        bakeShadows: folder(
          {
            enableBS: false,
          },
          { collapsed: true },
        ),
      },
      { collapsed: true },
    ),
  });
  return (
    <Fragment>
      {enableBS && <BakeShadows />}
      {enableSS && <SoftShadows samples={samples} focus={focus} size={size} />}
    </Fragment>
  );
};

export default memo(Shadows);
