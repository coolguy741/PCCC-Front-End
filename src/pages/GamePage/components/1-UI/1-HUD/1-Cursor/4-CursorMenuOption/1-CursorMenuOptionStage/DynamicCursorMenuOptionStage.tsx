import { FC, memo, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import {
  InspectActionTypes,
  InspectData,
} from "../../../5-Inspect/7-InspectData/INSPECT_DATA";
import CursorMenuOption from "../0-CursorMenuOption/CursorMenuOption";
import {
  dynamicBoundingRectVector,
  dynamicMenuOptionStyleObject,
  dynamicMenuPositionDriver,
  dynamicMenuPositionEnd,
  dynamicMenuPositionOffset,
  dynamicMenuPositionOffsetFactor,
  dynamicTempCopyCurrentLocation,
} from "../0-CursorMenuOption/CursorMenuOptionDefines";
import { DynamicCursorMenuOptionStagePropTypes } from "./CursorMenuOptionStageTypes";

const DynamicCursorMenuOptionStage: FC<DynamicCursorMenuOptionStagePropTypes> =
  ({ hoveredSection }) => {
    // Global State
    const { activeHoveredEntity } = useGlobalState(
      (state) => ({
        activeHoveredEntity: state.activeHoveredEntity,
      }),
      shallow,
    );

    // Defines
    const dynamicLabel = useMemo((): InspectActionTypes => {
      if (activeHoveredEntity === null) return "Use";
      return InspectData[activeHoveredEntity].action;
    }, [activeHoveredEntity]);

    return (
      <CursorMenuOption
        type="dynamic"
        animOffset={0.2}
        label={dynamicLabel}
        menuPositionEnd={dynamicMenuPositionEnd}
        styleObject={dynamicMenuOptionStyleObject}
        hoverTrigger={hoveredSection === "dynamic"}
        offsetFactor={dynamicMenuPositionOffsetFactor}
        boundingRectVector={dynamicBoundingRectVector}
        menuPositionOffset={dynamicMenuPositionOffset}
        menuPositionDriver={dynamicMenuPositionDriver}
        iconURL="/game_assets/ui_images/cursor/use.webp"
        tempCursorLocationCopy={dynamicTempCopyCurrentLocation}
      />
    );
  };

export default memo(DynamicCursorMenuOptionStage);
