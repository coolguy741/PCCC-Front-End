import { FC, memo, useMemo } from "react";
import {
  handleRenderInventoryItem,
  tempIngredientsData,
  tempMiscData,
  tempToolsData,
} from "./InventoryCategoryDefines";
import InventoryCategoryStyleContainer from "./InventoryCategoryStyleContainer";

// Types
type InventoryCategoryTitleTypes = "Tools" | "Ingredients" | "Misc";

interface InventoryCategoryStyleObjectType {
  "--inventory-category-highlight-color": string;
}

interface InventoryCategoryPropTypes {
  categoryTitle: InventoryCategoryTitleTypes;
  styleObject: InventoryCategoryStyleObjectType;
}

const InventoryCategory: FC<InventoryCategoryPropTypes> = ({
  styleObject,
  categoryTitle,
}) => {
  // Defines
  const inventoryCategoryItems = useMemo(() => {
    if (categoryTitle === "Tools") {
      return tempToolsData;
    } else if (categoryTitle === "Ingredients") {
      return tempIngredientsData;
    } else {
      return tempMiscData;
    }
  }, [categoryTitle]);

  return (
    <InventoryCategoryStyleContainer style={styleObject}>
      <div className="inventory-category-title">
        <div className="inventory-category-title-spacer" />
        <h3 className="inventory-category-title-text">{categoryTitle}</h3>
      </div>
      <div className="inventory-category-items">
        {inventoryCategoryItems.map(handleRenderInventoryItem)}
      </div>
    </InventoryCategoryStyleContainer>
  );
};

export default memo(InventoryCategory);
