import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefBooleanType, RefDivType } from "../../../../shared/Types/RefTypes";
import { animateInventoryIn, animateInventoryOut } from "./InventoryAnimations";
import InventoryStyleContainer from "./InventoryStyleContainer";

const Inventory: FC = () => {
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

  const handleAnimateInventory = useCallback(() => {
    if (!inventoryContainerRef.current) return;

    if (activeHoveredHudMenuOption === "inventory") {
      inventoryIsInRef.current = true;
      animateInventoryIn(inventoryContainerRef.current);
    } else if (inventoryIsInRef.current) {
      inventoryIsInRef.current = false;
      animateInventoryOut(inventoryContainerRef.current);
      console.log("hye");
    }
  }, [activeHoveredHudMenuOption]);

  useEffect(handleAnimateInventory, [
    handleAnimateInventory,
    activeHoveredHudMenuOption,
  ]);

  return (
    <InventoryStyleContainer ref={inventoryContainerRef}>
      <img
        alt={"temp_inventory"}
        draggable={false}
        src={"/game_assets/ui_images/inventory/temp_inventory.webp"}
      />
    </InventoryStyleContainer>
  );
};

export default memo(Inventory);
