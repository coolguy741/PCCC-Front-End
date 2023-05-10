export type InteractiveGameEntityTypes =
  | "Berries"
  | "Branches"
  | "Bee Hive Top"
  | "Beekeeper Outfit + Hat"
  | "Fully Grown Blueberries";

export interface InteractiveGameEntityModuleTypes {
  isHoveringEntity: boolean;
  setIsHoveringEntity: (isHoveringEntity: boolean) => void;

  activeHoveredEntity: null | InteractiveGameEntityTypes;
  setActiveHoveredEntity: (
    newHoveredEntity: InteractiveGameEntityTypes,
  ) => void;

  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;

  hoveredSection: null | string;
  setHoveredSection: (hoveredSection: string | null) => void;
}
