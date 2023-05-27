import { FC, memo } from "react";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import Equipped from "../4-Equipped/Equipped";

import InventoryCategoryParent from "../5-InventoryCategories/0-InventoryCategoryParent/InventoryCategoryParent";
import { InventoryPagesSVG } from "../6-InventorySVGAssets/InventoryPagesSVG";
import { InventoryWoodBGSVG } from "../6-InventorySVGAssets/InventoryWoodBGSVG";
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
          <StaticSVGLoader
            id="inventory-wood-svg"
            svgPath={InventoryWoodBGSVG}
          />
        </div>

        <Equipped />

        <div className="inventory-pages-shadow" />

        <div className="inventory-pages">
          <StaticSVGLoader
            id="inventory-pages-svg"
            svgPath={InventoryPagesSVG}
          />
        </div>
        <InventoryCategoryParent />
      </div>
    </InventoryStyleContainer>
  );
};

export default memo(Inventory);
