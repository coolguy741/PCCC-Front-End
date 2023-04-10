import { DevelopmentModuleTypes } from "./modules/DevelopmentModule.tsx/DevelopmentModuleTypes";
import { LocationModuleTypes } from "./modules/LocationModule/LocationModuleTypes";

export type globalStateApiType = { set: any; get: any };

export interface GlobalStateTypes
  extends LocationModuleTypes,
    DevelopmentModuleTypes {}
