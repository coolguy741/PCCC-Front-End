import { FC, Fragment, memo } from "react";
import DynamicEnvironmentMapController from "./DynamicEnvironmentMapController";
import LevaController from "./LevaController";
import VConsoleController from "./VConsoleController";

const DebugUIContainer: FC = () => {
  return (
    <Fragment>
      <LevaController />
      <VConsoleController />
      <DynamicEnvironmentMapController />
    </Fragment>
  );
};

export default memo(DebugUIContainer);
