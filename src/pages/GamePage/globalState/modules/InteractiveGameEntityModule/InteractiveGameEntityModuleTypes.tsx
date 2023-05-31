export type InteractiveGameEntityTypes =
  | "Hoe"
  | "Rake"
  | "Drawer"
  | "Shovel"
  | "Wood Glue"
  | "Sunglasses"
  | "Pitch Fork"
  | "Paint Cans"
  | "Wood Scraps"
  | "Seed Packets"
  | "Gardening Hat"
  | "Blue Straw Hat"
  | "Green Straw Hat"
  | "Gardening Gloves"
  | "Yellow Straw Hat"
  | "Screwdriver Slotted"
  | "Screwdriver Phillips";

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
