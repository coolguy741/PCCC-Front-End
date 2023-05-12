import { FC, Fragment, memo } from "react";
import InventoryHUDIcon from "../6-Inventory/InventoryHUDIcon";
import RecipeBookHUDIcon from "../7-RecipeBook/RecipeBookHUDIcon";
import SettingsHUDIcon from "../8-Settings/SettingsHUDIcon";
import GoalListHUDIcon from "../9-GoalList/GoalListHUDIcon";

const HUD: FC = () => {
  return (
    <Fragment>
      <InventoryHUDIcon />
      <RecipeBookHUDIcon />
      <SettingsHUDIcon />
      <GoalListHUDIcon />
    </Fragment>
  );
};

export default memo(HUD);
