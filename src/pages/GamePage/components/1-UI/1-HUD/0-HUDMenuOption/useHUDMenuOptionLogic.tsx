import { useCallback, useRef } from "react";
import { RefDivType, RefImageType } from "../../../../shared/Types/RefTypes";
import { HUDMenuOptionPropTypes } from "./HUDMenuOption";
import {
  animateHUDMenuOptionBGIn,
  animateHUDMenuOptionBGOut,
  animateHUDMenuOptionIconIn,
  animateHUDMenuOptionIconOut,
} from "./HUDMenuOptionAnimations";

interface UseHUDMenuOptionLogicReturnTypes {
  handlePointerOut: () => void;
  handlePointerOver: () => void;
  hudMenuOptionBGRef: RefDivType;
  hudMenuOptionIconRef: RefImageType;
}

const useHUDMenuOptionLogic = ({
  optionData,
  menuActive,
  setActiveHoveredHudMenuOption,
}: HUDMenuOptionPropTypes): UseHUDMenuOptionLogicReturnTypes => {
  // Refs
  const hudMenuOptionBGRef: RefDivType = useRef(null);
  const hudMenuOptionIconRef: RefImageType = useRef(null);

  // Handlers
  const handlePointerOver = useCallback((): void => {
    if (menuActive) return;
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;

    setActiveHoveredHudMenuOption(optionData.name);
    animateHUDMenuOptionBGIn(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconIn(
      hudMenuOptionIconRef.current,
      optionData.animIconLanding,
    );
  }, [menuActive, optionData, setActiveHoveredHudMenuOption]);

  const handlePointerOut = useCallback((): void => {
    if (menuActive) return;
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;

    setActiveHoveredHudMenuOption(null);
    animateHUDMenuOptionBGOut(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconOut(hudMenuOptionIconRef.current);
  }, [menuActive, setActiveHoveredHudMenuOption]);

  return {
    handlePointerOut,
    handlePointerOver,
    hudMenuOptionBGRef,
    hudMenuOptionIconRef,
  };
};

export { useHUDMenuOptionLogic };
