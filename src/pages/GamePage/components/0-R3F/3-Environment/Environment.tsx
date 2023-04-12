// import { Sky } from "@react-three/drei";
import { Fragment, memo } from "react";
import EnvironmentMap from "./EnvironmentMap";
import Lighting from "./Lighting/Lighting";
import Shadows from "./Shadows";

const Environment = () => {
  return (
    <Fragment>
      {/* <Sky distance={50} /> */}
      <Lighting />
      <Shadows />
      <EnvironmentMap />
    </Fragment>
  );
};

export default memo(Environment);
