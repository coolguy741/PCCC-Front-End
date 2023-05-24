import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import HUD from "../1-HUD/0-HUD/HUD";
import {
  onWindowBlur,
  onWindowFocus,
} from "../1-HUD/1-Cursor/0-Cursor/CursorDefines";
import DebugUIContainer from "../2-Debug/DebugUIContainer";
import useWindowFocusBlur from "../5-Hooks/useWindowFocusBlur";
import useWindowResize from "../5-Hooks/useWindowResize";

const UIContainer: FC = () => {
  // Hooks
  useWindowResize();
  useWindowFocusBlur(onWindowFocus, onWindowBlur);

  // Global State
  const { isDebugUIVisible } = useGlobalState(
    (state) => ({
      isDebugUIVisible: state.isDebugUIVisible,
    }),
    shallow,
  );

  return (
    <Fragment>
      {!isDebugUIVisible && <HUD />}
      <DebugUIContainer />
    </Fragment>
  );
};

export default memo(UIContainer);
