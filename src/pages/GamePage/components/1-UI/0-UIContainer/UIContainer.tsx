import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import HUD from "../1-HUD/0-HUD/HUD";
import DebugUIContainer from "../2-Debug/DebugUIContainer";
import useWindowResize from "../5-Hooks/useWindowResize";

const UIContainer: FC = () => {
  // Hooks
  useWindowResize();
  // useWindowFocusBlur(onWindowFocus, onWindowBlur);

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
