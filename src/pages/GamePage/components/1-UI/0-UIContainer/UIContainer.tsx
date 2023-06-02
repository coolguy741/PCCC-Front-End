import { Leva } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import HUD from "../1-HUD/0-HUD/HUD";
import GateDebugOptions from "../2-Debug/DebugPlayerCameraTriggers/GateDebugOptions";
import DebugUIContainer from "../2-Debug/DebugUIContainer";
import useWindowResize from "../5-Hooks/useWindowResize";

interface UIContainerPropTypes {
  debug?: boolean;
}

const UIContainer: FC<UIContainerPropTypes> = ({ debug }) => {
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
      {debug ? (
        <Fragment>
          <HUD debug={debug} />
          <DebugUIContainer />
        </Fragment>
      ) : (
        <Fragment>
          <HUD debug={debug} />
          {activeLocation === "Gate" && <GateDebugOptions />}
          <Leva flat collapsed hidden />
        </Fragment>
      )}
    </Fragment>
  );
};

export default memo(UIContainer);
