import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefDivType, RefImageType } from "../../../../shared/Types/RefTypes";
import {
  animateHUDMenuOptionBGIn,
  animateHUDMenuOptionBGOut,
  animateHUDMenuOptionIconIn,
  animateHUDMenuOptionIconOut,
} from "./HUDMenuOptionAnimations";
import {
  UseHUDMenuOptionLogicReturnTypes,
  UseHUDMenuOptionLogicType,
} from "./HUDMenuOptionTypes";

const useHUDMenuOptionLogic: UseHUDMenuOptionLogicType = ({
  optionData,
  menuActive,
  activeHoveredHudMenuOption,
  setActiveHoveredHudMenuOption,
}): UseHUDMenuOptionLogicReturnTypes => {
  // Refs
  const hudMenuOptionBGRef: RefDivType = useRef(null);
  const hudMenuOptionIconRef: RefImageType = useRef(null);

  const { isSettingsPanelOpen, setIsSettingsPanelOpen } = useGlobalState(
    (state) => ({
      isSettingsPanelOpen: state.isSettingsPanelOpen,
      setIsSettingsPanelOpen: state.setIsSettingsPanelOpen,
    }),
    shallow,
  );

  // Handlers
  const onPointerEnter: ConstantVoidFunctionType = useCallback((): void => {
    if (menuActive) return;
    if (isSettingsPanelOpen) return;
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;

    setActiveHoveredHudMenuOption(optionData.name);
    animateHUDMenuOptionBGIn(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconIn(
      hudMenuOptionIconRef.current,
      optionData.animIconLanding,
    );

    if (optionData.name === "settings") {
      setIsSettingsPanelOpen(true);
    }
  }, [
    menuActive,
    optionData,
    isSettingsPanelOpen,
    setIsSettingsPanelOpen,
    setActiveHoveredHudMenuOption,
  ]);

  const onPointerLeave: ConstantVoidFunctionType = useCallback((): void => {
    if (menuActive) return;
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;

    if (
      activeHoveredHudMenuOption !== "inventory" &&
      activeHoveredHudMenuOption !== "settings"
    ) {
      setActiveHoveredHudMenuOption(null);
      animateHUDMenuOptionBGOut(hudMenuOptionBGRef.current);
      animateHUDMenuOptionIconOut(hudMenuOptionIconRef.current);
    }
  }, [menuActive, setActiveHoveredHudMenuOption, activeHoveredHudMenuOption]);

  useEffect(() => {
    if (!hudMenuOptionBGRef.current) return;
    if (!hudMenuOptionIconRef.current) return;
    if (isSettingsPanelOpen) return;
    if (optionData.name !== "settings") return;
    setActiveHoveredHudMenuOption(null);
    animateHUDMenuOptionBGOut(hudMenuOptionBGRef.current);
    animateHUDMenuOptionIconOut(hudMenuOptionIconRef.current);
  }, [
    optionData,
    onPointerLeave,
    isSettingsPanelOpen,
    setActiveHoveredHudMenuOption,
  ]);

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
