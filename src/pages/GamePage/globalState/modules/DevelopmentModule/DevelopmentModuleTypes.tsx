export interface DevelopmentModuleTypes {
  dynamicEnvironmentMap: string | null;
  setDynamicEnvironmentMap: (newEnvironmentMap: string) => void;
  isDebugUIVisible: boolean;
  setIsDebugUIVisible: (isDebugUIVisible: boolean) => void;
}
