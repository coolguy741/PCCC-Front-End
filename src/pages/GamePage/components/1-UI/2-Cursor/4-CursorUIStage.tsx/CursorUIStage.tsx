import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import CursorMenuOption from "../3-CursorMenuOption/CursorMenuOption";
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
  inspectBoundingRectVector,
  inspectMenuOptionStyleObject,
  inspectMenuPositionDriver,
  inspectMenuPositionEnd,
  inspectMenuPositionOffset,
  inspectTempCopyCurrentLocation,
} from "../3-CursorMenuOption/CursorMenuOptionDefines";

const CursorUIStage: FC = () => {
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
        label="Inspect"
        animOffset={0}
        hoverTrigger={hoveredSection === "left"}
        menuPositionEnd={inspectMenuPositionEnd}
        styleObject={inspectMenuOptionStyleObject}
        boundingRectVector={inspectBoundingRectVector}
        menuPositionOffset={inspectMenuPositionOffset}
        menuPositionDriver={inspectMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/inspect.webp"
        tempCursorLocationCopy={inspectTempCopyCurrentLocation}
      />
      <CursorMenuOption
        label="Pick Up"
        animOffset={0.1}
        hoverTrigger={hoveredSection === "center"}
        menuPositionEnd={actionOneMenuPositionEnd}
        styleObject={actionOneMenuOptionStyleObject}
        boundingRectVector={actionOneBoundingRectVector}
        menuPositionOffset={actionOneMenuPositionOffset}
        menuPositionDriver={actionOneMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/pickup.webp"
        tempCursorLocationCopy={actionOneTempCopyCurrentLocation}
      />
      <CursorMenuOption
        label="Use"
        animOffset={0.2}
        hoverTrigger={hoveredSection === "right"}
        menuPositionEnd={actionTwoMenuPositionEnd}
        styleObject={actionTwoMenuOptionStyleObject}
        iconURL="/game_assets/ui_images/cursor/use.webp"
        boundingRectVector={actionTwoBoundingRectVector}
        menuPositionOffset={actionTwoMenuPositionOffset}
        menuPositionDriver={actionTwoMenuPositionDriver}
        tempCursorLocationCopy={actionTwoTempCopyCurrentLocation}
      />
    </Fragment>
  );
};

export default memo(CursorUIStage);
