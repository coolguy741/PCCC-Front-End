import { useCallback, useEffect, useRef } from "react";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefDivType, RefImageType } from "../../../../shared/Types/RefTypes";
import { HUDMenuOptionPropTypes } from "./HUDMenuOption";
import {
  animateHUDMenuOptionBGIn,
  animateHUDMenuOptionBGOut,
  animateHUDMenuOptionIconIn,
  animateHUDMenuOptionIconOut,
} from "./HUDMenuOptionAnimations";

interface UseHUDMenuOptionLogicReturnTypes {
  onPointerLeave: ConstantVoidFunctionType;
  onPointerEnter: ConstantVoidFunctionType;
  hudMenuOptionBGRef: RefDivType;
  hudMenuOptionIconRef: RefImageType;
}

const useHUDMenuOptionLogic = ({
  optionData,
  menuActive,
  activeHoveredHudMenuOption,
  setActiveHoveredHudMenuOption,
}: HUDMenuOptionPropTypes): UseHUDMenuOptionLogicReturnTypes => {
  // Refs
  const hudMenuOptionBGRef: RefDivType = useRef(null);
  const hudMenuOptionIconRef: RefImageType = useRef(null);

  // Handlers
  const onPointerEnter: ConstantVoidFunctionType = useCallback((): void => {
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

  const onPointerLeave: ConstantVoidFunctionType = useCallback((): void => {
    if (menuActive) return;
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;

    if (activeHoveredHudMenuOption !== "inventory") {
      setActiveHoveredHudMenuOption(null);
      animateHUDMenuOptionBGOut(hudMenuOptionBGRef.current);
      animateHUDMenuOptionIconOut(hudMenuOptionIconRef.current);
    }
  }, [menuActive, setActiveHoveredHudMenuOption, activeHoveredHudMenuOption]);

  // TODO: Kanui - This only covers the inventory condition
  useEffect(() => {
    if (optionData.name !== "inventory") return;
    if (activeHoveredHudMenuOption !== null) return;
    if (menuActive) return;
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;

    animateHUDMenuOptionBGOut(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconOut(hudMenuOptionIconRef.current);
  }, [optionData, menuActive, activeHoveredHudMenuOption]);

  return {
    onPointerLeave,
    onPointerEnter,
    hudMenuOptionBGRef,
    hudMenuOptionIconRef,
  };
};

export { useHUDMenuOptionLogic };
