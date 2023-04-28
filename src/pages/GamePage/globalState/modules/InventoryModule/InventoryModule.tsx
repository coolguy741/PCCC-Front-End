import { globalStateApiType, GlobalStateTypes } from "../../GlobalStateTypes";
import { InitInventory } from "./InventoryModuleDefines";
import { NestedInventoryObject } from "./InventoryModuleTypes";

const InventoryModule = ({ set, get }: globalStateApiType) => {
  return {
    activeInventory: InitInventory,
    setUpdateActiveInventory: (targetKey: string, newValue: boolean) => {
      set((state: GlobalStateTypes) => {
        const updateNestedValueHelper = (
          obj: NestedInventoryObject,
          targetKey: string,
          newValue: boolean,
        ): void => {
          for (const key in obj) {
            const value = obj[key as keyof NestedInventoryObject];
            if (typeof value === "boolean") {
              if (key === targetKey) {
                obj[key as keyof NestedInventoryObject] = newValue;
              }
            } else if (typeof value === "object") {
              updateNestedValueHelper(
                value as NestedInventoryObject,
                targetKey,
                newValue,
              );
            }
          }
        };

        updateNestedValueHelper(state.activeInventory, targetKey, newValue);
      });
    },
  };
};

export { InventoryModule };
