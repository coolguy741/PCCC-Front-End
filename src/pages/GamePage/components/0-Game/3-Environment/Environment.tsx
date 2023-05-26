import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";
import Lighting from "./0-Lighting/Lighting";
import EnvironmentMap from "./1-EnvironmentMap/EnvironmentMap";
import Shadows from "./2-Shadows/Shadows";

const Environment: FC = () => {
  // Hooks
  const { enableHDR, enableLight } = useControls({
    HDR: folder(
      {
        enableHDR: true,
      },
      { collapsed: true },
    ),
    MainLight: folder(
      {
        enableLight: true,
      },
      { collapsed: true },
    ),
  });

  return (
    <Fragment>
      <Shadows />
      {enableLight && <Lighting />}
      {enableHDR && <EnvironmentMap />}
    </Fragment>
  );
};

export default memo(Environment);
