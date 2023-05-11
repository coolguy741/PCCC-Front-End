import { FC, Fragment, memo } from "react";
import DebugUIContainer from "../1-DebugUI/DebugUIContainer";
import ToolTip from "../3-ToolTip/ToolTip";
import Cursor from "../4-Cursor/Cursor";
import { onWindowBlur, onWindowFocus } from "../4-Cursor/CursorDefines";
import useWindowFocusBlur from "../5-Hooks/useWindowFocusBlur";
import useWindowResize from "../5-Hooks/useWindowResize";

const UIContainer: FC = () => {
  // Hooks
  useWindowResize();
  useWindowFocusBlur(onWindowFocus, onWindowBlur);
  return (
    <Fragment>
      <Cursor />
      <ToolTip />
      <DebugUIContainer />
    </Fragment>
  );
};

export default memo(UIContainer);
