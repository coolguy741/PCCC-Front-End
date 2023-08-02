import { FC, memo } from "react";
import StaticSVGLoader from "../../../5-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import Equipped from "../4-Equipped/Equipped";

import InventoryCategoryParent from "../5-InventoryCategories/0-InventoryCategoryParent/InventoryCategoryParent";
import { InventoryPagesSVG } from "../6-InventorySVGAssets/InventoryPagesSVG";
import InventoryStyleContainer from "./InventoryStyleContainer";
import { useInventoryLogic } from "./useInvetoryLogic";

const Inventory: FC = () => {
  // Hooks
  const { handlePointerOut, handlePointerOver, inventoryContainerRef } =
    useInventoryLogic();

  return (
    <InventoryStyleContainer
      ref={inventoryContainerRef}
      onPointerEnter={handlePointerOver}
      onPointerLeave={handlePointerOut}
    >
      <div className="inventory-book">
        <div className="inventory-wood">
          <img
            alt={"inventory-bg"}
            draggable={false}
            src={"/game_assets/ui_images/inventory/wood_bg.webp"}
          />
        </div>

        <Equipped />

        <div className="inventory-pages-shadow" />

        <div className="inventory-pages">
          <StaticSVGLoader
            id="inventory-pages-svg"
            svgPath={InventoryPagesSVG}
          />
          <img
            className="inventory-pages-overlay"
            alt={"pages-overlay"}
            draggable={false}
            src={"/game_assets/ui_images/inventory/cropped.webp"}
          />
        </div>
        <InventoryCategoryParent />
      </div>
    </InventoryStyleContainer>
  );
};

export default memo(Inventory);
