import { FC, memo } from "react";
import { HUDMenuOptionDataType } from "./HUDMenuOptionDefines";
import HUDMenuOptionStyleContainer from "./HUDMenuOptionStyleContainer";
import { useHUDMenuOptionLogic } from "./useHUDMenuOptionLogic";

// Types
export interface HUDMenuOptionPropTypes {
  menuActive: boolean;
  optionData: HUDMenuOptionDataType;
  activeHoveredHudMenuOption: string | null;
  setActiveHoveredHudMenuOption: (
    activeHoveredHudMenuOption: string | null,
  ) => void;
}

const HUDMenuOption: FC<HUDMenuOptionPropTypes> = ({
  optionData,
  menuActive,
  activeHoveredHudMenuOption,
  setActiveHoveredHudMenuOption,
}) => {
  // Hooks
  const {
    onPointerLeave,
    onPointerEnter,
    hudMenuOptionBGRef,
    hudMenuOptionIconRef,
  } = useHUDMenuOptionLogic({
    menuActive,
    optionData,
    activeHoveredHudMenuOption,
    setActiveHoveredHudMenuOption,
  });

  return (
    <HUDMenuOptionStyleContainer
      style={optionData.styleObject}
      onPointerLeave={onPointerLeave}
      onPointerEnter={onPointerEnter}
    >
      <div ref={hudMenuOptionBGRef} className="hud-menu-option-bg" />
      <img
        draggable={false}
        alt={optionData.label}
        src={optionData.iconURL}
        ref={hudMenuOptionIconRef}
        className="hud-menu-option-icon"
      />
    </HUDMenuOptionStyleContainer>
  );
};

export default memo(HUDMenuOption);
