import { FC, Fragment, memo, useState } from "react";
import DebugButton from "../1-DebugUI/DebugButton";
import DebugUIContainer from "../1-DebugUI/DebugUIContainer";
import useWindowFocusBlur from "../10-Hooks/useWindowFocusBlur";
import useWindowResize from "../10-Hooks/useWindowResize";
import ToolTip from "../3-ToolTip/ToolTip";
import Cursor from "../4-Cursor/Cursor";
import { onWindowBlur, onWindowFocus } from "../4-Cursor/CursorDefines";
import HUD from "../5-HUD/HUD";

const UIContainer: FC = () => {
  // Local State
  const [isDebugUIVisible, setIsDebugUIVisible] = useState(false);

  // Hooks
  useWindowResize();
  useWindowFocusBlur(onWindowFocus, onWindowBlur);

  return (
    <Fragment>
      <ToolTip />

      <div
        style={{
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          right: 0,
          marginBottom: "2.5rem",
        }}
      >
        <DebugButton
          btnContent={isDebugUIVisible ? "SHOW HUD" : "SHOW DEBUG"}
          btnAction={() => setIsDebugUIVisible((prev) => !prev)}
        />
      </div>

      {isDebugUIVisible ? <DebugUIContainer /> : <HUD />}

      <Cursor />
    </Fragment>
  );
};

export default memo(UIContainer);
