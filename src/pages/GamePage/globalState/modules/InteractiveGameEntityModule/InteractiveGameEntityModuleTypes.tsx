import { InventoryItemAssetName } from "../InventoryModule/InventoryModuleTypes";

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
  | "Blue Overalls"
  | "Orange Overalls"
  | "Red Straw Hat"
  | "Blue Straw Hat"
  | "Green Straw Hat"
  | "Gardening Gloves"
  | "Slotted Screwdriver"
  | "Phillips Screwdriver"
  | "Gardening Hat and Sunglasses";

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

  itemToRemoveFromScene: null | InventoryItemAssetName;
  setItemToRemoveFromScene: (
    itemToRemoveFromScene: InventoryItemAssetName | null,
  ) => void;
}
