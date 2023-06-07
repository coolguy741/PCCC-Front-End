import { AchievementModuleTypes } from "./modules/AchievementModule/AchievementModuleTypes";
import { AudioModuleTypes } from "./modules/AudioModule/AudioModuleTypes";
import { CameraModuleTypes } from "./modules/CameraModule.tsx/CameraModuleTypes";
import { DevelopmentModuleTypes } from "./modules/DevelopmentModule/DevelopmentModuleTypes";
import { InteractiveGameEntityModuleTypes } from "./modules/InteractiveGameEntityModule/InteractiveGameEntityModuleTypes";
import { InventoryModuleTypes } from "./modules/InventoryModule/InventoryModuleTypes";
import { LocationModuleTypes } from "./modules/LocationModule/LocationModuleTypes";
import { UIModuleTypes } from "./modules/UIModule/UIModuleTypes";

export interface GlobalStateTypes
  extends UIModuleTypes,
    LocationModuleTypes,
    CameraModuleTypes,
    AudioModuleTypes,
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
