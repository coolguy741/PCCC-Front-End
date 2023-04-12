import { Fragment, memo } from "react";
import SunLight from "./SunLight";

const Lighting = () => {
  return (
    <Fragment>
      <SunLight />
    </Fragment>
  );
};

export default memo(Lighting);
