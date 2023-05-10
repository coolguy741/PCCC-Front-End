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

    menuActive: false,
    setMenuActive: (menuActive: boolean) => {
      set({ menuActive });
    },

    hoveredSection: null,
    setHoveredSection: (hoveredSection: string | null) => {
      set({ hoveredSection });
    },
  };
};

export { InteractiveGameEntityModule };
