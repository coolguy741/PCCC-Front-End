// import { mergeDeepLeft } from "ramda";
import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { GetState, GlobalStateTypes, SetState } from "./GlobalStateTypes";
import { AchievementModule } from "./modules/AchievementModule/AchievementModule";
import { AudioModule } from "./modules/AudioModule/AudioModule";
import { CameraModule } from "./modules/CameraModule.tsx/CameraModule";
import { DevelopmentModule } from "./modules/DevelopmentModule/DevelopmentModule";
import { InteractiveGameEntityModule } from "./modules/InteractiveGameEntityModule/InteractiveGameEntityModule";
import { InventoryModule } from "./modules/InventoryModule/InventoryModule";
import { LocationModule } from "./modules/LocationModule/LocationModule";
import { SettingsModule } from "./modules/SettingsModule/SettingsModule";
import { UIModule } from "./modules/UIModule/UIModule";

const storeModules = (
  set: SetState<GlobalStateTypes>,
  get: GetState<GlobalStateTypes>,
) => ({
  ...UIModule({ set, get }),
  ...AudioModule({ set, get }),
  ...CameraModule({ set, get }),
  ...LocationModule({ set, get }),
  ...SettingsModule({ set, get }),
  ...InventoryModule({ set, get }),
  ...AchievementModule({ set, get }),
  ...DevelopmentModule({ set, get }),
  ...InteractiveGameEntityModule({ set, get }),
});

const immerWrapper = immer<GlobalStateTypes>(
  // @ts-ignore
  (set: SetState<GlobalStateTypes>, get: GetState<GlobalStateTypes>) =>
    storeModules(set, get),
);

// const persistWrapper = persist(immerWrapper, {
//   name: "pccc-game-state",
//   getStorage: () => {
//     return localStorage;
//   },
//   merge: (persistedState, currentState) => {
//     return mergeDeepLeft(persistedState as object, currentState);
//   },
// });

// const devtoolsWrapper = devtools(persistWrapper);

const useGlobalState = create(immerWrapper);

export { useGlobalState };
