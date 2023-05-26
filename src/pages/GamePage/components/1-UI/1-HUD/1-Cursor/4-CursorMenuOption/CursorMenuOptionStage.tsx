import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import CursorMenuOption from "./CursorMenuOption";
import {
  actionOneBoundingRectVector,
  actionOneMenuOptionStyleObject,
  actionOneMenuPositionDriver,
  actionOneMenuPositionEnd,
  actionOneMenuPositionOffset,
  actionOneTempCopyCurrentLocation,
  actionTwoBoundingRectVector,
  actionTwoMenuOptionStyleObject,
  actionTwoMenuPositionDriver,
  actionTwoMenuPositionEnd,
  actionTwoMenuPositionOffset,
  actionTwoTempCopyCurrentLocation,
  exitBoundingRectVector,
  exitMenuOptionStyleObject,
  exitMenuPositionDriver,
  exitMenuPositionEnd,
  exitMenuPositionOffset,
  exitTempCopyCurrentLocation,
  inspectBoundingRectVector,
  inspectMenuOptionStyleObject,
  inspectMenuPositionDriver,
  inspectMenuPositionEnd,
  inspectMenuPositionOffset,
  inspectTempCopyCurrentLocation,
} from "./CursorMenuOptionDefines";

const CursorMenuOptionStage: FC = () => {
  // Global State
  const { hoveredSection } = useGlobalState(
    (state) => ({
      cursorLocation: state.cursorLocation,
      hoveredSection: state.hoveredSection,
    }),
    shallow,
  );

  return (
    <Fragment>
      <CursorMenuOption
        type="inspect"
        label="Inspect"
        animOffset={0}
        hoverTrigger={hoveredSection === "inspect"}
        menuPositionEnd={inspectMenuPositionEnd}
        styleObject={inspectMenuOptionStyleObject}
        boundingRectVector={inspectBoundingRectVector}
        menuPositionOffset={inspectMenuPositionOffset}
        menuPositionDriver={inspectMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/inspect.webp"
        tempCursorLocationCopy={inspectTempCopyCurrentLocation}
      />
      <CursorMenuOption
        type="actionOne"
        label="Pick Up"
        animOffset={0.1}
        hoverTrigger={hoveredSection === "actionOne"}
        menuPositionEnd={actionOneMenuPositionEnd}
        styleObject={actionOneMenuOptionStyleObject}
        boundingRectVector={actionOneBoundingRectVector}
        menuPositionOffset={actionOneMenuPositionOffset}
        menuPositionDriver={actionOneMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/pickup.webp"
        tempCursorLocationCopy={actionOneTempCopyCurrentLocation}
      />
      <CursorMenuOption
        type="actionTwo"
        label="Use"
        animOffset={0.2}
        hoverTrigger={hoveredSection === "actionTwo"}
        menuPositionEnd={actionTwoMenuPositionEnd}
        styleObject={actionTwoMenuOptionStyleObject}
        iconURL="/game_assets/ui_images/cursor/use.webp"
        boundingRectVector={actionTwoBoundingRectVector}
        menuPositionOffset={actionTwoMenuPositionOffset}
        menuPositionDriver={actionTwoMenuPositionDriver}
        tempCursorLocationCopy={actionTwoTempCopyCurrentLocation}
      />
      <CursorMenuOption
        label="X"
        type="exit"
        animOffset={0.3}
        menuPositionEnd={exitMenuPositionEnd}
        styleObject={exitMenuOptionStyleObject}
        hoverTrigger={hoveredSection === "exit"}
        boundingRectVector={exitBoundingRectVector}
        menuPositionOffset={exitMenuPositionOffset}
        menuPositionDriver={exitMenuPositionDriver}
        tempCursorLocationCopy={exitTempCopyCurrentLocation}
      />
    </Fragment>
  );
};

export default memo(CursorMenuOptionStage);
