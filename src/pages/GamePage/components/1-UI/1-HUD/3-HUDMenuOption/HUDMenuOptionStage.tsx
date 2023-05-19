import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";

import HUDMenuOption from "./HUDMenuOption";
import {
  GoalListHUDMenuOptionData,
  InventoryHUDMenuOptionData,
  RecipeBookHUDMenuOptionData,
  SettingsHUDMenuOptionData,
} from "./HUDMenuOptionDefines";

const HUDMenuOptionStage: FC = () => {
  // Global State
  const { menuActive, setActiveHoveredHudMenuOption } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      setActiveHoveredHudMenuOption: state.setActiveHoveredHudMenuOption,
    }),
    shallow,
  );

  return (
    <Fragment>
      <HUDMenuOption
        menuActive={menuActive}
        optionData={InventoryHUDMenuOptionData}
        setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
      />
      <HUDMenuOption
        menuActive={menuActive}
        optionData={RecipeBookHUDMenuOptionData}
        setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
      />
      <HUDMenuOption
        menuActive={menuActive}
        optionData={SettingsHUDMenuOptionData}
        setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
      />
      <HUDMenuOption
        menuActive={menuActive}
        optionData={GoalListHUDMenuOptionData}
        setActiveHoveredHudMenuOption={setActiveHoveredHudMenuOption}
      />
    </Fragment>
  );
};

export default memo(HUDMenuOptionStage);
