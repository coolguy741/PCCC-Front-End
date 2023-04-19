import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { GlobalStateTypes } from "./GlobalStateTypes";
import { AchievementModule } from "./modules/AchievementModule/AchievementModule";
import { DevelopmentModule } from "./modules/DevelopmentModule/DevelopmentModule";
import { LocationModule } from "./modules/LocationModule/LocationModule";

const useGlobalState = create(
  immer<GlobalStateTypes>((set, get) => ({
    ...LocationModule({ set, get }),
    ...AchievementModule({ set, get }),
    ...DevelopmentModule({ set, get }),
  })),
);

export { useGlobalState };
