import { mergeDeepLeft } from "ramda";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { GetState, GlobalStateTypes, SetState } from "./GlobalStateTypes";
import { AchievementModule } from "./modules/AchievementModule/AchievementModule";
import { CameraModule } from "./modules/CameraModule.tsx/CameraModule";
import { DevelopmentModule } from "./modules/DevelopmentModule/DevelopmentModule";
import { InventoryModule } from "./modules/InventoryModule/InventoryModule";
import { LocationModule } from "./modules/LocationModule/LocationModule";

const storeModules = (
  set: SetState<GlobalStateTypes>,
  get: GetState<GlobalStateTypes>,
) => ({
  ...CameraModule({ set, get }),
  ...LocationModule({ set, get }),
  ...InventoryModule({ set, get }),
  ...AchievementModule({ set, get }),
  ...DevelopmentModule({ set, get }),
});

const immerWrapper = immer<GlobalStateTypes>(
  (set: SetState<GlobalStateTypes>, get: GetState<GlobalStateTypes>) =>
    storeModules(set, get),
);

const persistWrapper = persist(immerWrapper, {
  name: "pccc-game-state",
  getStorage: () => {
    return localStorage;
  },
  merge: (persistedState, currentState) => {
    return mergeDeepLeft(persistedState as object, currentState);
  },
});

const devtoolsWrapper = devtools(persistWrapper);

const useGlobalState = create(devtoolsWrapper);

export { useGlobalState };
