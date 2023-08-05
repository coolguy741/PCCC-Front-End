import { AnimatePresence } from "framer-motion";
import { Leva } from "leva";
import { FC, Fragment, memo, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import Loader from "../1-Loader/Loader";
import GardenKitchenPicker from "../10-GardenKitchenPicker/GardenKitchenPicker";
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

  const {
    LoaderRenderCondition,
    LandingRenderCondition,
    SkinToneRenderCondition,
    // TutorialRenderCondition,
    GardenKitchenPickerRenderCondition,
  } = useMemo(() => {
    const LoaderRenderCondition = UIPhase === "Loader";
    const LandingRenderCondition =
      UIPhase === "Landing" || LoaderRenderCondition;
    const SkinToneRenderCondition =
      UIPhase === "Landing" || UIPhase === "SkinTonePicker";
    const GardenKitchenPickerRenderCondition =
      UIPhase === "GardenKitchenSelection";
    const TutorialRenderCondition = UIPhase === "Tutorial";

    return {
      LoaderRenderCondition,
      LandingRenderCondition,
      SkinToneRenderCondition,
      TutorialRenderCondition,
      GardenKitchenPickerRenderCondition,
    };
  }, [UIPhase]);

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

      {/* <AnimatePresence>
        {TutorialRenderCondition && <Tutorial />}
      </AnimatePresence> */}

      <AnimatePresence>
        {GardenKitchenPickerRenderCondition && <GardenKitchenPicker />}
      </AnimatePresence>

      <AnimatePresence>
        {SkinToneRenderCondition && <SkinTonePicker />}
      </AnimatePresence>

      <Cursor />
      <AnimatePresence>{LandingRenderCondition && <Landing />}</AnimatePresence>
      <AnimatePresence>{LoaderRenderCondition && <Loader />}</AnimatePresence>
      {/* 
      <RecipePanel />
      <Cursor /> */}
    </Fragment>
  );
};

export default memo(UIContainer);
