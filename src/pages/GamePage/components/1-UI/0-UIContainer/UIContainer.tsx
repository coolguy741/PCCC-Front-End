import { FC, Fragment, memo } from "react";
import HUD from "../1-HUD/0-HUD/HUD";
import DebugUIContainer from "../2-Debug/DebugUIContainer";
import useWindowResize from "../5-Hooks/useWindowResize";

const UIContainer: FC = () => {
  // Hooks
  useWindowResize();

  return (
    <Fragment>
      <HUD />
      <DebugUIContainer />
    </Fragment>
  );
};

export default memo(UIContainer);
