import { FC, Fragment, memo } from "react";
import Cursor from "../1-Cursor/0-Cursor/Cursor";
import ToolTip from "../2-ToolTip/ToolTip";
import HUDMenuOptionStage from "../3-HUDMenuOption/HUDMenuOptionStage";
import Inventory from "../5-Inventory/0-Inventory/Inventory";

const HUD: FC = () => {
  return (
    <Fragment>
      {/* <TestVideo /> */}
      <HUDMenuOptionStage />
      {/* <Inspect /> */}
      <Inventory />
      <Cursor />
      <ToolTip />
    </Fragment>
  );
};

export default memo(HUD);