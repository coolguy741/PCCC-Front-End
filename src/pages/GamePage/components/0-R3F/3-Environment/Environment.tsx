import { FC, Fragment, memo } from "react";
import EnvironmentMap from "./EnvironmentMap";
import Lighting from "./Lighting/Lighting";
import Shadows from "./Shadows";

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
