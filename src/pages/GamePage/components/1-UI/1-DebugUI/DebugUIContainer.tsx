import { Fragment, memo } from "react";
import LevaController from "./LevaController";
import VConsoleController from "./VConsoleController";

const DebugUIContainer = () => {
  return (
    <Fragment>
      <LevaController />
      <VConsoleController />
    </Fragment>
  );
};

export default memo(DebugUIContainer);
