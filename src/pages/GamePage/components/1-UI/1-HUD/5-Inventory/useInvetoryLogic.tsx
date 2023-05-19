import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefBooleanType, RefDivType } from "../../../../shared/Types/RefTypes";
import { animateInventoryIn, animateInventoryOut } from "./InventoryAnimations";

// Types
interface UseInventoryLogicReturnTypes {
  inventoryContainerRef: RefDivType;
}

const useInventoryLogic = (): UseInventoryLogicReturnTypes => {
  // Refs
  const inventoryContainerRef: RefDivType = useRef(null);
  const inventoryIsInRef: RefBooleanType = useRef(false);

  // Global State
  const { activeHoveredHudMenuOption } = useGlobalState(
    (state) => ({
      activeHoveredHudMenuOption: state.activeHoveredHudMenuOption,
    }),
    shallow,
  );

  const handleAnimateInventory = useCallback((): void => {
    if (!inventoryContainerRef.current) return;

    if (activeHoveredHudMenuOption === "inventory") {
      inventoryIsInRef.current = true;
      animateInventoryIn(inventoryContainerRef.current);
    } else if (inventoryIsInRef.current) {
      inventoryIsInRef.current = false;
      animateInventoryOut(inventoryContainerRef.current);
    }
  }, [activeHoveredHudMenuOption]);

  useEffect(handleAnimateInventory, [
    handleAnimateInventory,
    activeHoveredHudMenuOption,
  ]);

  return {
    inventoryContainerRef,
  };
};

export { useInventoryLogic };
