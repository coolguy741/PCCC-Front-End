import { Leva } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import HUD from "../1-HUD/0-HUD/HUD";
import DebugUIContainer from "../2-Debug/0-DebugUIContainer/DebugUIContainer";
import GateDebugOptions from "../2-Debug/3-DebugPlayerCameraTriggers/GateDebugOptions";

const UIContainer: FC = () => {
  // Global State
  const { isDebugMode, activeLocation } = useGlobalState(
    (state) => ({
      isDebugMode: state.isDebugMode,
      activeLocation: state.activeLocation,
    }),
    shallow,
  );

  return (
    <Fragment>
      {isDebugMode ? (
        <Fragment>
          <HUD />
          <DebugUIContainer />
        </Fragment>
      ) : (
        <Fragment>
          <HUD />
          {activeLocation === "Gate" && <GateDebugOptions />}
          <Leva flat collapsed hidden />
        </Fragment>
      )}
    </Fragment>
  );
};

export default memo(UIContainer);
