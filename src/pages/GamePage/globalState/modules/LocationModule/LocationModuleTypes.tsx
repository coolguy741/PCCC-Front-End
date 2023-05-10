export type locationKeyType = "Gate" | "Kitchen" | "Garden";

export type gardenHotspotKeyType =
  | "BigTree"
  | "ToolRack"
  | "PlantBox"
  | "Overview"
  | "GardenHose"
  | "SoilCorner";

export type kitchenHotspotKeyType =
  | "Sink"
  | "Oven"
  | "Pantry"
  | "Locker"
  | "Fridge"
  | "Overview"
  | "Workspace"
  | "HydroponicsLib";

export interface LocationModuleTypes {
  locationKeys: locationKeyType[];

  gardenHotspotKeys: gardenHotspotKeyType[];

  kitchenHotspotKeys: kitchenHotspotKeyType[];

  activeLocation: locationKeyType;
  setActiveLocation: (newLocation: locationKeyType) => void;

  activeGardenHotSpot: gardenHotspotKeyType;
  setActiveGardenHotSpot: (newGardenHotSpot: gardenHotspotKeyType) => void;

  activeKitchenHotSpot: kitchenHotspotKeyType;
  setActiveKitchenHotSpot: (newKitchenHotSpot: kitchenHotspotKeyType) => void;

  isActivelyTraveling: boolean;
  setIsActivelyTraveling: (isActivelyTraveling: boolean) => void;
}
