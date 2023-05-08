import { globalStateApiType } from "../../GlobalStateTypes";
import { InteractiveGameEntityTypes } from "./InteractiveGameEntityModuleTypes";

const InteractiveGameEntityModule = ({ set, get }: globalStateApiType) => {
  return {
    isHoveringEntity: false,
    setIsHoveringEntity: (isHoveringEntity: boolean) => {
      set({ isHoveringEntity });
    },

    activeHoveredEntity: null,
    setActiveHoveredEntity: (newHoveredEntity: InteractiveGameEntityTypes) => {
      set({ activeHoveredEntity: newHoveredEntity });
    },
  };
};

export { InteractiveGameEntityModule };
