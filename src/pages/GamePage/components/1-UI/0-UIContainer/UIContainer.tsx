import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import HUD from "../1-HUD/HUD";
import Cursor from "../2-Cursor/Cursor";
import { onWindowBlur, onWindowFocus } from "../2-Cursor/CursorDefines";
import ToolTip from "../3-ToolTip/ToolTip";
import DebugUIContainer from "../4-Debug/DebugUIContainer";
import TestVideo from "../4-Debug/TestVideo";
import useWindowFocusBlur from "../7-Hooks/useWindowFocusBlur";
import useWindowResize from "../7-Hooks/useWindowResize";

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
