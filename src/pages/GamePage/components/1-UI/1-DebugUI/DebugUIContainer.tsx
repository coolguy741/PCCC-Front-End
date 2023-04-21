import { FC, Fragment, memo } from "react";
import ActiveStateController from "./ActiveStateController/ActiveStateController";
import DynamicEnvironmentMapController from "./DynamicEnvironmentMapController";
import LevaController from "./LevaController";
import VConsoleController from "./VConsoleController";

const DebugUIContainer: FC = () => {
  return (
    <Fragment>
      <LevaController />
      <VConsoleController />
      <DynamicEnvironmentMapController />
      <ActiveStateController />
    </Fragment>
  );
};

export default memo(DebugUIContainer);
