import { globalStateApiType } from "../../GlobalStateTypes";
import { InventoryItemImgName } from "./InventoryModuleTypes";

const InventoryModule = ({ set, get }: globalStateApiType) => {
  return {
    //   activeInventory: InitInventory,
    //   setUpdateActiveInventory: (targetKey: string, newValue: boolean) => {
    //     set((state: GlobalStateTypes) => {
    //       const updateNestedValueHelper = (
    //         obj: NestedInventoryObject,
    //         targetKey: string,
    //         newValue: boolean,
    //       ): void => {
    //         for (const key in obj) {
    //           const value = obj[key as keyof NestedInventoryObject];
    //           if (typeof value === "boolean") {
    //             if (key === targetKey) {
    //               obj[key as keyof NestedInventoryObject] = newValue;
    //             }
    //           } else if (typeof value === "object") {
    //             updateNestedValueHelper(
    //               value as NestedInventoryObject,
    //               targetKey,
    //               newValue,
    //             );
    //           }
    //         }
    //       };

    //       updateNestedValueHelper(state.activeInventory, targetKey, newValue);
    //     });
    //   },
    // };

    // activeInventory: InitInventory,
    activeToolInventory: [],
    setActiveToolInventory: (newTool: InventoryItemImgName) => {
      const newItem = { itemName: newTool };
      set((state) => {
        state.activeToolInventory = [...state.activeToolInventory, newItem];
      });
    },

    activeIngredientInventory: [],
    setActiveIngredientInventory: (newIngredient: InventoryItemImgName) => {
      const newItem = { itemName: newIngredient };
      set((state) => {
        state.activeIngredientInventory = [
          ...state.activeIngredientInventory,
          newItem,
        ];
      });
    },

    activeMiscInventory: [],
    setActiveMiscInventory: (newMisc: InventoryItemImgName) => {
      const newItem = { itemName: newMisc };
      set((state) => {
        state.activeMiscInventory = [...state.activeMiscInventory, newItem];
      });
    },
  };
};

export { InventoryModule };
