import { AchievementModuleTypes } from "./modules/AchievementModule/AchievementModuleTypes";
import { CameraModuleTypes } from "./modules/CameraModule.tsx/CameraModuleTypes";
import { DevelopmentModuleTypes } from "./modules/DevelopmentModule/DevelopmentModuleTypes";
import { InventoryModuleTypes } from "./modules/InventoryModule/InventoryModuleTypes";
import { LocationModuleTypes } from "./modules/LocationModule/LocationModuleTypes";

export interface GlobalStateTypes
  extends LocationModuleTypes,
    DevelopmentModuleTypes,
    AchievementModuleTypes,
    InventoryModuleTypes,
    CameraModuleTypes {}

export type SetState<T extends object> = (
  partial: Partial<T> | ((state: T) => void),
  replace?: boolean,
) => void;

export type GetState<T extends object> = () => T;

export type globalStateApiType = {
  set: SetState<GlobalStateTypes>;
  get: GetState<GlobalStateTypes>;
};
