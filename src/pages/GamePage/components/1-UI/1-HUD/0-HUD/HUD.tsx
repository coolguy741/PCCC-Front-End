import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import useWindowFocusBlur from "../../5-Hooks/useWindowFocusBlur";
import Cursor from "../1-Cursor/0-Cursor/Cursor";
import {
  onWindowBlur,
  onWindowFocus,
} from "../1-Cursor/0-Cursor/CursorDefines";
import ToolTip from "../2-ToolTip/ToolTip";
import Eye from "../3-Eye/Eye";
import HUDMenuOptionStage from "../4-HUDMenuOption/HUDMenuOptionStage";
import Inspect from "../5-Inspect/0-inspect/Inspect";
import Inventory from "../6-Inventory/0-Inventory/Inventory";

interface HUDPropTypes {
  debug?: boolean;
}

const HUD: FC<HUDPropTypes> = ({ debug }) => {
  // Global State
  const { isDebugUIVisible } = useGlobalState(
    (state) => ({
      isDebugUIVisible: state.isDebugUIVisible,
    }),
    shallow,
  );

  // Hooks
  useWindowFocusBlur(onWindowFocus, onWindowBlur);

  return debug ? (
    !isDebugUIVisible ? (
      <Fragment>
        <Eye />
        <HUDMenuOptionStage />
        <Inspect />
        <Inventory />
        <Cursor />
        <ToolTip />
      </Fragment>
    ) : null
  ) : (
    <Fragment>
      <Eye />
      <HUDMenuOptionStage />
      <Inspect />
      <Inventory />
      <Cursor />
      <ToolTip />
    </Fragment>
  );
};

export default memo(HUD);
