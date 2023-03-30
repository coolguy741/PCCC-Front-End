import { Fragment, memo } from "react";
import EnvironmentMap from "./EnvironmentMap";
import Lighting from "./Lighting";

const Environment = () => {
  return (
    <Fragment>
      <Lighting />
      <EnvironmentMap />
    </Fragment>
  );
};

export default memo(Environment);
