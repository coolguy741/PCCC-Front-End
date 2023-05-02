import {
  gardenHotspotKeyType,
  kitchenHotspotKeyType,
  locationKeyType,
} from "./LocationModuleTypes";

const locationKeys: locationKeyType[] = ["Gate", "Kitchen", "Garden"];

const initLocationKey: locationKeyType = locationKeys[0];

const gardenHotspotKeys: gardenHotspotKeyType[] = [
  "BigTree",
  "ToolRack",
  "PlantBox",
  "GardenHose",
  "SoilCorner",
];

const initGardenHotSpotKey: gardenHotspotKeyType = gardenHotspotKeys[0];

const kitchenHotspotKeys: kitchenHotspotKeyType[] = [
  "Sink",
  "Oven",
  "Pantry",
  "Locker",
  "Fridge",
  "Workspace",
  "HydroponicsLib",
];

const initKitchenHotSpotKey: kitchenHotspotKeyType = kitchenHotspotKeys[0];

export {
  locationKeys,
  initLocationKey,
  gardenHotspotKeys,
  kitchenHotspotKeys,
  initGardenHotSpotKey,
  initKitchenHotSpotKey,
};
