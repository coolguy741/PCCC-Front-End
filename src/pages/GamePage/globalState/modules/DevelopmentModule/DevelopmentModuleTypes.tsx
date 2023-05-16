export interface DevelopmentModuleTypes {
  dynamicEnvironmentMap: string | null;
  setDynamicEnvironmentMap: (newEnvironmentMap: string) => void;
  isDebugUIVisible: boolean;
  setIsDebugUIVisible: (isDebugUIVisible: boolean) => void;
  pgVideo: unknown;
  setPGVideo: (newPGVideo: HTMLVideoElement) => void;
  pgVideoLoaded: boolean;
  setPGVideoLoaded: (pgVideoLoaded: boolean) => void;
}
