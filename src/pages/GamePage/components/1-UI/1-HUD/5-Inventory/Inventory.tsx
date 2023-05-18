import { FC, memo } from "react";
import InventoryStyleContainer from "./InventoryStyleContainer";
import { useInventoryLogic } from "./useInvetoryLogic";

const Inventory: FC = () => {
  // Hooks
  const { inventoryContainerRef } = useInventoryLogic();

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
