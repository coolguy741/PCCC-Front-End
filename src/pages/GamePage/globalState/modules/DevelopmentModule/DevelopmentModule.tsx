import { globalStateApiType } from "../../GlobalStateTypes";

const DevelopmentModule = ({ set, get }: globalStateApiType) => {
  return {
    dynamicEnvironmentMap: null,
    setDynamicEnvironmentMap: (newEnvironmentMap: string) => {
      set({ dynamicEnvironmentMap: newEnvironmentMap });
    },

    dynamicGLB: null,
    setDynamicGLB: (newGLB: string) => {
      set({ dynamicGLB: newGLB });
    },

    dynamicGarden: null,
    setDynamicGarden: (newGarden: string) => {
      set({ dynamicGarden: newGarden });
    },

    isDebugUIVisible: true,
    setIsDebugUIVisible: (isDebugUIVisible: boolean) => {
      set({ isDebugUIVisible });
    },

    pgVideo: null,
    setPGVideo: (newPGVideo: HTMLVideoElement) => {
      set({ pgVideo: newPGVideo });
    },

    pgVideoLoaded: false,
    setPGVideoLoaded: (pgVideoLoaded: boolean) => {
      set({ pgVideoLoaded });
    },
  };
};

export { DevelopmentModule };
