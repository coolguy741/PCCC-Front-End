import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";

import { AnimatePresence } from "framer-motion";
import HUDMenuOption from "./HUDMenuOption";
import {
  AchievementsHUDMenuOptionData,
  InventoryHUDMenuOptionData,
  RecipeBookHUDMenuOptionData,
  SettingsHUDMenuOptionData,
} from "./HUDMenuOptionDefines";

const HUDMenuOptionStage: FC = () => {
  // Global State
  const {
    UIPhase,
    menuActive,
    activeHoveredHudMenuOption,
    setActiveHoveredHudMenuOption,
  } = useGlobalState(
    (state) => ({
      UIPhase: state.UIPhase,
      menuActive: state.menuActive,
      activeHoveredHudMenuOption: state.activeHoveredHudMenuOption,
      setActiveHoveredHudMenuOption: state.setActiveHoveredHudMenuOption,
    }),
    shallow,
  );

  return (
    <AnimatePresence>
      {UIPhase === "Game" && (
        <Fragment>
          <HUDMenuOption
            menuActive={menuActive}
            optionData={InventoryHUDMenuOptionData}
            activeHoveredHudMenuOption={activeHoveredHudMenuOption}
            setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
          />
          <HUDMenuOption
            menuActive={menuActive}
            optionData={RecipeBookHUDMenuOptionData}
            activeHoveredHudMenuOption={activeHoveredHudMenuOption}
            setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
          />
          <HUDMenuOption
            menuActive={menuActive}
            optionData={SettingsHUDMenuOptionData}
            activeHoveredHudMenuOption={activeHoveredHudMenuOption}
            setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
          />
          <HUDMenuOption
            menuActive={menuActive}
            optionData={AchievementsHUDMenuOptionData}
            activeHoveredHudMenuOption={activeHoveredHudMenuOption}
            setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
          />
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default memo(HUDMenuOptionStage);
