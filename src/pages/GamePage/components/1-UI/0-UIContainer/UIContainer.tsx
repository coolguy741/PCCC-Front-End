import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import DebugUIContainer from "../1-DebugUI/DebugUIContainer";
import TestVideo from "../1-DebugUI/TestVideo";
import useWindowFocusBlur from "../10-Hooks/useWindowFocusBlur";
import useWindowResize from "../10-Hooks/useWindowResize";
import ToolTip from "../3-ToolTip/ToolTip";
import Cursor from "../4-Cursor/Cursor";
import { onWindowBlur, onWindowFocus } from "../4-Cursor/CursorDefines";
import HUD from "../5-HUD/HUD";

const UIContainer: FC = () => {
  // Global State
  const { isDebugUIVisible } = useGlobalState(
    (state) => ({
      isDebugUIVisible: state.isDebugUIVisible,
    }),
    shallow,
  );

  // Hooks
  useWindowResize();
  useWindowFocusBlur(onWindowFocus, onWindowBlur);

  return (
    <Fragment>
      {!isDebugUIVisible && <HUD />}
      <DebugUIContainer />
      <Cursor />
      <ToolTip />
      <TestVideo />
    </Fragment>
  );
};

export default memo(UIContainer);
