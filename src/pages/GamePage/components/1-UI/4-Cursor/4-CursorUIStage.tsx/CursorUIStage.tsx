import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import CursorMenuOption from "../3-CursorMenuOption/CursorMenuOption";
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
    </Fragment>
  );
};

export default memo(CursorUIStage);
