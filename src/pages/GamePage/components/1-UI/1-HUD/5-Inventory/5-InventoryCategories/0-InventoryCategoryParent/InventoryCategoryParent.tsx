import { FC, memo } from "react";
import InventoryCategory from "../1-InventoryCategory/InventoryCategory";
import {
  IngredientsCategoryStyleObject,
  IngredientsCategoryTitle,
  MiscCategoryStyleObject,
  MiscCategoryTitle,
  ToolsCategoryStyleObject,
  ToolsCategoryTitle,
} from "../1-InventoryCategory/InventoryCategoryDefines";
import InventoryCategoryParentStyleContainer from "./InventoryCategoryParentStyleContainer";

const InventoryCategoryParent: FC = () => {
  return (
    <InventoryCategoryParentStyleContainer>
      <h1 className="inventory-title">Inventory</h1>
      <div className="inventory-categories">
        <InventoryCategory
          categoryTitle={ToolsCategoryTitle}
          styleObject={ToolsCategoryStyleObject}
        />
        <InventoryCategory
          categoryTitle={IngredientsCategoryTitle}
          styleObject={IngredientsCategoryStyleObject}
        />
        <InventoryCategory
          categoryTitle={MiscCategoryTitle}
          styleObject={MiscCategoryStyleObject}
        />
      </div>
    </InventoryCategoryParentStyleContainer>
  );
};

export default memo(InventoryCategoryParent);
