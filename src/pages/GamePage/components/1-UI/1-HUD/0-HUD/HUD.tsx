import { FC, Fragment, memo } from "react";
import useWindowFocusBlur from "../../5-Hooks/useWindowFocusBlur";
import Cursor from "../1-Cursor/0-Cursor/Cursor";
import {
  onWindowBlur,
  onWindowFocus,
} from "../1-Cursor/0-Cursor/CursorDefines";
import ToolTip from "../2-ToolTip/ToolTip";
import HUDMenuOptionStage from "../3-HUDMenuOption/HUDMenuOptionStage";
import Inspect from "../4-Inspect/0-inspect/Inspect";
import Inventory from "../5-Inventory/0-Inventory/Inventory";

const HUD: FC = () => {
  // Hooks
  useWindowFocusBlur(onWindowFocus, onWindowBlur);

  return (
    <Fragment>
      {/* <TestVideo /> */}
      <HUDMenuOptionStage />
      <Inspect />
      <Inventory />
      <Cursor />
      <ToolTip />
    </Fragment>
  );
};

export default memo(HUD);
