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
  exitTempCopyCurrentLocation,
  inspectBoundingRectVector,
  inspectMenuOptionStyleObject,
  inspectMenuPositionDriver,
  inspectMenuPositionEnd,
  inspectMenuPositionOffset,
  inspectTempCopyCurrentLocation,
  pickupBoundingRectVector,
  pickupMenuOptionStyleObject,
  pickupMenuPositionDriver,
  pickupMenuPositionEnd,
  pickupMenuPositionOffset,
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
        type="pickup"
        label="Pick Up"
        animOffset={0.1}
        hoverTrigger={hoveredSection === "pickup"}
        menuPositionEnd={pickupMenuPositionEnd}
        styleObject={pickupMenuOptionStyleObject}
        boundingRectVector={pickupBoundingRectVector}
        menuPositionOffset={pickupMenuPositionOffset}
        menuPositionDriver={pickupMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/pickup.webp"
        tempCursorLocationCopy={pickupTempCopyCurrentLocation}
      />
      <DynamicCursorMenuOptionStage />
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
