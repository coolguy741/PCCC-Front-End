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

export interface InventoryModuleTypes {
  activeInventory: InventoryObjectType;
  setUpdateActiveInventory: (keyName: string, newValue: boolean) => void;
}
