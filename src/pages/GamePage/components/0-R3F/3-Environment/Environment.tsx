import { Sky } from "@react-three/drei";
import { Fragment, memo } from "react";
import EnvironmentMap from "./EnvironmentMap";
import Lighting from "./Lighting";

const Environment = () => {
  return (
    <Fragment>
      <Sky distance={50} />
      <Lighting />
      {/* <ambientLight /> */}
      <EnvironmentMap />
    </Fragment>
  );
};

export default memo(Environment);
