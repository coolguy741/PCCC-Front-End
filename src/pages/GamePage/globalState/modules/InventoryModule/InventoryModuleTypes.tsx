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

export type InventoryItemAssetName =
  | "hoe"
  | "rake"
  | "shovel"
  | "drawer"
  | "pitchfork"
  | "wood_glue"
  | "sunglasses"
  | "paint_cans"
  | "wood_scraps"
  | "seed_packets"
  | "gardening_hat"
  | "red_hat"
  | "blue_overalls"
  | "orange_overalls"
  | "blue_hat"
  | "green_hat"
  | "gardening_gloves"
  | "slotted_screwdriver"
  | "phillips_screwdriver"
  | "gardening_and_sunglasses"
  | "blank";

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
  itemName: InventoryItemAssetName;
}

export interface InventoryModuleTypes {
  // activeInventory: InventoryObjectType;
  // setUpdateActiveInventory: (keyName: string, newValue: boolean) => void;

  activeToolInventory: InventoryCategoryDataTypes[];
  setActiveToolInventory: (newTool: InventoryItemAssetName) => void;

  activeIngredientInventory: InventoryCategoryDataTypes[];
  setActiveIngredientInventory: (newIngredient: InventoryItemAssetName) => void;

  activeMiscInventory: InventoryCategoryDataTypes[];
  setActiveMiscInventory: (newMisc: InventoryItemAssetName) => void;
}
