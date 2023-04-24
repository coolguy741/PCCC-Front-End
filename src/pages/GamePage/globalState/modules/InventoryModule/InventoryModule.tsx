import { globalStateApiType } from "../../GlobalStateTypes";
import { InitInventory } from "./InventoryModuleDefines";
import { InventoryObjectType } from "./InventoryModuleTypes";

const InventoryModule = ({ set, get }: globalStateApiType) => {
  return {
    activeInventory: InitInventory,
    setUpdateActiveInventory: (
      keyName: string,
      newValue: boolean,
      inventoryObj: InventoryObjectType,
    ) => {
      //   const queue = [inventoryObj];
      //   while (queue.length > 0) {
      //     const currentObj = queue.shift();
      //     for (let key in currentObj) {
      //       if (key === keyName) {
      //         currentObj[key] = newValue;
      //         set((state: GlobalStateTypes) => {
      //           state.activeInventory = newValue;
      //         });
      //         return;
      //       } else if (typeof currentObj[key] === "object") {
      //         queue.push(currentObj[key]);
      //       }
      //     }
      //   }
    },
  };
};

export { InventoryModule };
