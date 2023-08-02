import { FC, memo } from "react";
import HUDMenuOptionStyleContainer from "./HUDMenuOptionStyleContainer";
import { HUDMenuOptionPropTypes } from "./HUDMenuOptionTypes";
import { useHUDMenuOptionLogic } from "./useHUDMenuOptionLogic";

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
      key={optionData.label}
      style={optionData.styleObject}
      onPointerLeave={onPointerLeave}
      onPointerEnter={onPointerEnter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
