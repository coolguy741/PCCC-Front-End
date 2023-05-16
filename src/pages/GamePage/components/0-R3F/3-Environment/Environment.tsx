import { FC, Fragment, memo } from "react";
import Lighting from "./0-Lighting/Lighting";
import EnvironmentMap from "./1-EnvironmentMap/EnvironmentMap";
import Shadows from "./2-Shadows/Shadows";

const Environment: FC = () => {
  return (
    <Fragment>
      <Shadows />
      <Lighting />
      <EnvironmentMap />
    </Fragment>
  );
};

export default memo(Environment);
