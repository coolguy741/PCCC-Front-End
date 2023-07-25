import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";

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
    menuActive,
    activeHoveredHudMenuOption,
    setActiveHoveredHudMenuOption,
  } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      activeHoveredHudMenuOption: state.activeHoveredHudMenuOption,
      setActiveHoveredHudMenuOption: state.setActiveHoveredHudMenuOption,
    }),
    shallow,
  );

  return (
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
  );
};

export default memo(HUDMenuOptionStage);
