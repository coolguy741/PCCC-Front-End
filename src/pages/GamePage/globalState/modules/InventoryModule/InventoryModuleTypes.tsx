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

export interface NestedInventoryObject {
  [key: string]: boolean | NestedInventoryObject;
}

export interface InventoryObjectType {
  GardenTools: { [K in GardenTools]: boolean };
  KitchenTools: { [K in KitchenTools]: boolean };
  Ingredients: { [K in Ingredients]: NestedInventoryObject };
}

export type InventoryObjectKey = keyof InventoryObjectType;

export interface InventoryModuleTypes {
  activeInventory: InventoryObjectType;
  setUpdateActiveInventory: (
    keyName: string,
    newValue: boolean,
    inventoryObj: InventoryObjectType,
  ) => void;
}
