import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";

import HUDMenuOption from "./HUDMenuOption";
import {
  GoalListHUDMenuOptionData,
  InventoryHUDMenuOptionData,
  RecipeBookHUDMenuOptionData,
  SettingsHUDMenuOptionData,
} from "./HUDMenuOptionData";

const HUDMenuOptionStage: FC = () => {
  // Global State
  const { menuActive } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
    }),
    shallow,
  );

  return (
    <Fragment>
      <HUDMenuOption
        menuActive={menuActive}
        optionData={InventoryHUDMenuOptionData}
      />
      <HUDMenuOption
        menuActive={menuActive}
        optionData={RecipeBookHUDMenuOptionData}
      />
      <HUDMenuOption
        menuActive={menuActive}
        optionData={SettingsHUDMenuOptionData}
      />
      <HUDMenuOption
        menuActive={menuActive}
        optionData={GoalListHUDMenuOptionData}
      />
    </Fragment>
  );
};

export default memo(HUDMenuOptionStage);
