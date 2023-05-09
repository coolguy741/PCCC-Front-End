import { FC, Fragment, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import useMouseMove from "../5-Hooks/useMouseMove";
import useWindowFocusBlur from "../5-Hooks/useWindowFocusBlur";
import CursorCanvas from "./0-CursorCanvas/CursorCanvas";
import { handleSetCursorCanvasLocation } from "./0-CursorCanvas/CursorCanvasDefines";
import CursorCamera from "./1-CursorCamera/CursorCamera";
import CursorMesh from "./2-CursorMesh/CursorMesh";
import CursorMenuOption from "./3-CursorMenuOption/CursorMenuOption";
import {
  actionOneBoundingRectVector,
  actionOneMenuPositionDriver,
  actionOneMenuPositionEnd,
  actionOneMenuPositionOffset,
  actionOneTempCopyCurrentLocation,
  actionTwoBoundingRectVector,
  actionTwoMenuPositionDriver,
  actionTwoMenuPositionEnd,
  actionTwoMenuPositionOffset,
  actionTwoTempCopyCurrentLocation,
  inspectBoundingRectVector,
  inspectMenuPositionDriver,
  inspectMenuPositionEnd,
  inspectMenuPositionOffset,
  inspectTempCopyCurrentLocation,
} from "./3-CursorMenuOption/CursorMenuOptionDefines";
import { onWindowBlur, onWindowFocus } from "./CursorDefines";

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
      <CursorMenuOption
        label="Inspect"
        color="#30d5c8"
        animOffset={0}
        iconURL="/game_assets/ui_images/gj.webp"
        menuPositionEnd={inspectMenuPositionEnd}
        boundingRectVector={inspectBoundingRectVector}
        menuPositionOffset={inspectMenuPositionOffset}
        menuPositionDriver={inspectMenuPositionDriver}
        tempCursorLocationCopy={inspectTempCopyCurrentLocation}
      />

      <CursorMenuOption
        label="Pick Up"
        color="#0096ff"
        animOffset={0.1}
        iconURL="/game_assets/ui_images/gj.webp"
        menuPositionEnd={actionOneMenuPositionEnd}
        boundingRectVector={actionOneBoundingRectVector}
        menuPositionOffset={actionOneMenuPositionOffset}
        menuPositionDriver={actionOneMenuPositionDriver}
        tempCursorLocationCopy={actionOneTempCopyCurrentLocation}
      />

      <CursorMenuOption
        label="Use"
        color="#fee12b"
        animOffset={0.2}
        iconURL="/game_assets/ui_images/gj.webp"
        menuPositionEnd={actionTwoMenuPositionEnd}
        boundingRectVector={actionTwoBoundingRectVector}
        menuPositionOffset={actionTwoMenuPositionOffset}
        menuPositionDriver={actionTwoMenuPositionDriver}
        tempCursorLocationCopy={actionTwoTempCopyCurrentLocation}
      />

      <CursorCanvas>
        <CursorCamera />
        <CursorMesh />
      </CursorCanvas>
    </Fragment>
  );
};

export default memo(Cursor);
