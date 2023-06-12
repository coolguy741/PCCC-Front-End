import { Vector2 } from "three";
import { ConstantVoidFunctionType } from "../../../../shared/Types/DefineTypes";
import { RefDivType, RefImageType } from "../../../../shared/Types/RefTypes";

// Constants
export interface HUDMenuOptionStyleObjectType {
  "--hud-menu-option-top": string;
  "--hud-menu-option-left": string;
  "--hud-menu-option-scale": string;
  "--hud-menu-option-right": string;
  "--hud-menu-option-bottom": string;
  "--hud-menu-option-bg-color": string;
  "--hud-menu-option-position": string;
  "--hud-menu-option-bg-scale": string;
  "--hud-menu-option-icon-scale": string;
  "--hud-menu-option-border-radius": string;
  "--hud-menu-option-bg-top-offset": string;
  "--hud-menu-option-bg-left-offset": string;
  "--hud-menu-option-bg-right-offset": string;
  "--hud-menu-option-icon-margin-top": string;
  "--hud-menu-option-bg-bottom-offset": string;
  "--hud-menu-option-icon-margin-left": string;
  "--hud-menu-option-icon-margin-right": string;
  "--hud-menu-option-icon-margin-bottom": string;
}

export interface HUDMenuOptionDataType {
  name: string;
  label: string;
  iconURL: string;
  animIconLanding: Vector2;
  styleObject: HUDMenuOptionStyleObjectType;
}

// Component
export interface HUDMenuOptionPropTypes {
  menuActive: boolean;
  optionData: HUDMenuOptionDataType;
  activeHoveredHudMenuOption: string | null;
  setActiveHoveredHudMenuOption: (
    activeHoveredHudMenuOption: string | null,
  ) => void;
}

// Component Logic
export interface UseHUDMenuOptionLogicReturnTypes {
  onPointerLeave: ConstantVoidFunctionType;
  onPointerEnter: ConstantVoidFunctionType;
  hudMenuOptionBGRef: RefDivType;
  hudMenuOptionIconRef: RefImageType;
}

export type UseHUDMenuOptionLogicType = ({
  optionData,
  menuActive,
  activeHoveredHudMenuOption,
  setActiveHoveredHudMenuOption,
}: HUDMenuOptionPropTypes) => UseHUDMenuOptionLogicReturnTypes;

// Animations
export type AnimateHUDMenuOptionBGType = (
  hudMenuOptionBG: HTMLDivElement,
) => void;

export type AnimateHUDMenuOptionIconInType = (
  hudMenuOptionIcon: HTMLImageElement,
  animIconLanding: Vector2,
) => void;

export type AnimateHUDMenuOptionIconOutType = (
  hudMenuOptionIcon: HTMLImageElement,
) => void;
