import { FC, memo, useCallback, useRef } from "react";
import { RefDivType, RefImageType } from "../../../../shared/Types/RefTypes";
import {
  animateHUDMenuOptionBGIn,
  animateHUDMenuOptionBGOut,
  animateHUDMenuOptionIconIn,
  animateHUDMenuOptionIconOut,
} from "./HUDMenuOptionAnimations";
import { HUDMenuOptionDataType } from "./HUDMenuOptionData";
import HUDMenuOptionStyleContainer from "./HUDMenuOptionStyleContainer";

interface HUDMenuOptionPropTypes {
  menuActive: boolean;
  optionData: HUDMenuOptionDataType;
}

const HUDMenuOption: FC<HUDMenuOptionPropTypes> = ({
  optionData,
  menuActive,
}) => {
  // Refs
  const hudMenuOptionBGRef: RefDivType = useRef(null);
  const hudMenuOptionIconRef: RefImageType = useRef(null);

  // Handlers
  const handlePointerOver = useCallback(() => {
    if (
      menuActive ||
      !hudMenuOptionBGRef.current ||
      !hudMenuOptionIconRef.current
    ) {
      return;
    }
    animateHUDMenuOptionBGIn(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconIn(
      hudMenuOptionIconRef.current,
      optionData.animIconLanding,
    );
  }, [menuActive, optionData]);

  const handlePointerOut = useCallback(() => {
    if (
      menuActive ||
      !hudMenuOptionBGRef.current ||
      !hudMenuOptionIconRef.current
    ) {
      return;
    }
    animateHUDMenuOptionBGOut(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconOut(hudMenuOptionIconRef.current);
  }, [menuActive]);

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
