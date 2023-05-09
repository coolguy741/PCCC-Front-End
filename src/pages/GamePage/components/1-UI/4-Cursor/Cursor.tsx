import { FC, Fragment, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import useMouseMove from "../5-Hooks/useMouseMove";
import useWindowFocusBlur from "../5-Hooks/useWindowFocusBlur";
import CursorCanvas from "./0-CursorCanvas/CursorCanvas";
import { handleSetCursorCanvasLocation } from "./0-CursorCanvas/CursorCanvasDefines";
import CursorCamera from "./1-CursorCamera/CursorCamera";
import CursorMesh from "./2-CursorMesh/CursorMesh";
import CursorMenuOption from "./3-CursorMenuOptions/0-CursorMenuOption/CursorMenuOption";
import { onWindowBlur, onWindowFocus } from "./CursorDefines";
// import InspectOption from "./3-CursorMenuOptions/1-InspectOption/InspectOption";
// import PickUpOption from "./3-CursorMenuOptions/2-PickUpOption.tsx/PickUpOption";
// import ActionOption from "./3-CursorMenuOptions/3-ActionOption.tsx/ActionOption";

const Cursor: FC = () => {
  // Global State
  const { cursorLocation } = useGlobalState(
    (state) => ({
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleSetCursorLocation = useCallback(
    (event: MouseEvent) => {
      cursorLocation.set(event.clientX, event.clientY);
      handleSetCursorCanvasLocation(event);
    },
    [cursorLocation],
  );

  // Hooks
  useMouseMove(handleSetCursorLocation);
  useWindowFocusBlur(onWindowFocus, onWindowBlur);

  return (
    <Fragment>
      {/* <ActionOption />
      <PickUpOption />
      <InspectOption /> */}
      <CursorMenuOption
        label={"Inspect"}
        iconURL={"/game_assets/ui_images/gj.webp"}
      />
      <CursorCanvas>
        <CursorCamera />
        <CursorMesh />
      </CursorCanvas>
    </Fragment>
  );
};

export default memo(Cursor);
