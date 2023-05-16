import { FC, Fragment, memo } from "react";
import HUDMenuOptionStage from "./0-HUDMenuOption/HUDMenuOptionStage";
import Inventory from "./1-Inventory/Inventory";
import Inspect from "./2-Inspect/Inspect";

const HUD: FC = () => {
  return (
    <Fragment>
      <HUDMenuOptionStage />
      <Inspect />
      <Inventory />
    </Fragment>
  );
};

export default memo(HUD);
