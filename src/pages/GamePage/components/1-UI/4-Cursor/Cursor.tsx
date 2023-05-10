import { FC, Fragment, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import useMouseMove from "../5-Hooks/useMouseMove";
import useWindowFocusBlur from "../5-Hooks/useWindowFocusBlur";
import CursorCanvas from "./0-CursorCanvas/CursorCanvas";
import { handleSetCursorCanvasLocation } from "./0-CursorCanvas/CursorCanvasDefines";
import CursorCamera from "./1-CursorCamera/CursorCamera";
import CursorMesh from "./2-CursorMesh/CursorMesh";
import CursorTapBurst from "./2-CursorMesh/CursorTapBurst";
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
  const { cursorLocation, hoveredSection } = useGlobalState(
    (state) => ({
      cursorLocation: state.cursorLocation,
      hoveredSection: state.hoveredSection,
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
        color="#26d07c"
        animOffset={0}
        hoverTrigger={hoveredSection === "left"}
        iconURL="/game_assets/ui_images/inspect.webp"
        menuPositionEnd={inspectMenuPositionEnd}
        boundingRectVector={inspectBoundingRectVector}
        menuPositionOffset={inspectMenuPositionOffset}
        menuPositionDriver={inspectMenuPositionDriver}
        tempCursorLocationCopy={inspectTempCopyCurrentLocation}
      />

      <CursorMenuOption
        label="Pick Up"
        color="#ffcd00"
        animOffset={0.1}
        iconURL="/game_assets/ui_images/pickup.webp"
        hoverTrigger={hoveredSection === "center"}
        menuPositionEnd={actionOneMenuPositionEnd}
        boundingRectVector={actionOneBoundingRectVector}
        menuPositionOffset={actionOneMenuPositionOffset}
        menuPositionDriver={actionOneMenuPositionDriver}
        tempCursorLocationCopy={actionOneTempCopyCurrentLocation}
      />

      <CursorMenuOption
        label="Use"
        color="#0084d5"
        animOffset={0.2}
        iconURL="/game_assets/ui_images/use.webp"
        hoverTrigger={hoveredSection === "right"}
        menuPositionEnd={actionTwoMenuPositionEnd}
        boundingRectVector={actionTwoBoundingRectVector}
        menuPositionOffset={actionTwoMenuPositionOffset}
        menuPositionDriver={actionTwoMenuPositionDriver}
        tempCursorLocationCopy={actionTwoTempCopyCurrentLocation}
      />

      <CursorCanvas>
        <CursorCamera />
        <CursorMesh />
        <CursorTapBurst />
      </CursorCanvas>
    </Fragment>
  );
};

export default memo(Cursor);
