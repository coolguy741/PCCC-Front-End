export type locationKeyType = 'Gate' | 'Kitchen' | 'Garden';

export type gardenHotspotKeyType =
  | 'BigTree'
  | 'ToolRack'
  | 'PlantBox'
  | 'GardeningHose'
  | 'SoilBagCorner';

export type kitchenHotspotKeyType =
  | 'Sink'
  | 'Oven'
  | 'Pantry'
  | 'Locker'
  | 'Fridge'
  | 'Workspace'
  | 'HydroponicsLib';

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
}
