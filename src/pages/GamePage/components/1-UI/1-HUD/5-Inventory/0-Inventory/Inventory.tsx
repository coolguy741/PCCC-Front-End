import { FC, memo } from "react";
import StaticSVGLoader from "../../../3-Reusable/0-StaticSVGLoader.tsx/StaticSVGLoader";
import Equipped from "../4-Equipped/Equipped";

import InventoryCategoryParent from "../5-InventoryCategories/0-InventoryCategoryParent/InventoryCategoryParent";
import { InventoryPagesSVG } from "../6-SVGAssets/InventoryPagesSVG";
import { InventoryWoodBGSVG } from "../6-SVGAssets/InventoryWoodBGSVG";
import InventoryStyleContainer from "./InventoryStyleContainer";

const Inventory: FC = () => {
  // Hooks
  // const { inventoryContainerRef } = useInventoryLogic();

  return (
    <InventoryStyleContainer>
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
