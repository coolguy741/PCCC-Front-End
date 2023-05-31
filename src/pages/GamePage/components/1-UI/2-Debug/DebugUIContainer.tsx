import { FC, Fragment, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import DebugButton from "./0-DebugButton/DebugButton";
import ActiveStateController from "./ActiveStateController/ActiveStateController";
import CursorDebug from "./CursorDebug";
import DebugPlayerCameraTriggers from "./DebugPlayerCameraTriggers/DebugPlayerCameraTriggers";
import DynamicFileController from "./DynamicFileController";
import LevaController from "./LevaController";
import VConsoleController from "./VConsoleController";

const DebugUIContainer: FC = () => {
  // Global State
  const { isDebugUIVisible, setIsDebugUIVisible } = useGlobalState(
    (state) => ({
      isDebugUIVisible: state.isDebugUIVisible,
      setIsDebugUIVisible: state.setIsDebugUIVisible,
    }),
    shallow,
  );

  const h = useCallback(() => {
    setIsDebugUIVisible(!isDebugUIVisible);
  }, [isDebugUIVisible, setIsDebugUIVisible]);

  return (
    <Fragment>
      <DebugButton
        debugButtonStyleObject={{
          "--debug-button-right": "0",
          "--debug-button-bottom": "0",
          "--debug-button-position": "fixed",
          "--debug-button-margin-bottom": "18rem",
        }}
        btnContent={isDebugUIVisible ? "SHOW HUD" : "SHOW DEBUG"}
        btnAction={h}
      />

      <LevaController isDebugUIVisible={isDebugUIVisible} />

      {isDebugUIVisible && (
        <Fragment>
          <CursorDebug />
          <VConsoleController />
          <DynamicFileController />
          <ActiveStateController />
          <DebugPlayerCameraTriggers />
        </Fragment>
      )}
    </Fragment>
  );
};

export default memo(DebugUIContainer);
