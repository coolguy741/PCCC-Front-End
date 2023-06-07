import { globalStateApiType } from "../../GlobalStateTypes";
import { InventoryItemAssetName } from "../InventoryModule/InventoryModuleTypes";
import {
  CursorMenuOptionTypes,
  InteractiveGameEntityTypes,
} from "./InteractiveGameEntityModuleTypes";

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
    setHoveredSection: (hoveredSection: CursorMenuOptionTypes | null) => {
      set({ hoveredSection });
    },

    inspectActive: false,
    setInspectActive: (inspectActive: boolean) => {
      set({ inspectActive });
    },

    itemToRemoveFromScene: null,
    setItemToRemoveFromScene: (
      itemToRemoveFromScene: InventoryItemAssetName | null,
    ) => {
      set({ itemToRemoveFromScene });
    },
  };
};

export { InteractiveGameEntityModule };
