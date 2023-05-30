export type InteractiveGameEntityTypes =
  | "Gardening Hat"
  | "Shovel"
  | "Gardening Gloves";

export type CursorMenuOptionTypes = "inspect" | "pickup" | "dynamic" | "exit";

export interface InteractiveGameEntityModuleTypes {
  isHoveringEntity: boolean;
  setIsHoveringEntity: (isHoveringEntity: boolean) => void;

  activeHoveredEntity: null | InteractiveGameEntityTypes;
  setActiveHoveredEntity: (
    newHoveredEntity: InteractiveGameEntityTypes,
  ) => void;

  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;

  hoveredSection: null | CursorMenuOptionTypes;
  setHoveredSection: (hoveredSection: CursorMenuOptionTypes | null) => void;

  inspectActive: boolean;
  setInspectActive: (inspectActive: boolean) => void;
}
