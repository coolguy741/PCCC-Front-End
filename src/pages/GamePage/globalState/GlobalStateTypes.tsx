import { AchievementModuleTypes } from "./modules/AchievementModule/AchievementModuleTypes";
import { CameraModuleTypes } from "./modules/CameraModule.tsx/CameraModuleTypes";
import { CursorModuleTypes } from "./modules/CursorModule.tsx/CursorModuleTypes";
import { DevelopmentModuleTypes } from "./modules/DevelopmentModule/DevelopmentModuleTypes";
import { InteractiveGameEntityModuleTypes } from "./modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { InventoryModuleTypes } from "./modules/InventoryModule/InventoryModuleTypes";
import { LocationModuleTypes } from "./modules/LocationModule/LocationModuleTypes";

export interface GlobalStateTypes
  extends LocationModuleTypes,
    CursorModuleTypes,
    CameraModuleTypes,
    InventoryModuleTypes,
    DevelopmentModuleTypes,
    AchievementModuleTypes,
    InteractiveGameEntityModuleTypes {}

export type SetState<T extends object> = (
  partial: Partial<T> | ((state: T) => void),
  replace?: boolean,
) => void;

export type GetState<T extends object> = () => T;

export type globalStateApiType = {
  set: SetState<GlobalStateTypes>;
  get: GetState<GlobalStateTypes>;
};
