import { BakeShadows, SoftShadows } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";

const Shadows: FC = () => {
  const { size, focus, samples, enableSS, enableBS } = useControls({
    shadows: folder({
      softShadows: folder({
        enableSS: true,
        samples: 16,
        focus: 0.75,
        size: 35,
      }),
      bakeShadows: folder({
        enableBS: false,
      }),
    }),
  });
  return (
    <Fragment>
      {enableBS && <BakeShadows />}
      {enableSS && <SoftShadows samples={samples} focus={focus} size={size} />}
    </Fragment>
  );
};

export default memo(Shadows);
