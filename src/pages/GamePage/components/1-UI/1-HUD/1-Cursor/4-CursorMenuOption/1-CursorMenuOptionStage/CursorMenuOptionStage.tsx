import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import CursorMenuOption from "../0-CursorMenuOption/CursorMenuOption";
import {
  exitBoundingRectVector,
  exitMenuOptionStyleObject,
  exitMenuPositionDriver,
  exitMenuPositionEnd,
  exitMenuPositionOffset,
  exitMenuPositionOffsetFactor,
  exitTempCopyCurrentLocation,
  inspectBoundingRectVector,
  inspectMenuOptionStyleObject,
  inspectMenuPositionDriver,
  inspectMenuPositionEnd,
  inspectMenuPositionOffset,
  inspectMenuPositionOffsetFactor,
  inspectTempCopyCurrentLocation,
  pickupBoundingRectVector,
  pickupMenuOptionStyleObject,
  pickupMenuPositionDriver,
  pickupMenuPositionEnd,
  pickupMenuPositionOffset,
  pickupMenuPositionOffsetFactor,
  pickupTempCopyCurrentLocation,
} from "../0-CursorMenuOption/CursorMenuOptionDefines";
import DynamicCursorMenuOptionStage from "./DynamicCursorMenuOptionStage";

const CursorMenuOptionStage: FC = () => {
  // Global State
  const { hoveredSection } = useGlobalState(
    (state) => ({
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
        menuPositionEnd={inspectMenuPositionEnd}
        styleObject={inspectMenuOptionStyleObject}
        hoverTrigger={hoveredSection === "inspect"}
        offsetFactor={inspectMenuPositionOffsetFactor}
        boundingRectVector={inspectBoundingRectVector}
        menuPositionOffset={inspectMenuPositionOffset}
        menuPositionDriver={inspectMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/inspect.webp"
        tempCursorLocationCopy={inspectTempCopyCurrentLocation}
      />
      <CursorMenuOption
        type="pickup"
        label="Pick Up"
        animOffset={0.1}
        menuPositionEnd={pickupMenuPositionEnd}
        styleObject={pickupMenuOptionStyleObject}
        hoverTrigger={hoveredSection === "pickup"}
        offsetFactor={pickupMenuPositionOffsetFactor}
        boundingRectVector={pickupBoundingRectVector}
        menuPositionOffset={pickupMenuPositionOffset}
        menuPositionDriver={pickupMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/pickup.webp"
        tempCursorLocationCopy={pickupTempCopyCurrentLocation}
      />
      <DynamicCursorMenuOptionStage hoveredSection={hoveredSection} />
      <CursorMenuOption
        label="X"
        type="exit"
        animOffset={0.3}
        menuPositionEnd={exitMenuPositionEnd}
        styleObject={exitMenuOptionStyleObject}
        hoverTrigger={hoveredSection === "exit"}
        offsetFactor={exitMenuPositionOffsetFactor}
        boundingRectVector={exitBoundingRectVector}
        menuPositionOffset={exitMenuPositionOffset}
        menuPositionDriver={exitMenuPositionDriver}
        tempCursorLocationCopy={exitTempCopyCurrentLocation}
      />
    </Fragment>
  );
};

export default memo(CursorMenuOptionStage);
