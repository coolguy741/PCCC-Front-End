import { FC, Fragment, memo } from "react";
import HUDMenuOptionStage from "./0-HUDMenuOption/HUDMenuOptionStage";
import Inventory from "./1-Inventory/Inventory";

const HUD: FC = () => {
  return (
    <Fragment>
      <HUDMenuOptionStage />
      <Inventory />
    </Fragment>
  );
};

export default memo(HUD);
