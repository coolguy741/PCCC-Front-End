import { FC, memo } from "react";
import { HUDMenuOptionDataType } from "./HUDMenuOptionDefines";
import HUDMenuOptionStyleContainer from "./HUDMenuOptionStyleContainer";
import { useHUDMenuOptionLogic } from "./useHUDMenuOptionLogic";

// Types
export interface HUDMenuOptionPropTypes {
  menuActive: boolean;
  optionData: HUDMenuOptionDataType;
  setActiveHoveredHudMenuOption: (
    activeHoveredHudMenuOption: string | null,
  ) => void;
}

const HUDMenuOption: FC<HUDMenuOptionPropTypes> = ({
  optionData,
  menuActive,
  setActiveHoveredHudMenuOption,
}) => {
  // Hooks
  const {
    handlePointerOut,
    handlePointerOver,
    hudMenuOptionBGRef,
    hudMenuOptionIconRef,
  } = useHUDMenuOptionLogic({
    menuActive,
    optionData,
    setActiveHoveredHudMenuOption,
  });

  return (
    <HUDMenuOptionStyleContainer
      style={optionData.styleObject}
      onPointerOut={handlePointerOut}
      onPointerOver={handlePointerOver}
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
