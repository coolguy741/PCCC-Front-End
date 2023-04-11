import { globalStateApiType } from '../../GlobalStateTypes';

import {
  gardenHotspotKeys,
  initGardenHotSpotKey,
  initKitchenHotSpotKey,
  initLocationKey,
  kitchenHotspotKeys,
  locationKeys,
} from './LocationModuleDefines';

import {
  gardenHotspotKeyType,
  kitchenHotspotKeyType,
  locationKeyType,
} from './LocationModuleTypes';

const LocationModule = ({ set, get }: globalStateApiType) => {
  return {
    locationKeys,

    gardenHotspotKeys,

    kitchenHotspotKeys,

    activeLocation: initLocationKey,
    setActiveLocation: (newLocation: locationKeyType) => {
      set({ activeLocation: newLocation });
    },

    activeGardenHotSpot: initGardenHotSpotKey,
    setActiveGardenHotSpot: (newGardenHotSpot: gardenHotspotKeyType) => {
      set({ activeGardenHotSpot: newGardenHotSpot });
    },

    activeKitchenHotSpot: initKitchenHotSpotKey,
    setActiveKitchenHotSpot: (newKitchenHotSpot: kitchenHotspotKeyType) => {
      set({ activeKitchenHotSpot: newKitchenHotSpot });
    },
  };
};

export { LocationModule };
