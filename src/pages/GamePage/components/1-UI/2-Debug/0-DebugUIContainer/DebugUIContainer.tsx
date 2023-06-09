import { FC, Fragment, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import DebugButton from "../1-DebugButton/DebugButton";
import ActiveStateController from "../2-DebugActiveState/ActiveStateController";
import DebugPlayerCameraTriggers from "../3-DebugPlayerCameraTriggers/DebugPlayerCameraTriggers";
import DynamicFileController from "../4-DebugControllers/DynamicFileController";
import LevaController from "../4-DebugControllers/LevaController";
import VConsoleController from "../4-DebugControllers/VConsoleController";
import CursorDebug from "../6-DebugCursor/CursorDebug";

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
