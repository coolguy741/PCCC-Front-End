import { FC, Fragment, memo } from "react";
import SunLight from "./SunLight";

const Lighting: FC = () => {
  return (
    <Fragment>
      <SunLight />
    </Fragment>
  );
};

export default memo(Lighting);
