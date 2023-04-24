import { AchievementModuleTypes } from "./modules/AchievementModule/AchievementModuleTypes";
import { DevelopmentModuleTypes } from "./modules/DevelopmentModule/DevelopmentModuleTypes";
import { InventoryModuleTypes } from "./modules/InventoryModule/InventoryModuleTypes";
import { LocationModuleTypes } from "./modules/LocationModule/LocationModuleTypes";

export type globalStateApiType = { set: any; get: any };

export interface GlobalStateTypes
  extends LocationModuleTypes,
    DevelopmentModuleTypes,
    AchievementModuleTypes,
    InventoryModuleTypes {}
