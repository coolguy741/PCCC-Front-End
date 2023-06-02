import { Leva } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import HUD from "../1-HUD/0-HUD/HUD";
import GateDebugOptions from "../2-Debug/DebugPlayerCameraTriggers/GateDebugOptions";
import useWindowResize from "../5-Hooks/useWindowResize";

const UIContainer: FC = () => {
  // Global State
  const { activeLocation } = useGlobalState(
    (state) => ({
      activeLocation: state.activeLocation,
    }),
    shallow,
  );

  // Hooks
  useWindowResize();

  return (
    <Fragment>
      <HUD />
      {activeLocation === "Gate" && <GateDebugOptions />}
      <Leva flat collapsed hidden />
      {/* <DebugUIContainer /> */}
    </Fragment>
  );
};

export default memo(UIContainer);
