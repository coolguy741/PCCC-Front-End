import { FC, memo, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import {
  InspectActionTypes,
  InspectData,
} from "../../../4-Inspect/6-InspectData/INSPECT_DATA";
import CursorMenuOption from "../0-CursorMenuOption/CursorMenuOption";
import {
  dynamicBoundingRectVector,
  dynamicMenuOptionStyleObject,
  dynamicMenuPositionDriver,
  dynamicMenuPositionEnd,
  dynamicMenuPositionOffset,
  dynamicTempCopyCurrentLocation,
} from "../0-CursorMenuOption/CursorMenuOptionDefines";

const DynamicCursorMenuOptionStage: FC = () => {
  // Global State
  const { hoveredSection, activeHoveredEntity } = useGlobalState(
    (state) => ({
      hoveredSection: state.hoveredSection,
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
      hoverTrigger={hoveredSection === "dynamic"}
      menuPositionEnd={dynamicMenuPositionEnd}
      styleObject={dynamicMenuOptionStyleObject}
      iconURL="/game_assets/ui_images/cursor/use.webp"
      boundingRectVector={dynamicBoundingRectVector}
      menuPositionOffset={dynamicMenuPositionOffset}
      menuPositionDriver={dynamicMenuPositionDriver}
      tempCursorLocationCopy={dynamicTempCopyCurrentLocation}
    />
  );
};

export default memo(DynamicCursorMenuOptionStage);
