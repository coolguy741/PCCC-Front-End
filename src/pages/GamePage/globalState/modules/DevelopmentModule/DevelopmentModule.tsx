import { globalStateApiType } from "../../GlobalStateTypes";

const DevelopmentModule = ({ set, get }: globalStateApiType) => {
  return {
    dynamicEnvironmentMap: null,
    setDynamicEnvironmentMap: (newEnvironmentMap: string) => {
      set({ dynamicEnvironmentMap: newEnvironmentMap });
    },

    isDebugUIVisible: false,
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
