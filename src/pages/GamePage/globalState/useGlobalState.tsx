import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { GetState, GlobalStateTypes, SetState } from "./GlobalStateTypes";
import { AchievementModule } from "./modules/AchievementModule/AchievementModule";
import { AudioModule } from "./modules/AudioModule/AudioModule";
import { CameraModule } from "./modules/CameraModule.tsx/CameraModule";
import { DevelopmentModule } from "./modules/DevelopmentModule/DevelopmentModule";
import { InteractiveGameEntityModule } from "./modules/InteractiveGameEntityModule/InteractiveGameEntityModule";
import { InventoryModule } from "./modules/InventoryModule/InventoryModule";
import { LocationModule } from "./modules/LocationModule/LocationModule";
import { RecipeModule } from "./modules/RecipeModule/RecipeModule";
import { SettingsModule } from "./modules/SettingsModule/SettingsModule";
import { UIModule } from "./modules/UIModule/UIModule";

const storeModules = (
  set: SetState<GlobalStateTypes>,
  get: GetState<GlobalStateTypes>,
) => ({
  ...UIModule({ set, get }),
  ...AudioModule({ set, get }),
  ...CameraModule({ set, get }),
  ...RecipeModule({ set, get }),
  ...LocationModule({ set, get }),
  ...SettingsModule({ set, get }),
  ...InventoryModule({ set, get }),
  ...AchievementModule({ set, get }),
  ...DevelopmentModule({ set, get }),
  ...InteractiveGameEntityModule({ set, get }),
});

const immerWrapper = immer<GlobalStateTypes>(
  (set: SetState<GlobalStateTypes>, get: GetState<GlobalStateTypes>) =>
    storeModules(set, get),
);

const useGlobalState = create(immerWrapper);

export { useGlobalState };
