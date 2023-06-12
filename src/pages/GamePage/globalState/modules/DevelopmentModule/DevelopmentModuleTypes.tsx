export interface DevelopmentModuleTypes {
  dynamicEnvironmentMap: string | null;
  setDynamicEnvironmentMap: (newEnvironmentMap: string) => void;
  dynamicGLB: string | null;
  setDynamicGLB: (newGLB: string) => void;
  dynamicGarden: string | null;
  setDynamicGarden: (newGarden: string) => void;
  isDebugUIVisible: boolean;
  setIsDebugUIVisible: (isDebugUIVisible: boolean) => void;
  pgVideo: unknown;
  setPGVideo: (newPGVideo: HTMLVideoElement) => void;
  pgVideoLoaded: boolean;
  setPGVideoLoaded: (pgVideoLoaded: boolean) => void;
  programBakeShadows: boolean;
  setProgramBakeShadows: (programBakeShadows: boolean) => void;
  isDebugMode: boolean;
  setIsDebugMode: (isDebugMode: boolean) => void;
  dynamicKitchen: string | null;
  setDynamicKitchen: (newKitchen: string) => void;
}
