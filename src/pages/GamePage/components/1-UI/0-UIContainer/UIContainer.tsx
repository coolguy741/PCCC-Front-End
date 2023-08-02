import { AnimatePresence } from "framer-motion";
import { Leva } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import Loader from "../1-Loader/Loader";
import Landing from "../2-Landing/Landing";
import SkinTonePicker from "../3-SkinTonePicker/SkinTonePicker";
import HUD from "../4-HUD/0-HUD/HUD";
import Cursor from "../4-HUD/1-Cursor/0-Cursor/Cursor";
import DebugUIContainer from "../7-Debug/0-DebugUIContainer/DebugUIContainer";
import GateDebugOptions from "../7-Debug/3-DebugPlayerCameraTriggers/GateDebugOptions";

const UIContainer: FC = () => {
  // Global State
  const { UIPhase, isDebugMode, activeLocation } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
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

      <AnimatePresence>
        {(UIPhase === "Landing" || UIPhase === "SkinTonePicker") && (
          <SkinTonePicker />
        )}
      </AnimatePresence>

      <Cursor />

      <AnimatePresence>
        {(UIPhase === "Landing" || UIPhase === "Loader") && <Landing />}
      </AnimatePresence>
      <AnimatePresence>{UIPhase === "Loader" && <Loader />}</AnimatePresence>
    </Fragment>
  );
};

export default memo(UIContainer);
