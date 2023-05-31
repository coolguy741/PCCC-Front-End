import {
  gardenHotspotKeyType,
  kitchenHotspotKeyType,
  locationKeyType,
} from "./LocationModuleTypes";

const locationKeys: locationKeyType[] = ["Gate", "Kitchen", "Garden"];

// TODO: Kanui - Change this to the first locationKey
const initLocationKey: locationKeyType = locationKeys[0];
// const initLocationKey: locationKeyType = locationKeys[2];

const gardenHotspotKeys: gardenHotspotKeyType[] = [
  "BigTree",
  "ToolRack",
  "PlantBox",
  "GardenHose",
  "SoilCorner",
];

// TODO: Kanui - Change this to the first gardenHotspotKey
const initGardenHotSpotKey: gardenHotspotKeyType = gardenHotspotKeys[0];
// const initGardenHotSpotKey: gardenHotspotKeyType = gardenHotspotKeys[1];

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
