type GardenTools =
  | "Hat"
  | "Rake"
  | "Gloves"
  | "Shovel"
  | "TopSoil"
  | "SunGlasses"
  | "Wheelbarrow"
  | "WateringCan"
  | "BookWithAnswer";

type Ingredients = "Fruit" | "Vegetables" | "Fungi" | "Herbs" | "Miscellaneous";

type KitchenTools =
  | "Apron"
  | "Plate"
  | "Knife"
  | "HairTie"
  | "TeaTowel"
  | "LargeBowl"
  | "ServingBowl"
  | "MeasuringCup"
  | "CuttingBoard"
  | "EmptyTeaKettle"
  | "MeasuringSpoons";

export type InventoryItemImgName =
  | "hoe"
  | "rake"
  | "shovel"
  | "drawer"
  | "wood_glue"
  | "sunglasses"
  | "pitch_fork"
  | "paint_cans"
  | "wood_scraps"
  | "seed_packets"
  | "gardening_hat"
  | "blue_straw_hat"
  | "green_straw_hat"
  | "yellow_straw_hat"
  | "gardening_gloves"
  | "screwdriver_slotted"
  | "screwdriver_phillips";

export type InventoryKeyValueType = {
  key: string;
  value: boolean;
};

export type FlattenedInventoryType = InventoryKeyValueType[];

export type NestedInventoryObject = {
  [key: string]: boolean | NestedInventoryObject;
};

export type InventoryObjectType = {
  GardenTools: Record<GardenTools, boolean>;
  KitchenTools: Record<KitchenTools, boolean>;
  Ingredients: Record<Ingredients, NestedInventoryObject>;
};

export type InventoryObjectKey = keyof InventoryObjectType;

export interface InventoryCategoryDataTypes {
  itemName: InventoryItemImgName;
}

export interface InventoryModuleTypes {
  // activeInventory: InventoryObjectType;
  // setUpdateActiveInventory: (keyName: string, newValue: boolean) => void;

  activeToolInventory: InventoryCategoryDataTypes[];
  setActiveToolInventory: (newTool: InventoryItemImgName) => void;

  activeIngredientInventory: InventoryCategoryDataTypes[];
  setActiveIngredientInventory: (newIngredient: InventoryItemImgName) => void;

  activeMiscInventory: InventoryCategoryDataTypes[];
  setActiveMiscInventory: (newMisc: InventoryItemImgName) => void;
}
