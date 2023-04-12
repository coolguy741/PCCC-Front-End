import { globalStateApiType } from "../../GlobalStateTypes";

const DevelopmentModule = ({ set, get }: globalStateApiType) => {
  return {
    dynamicEnvironmentMap: null,
    setDynamicEnvironmentMap: (newEnvironmentMap: any) => {
      set({ dynamicEnvironmentMap: newEnvironmentMap });
    },
  };
};

export { DevelopmentModule };
