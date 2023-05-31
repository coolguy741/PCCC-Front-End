import { InventoryItemImgName } from "../../../../../../globalState/modules/InventoryModule/InventoryModuleTypes";
import { DraggableItemsTypes } from "./DraggableGrid";

export interface InventoryCategoryConvertedDataTypes {
  id: string;
  itemName: InventoryItemImgName;
}

const MiscCategoryTitle = "Misc";
const ToolsCategoryTitle = "Tools";
const IngredientsCategoryTitle = "Ingredients";
const ToolsCategoryStyleObject = {
  "--inventory-category-highlight-color": "#4cde96",
};
const IngredientsCategoryStyleObject = {
  "--inventory-category-highlight-color": "#F3D03E",
};
const MiscCategoryStyleObject = {
  "--inventory-category-highlight-color": "#F65321",
};

const handleRenderInventoryItem = ({
  id,
  itemName,
}: InventoryCategoryConvertedDataTypes) => {
  return (
    <div key={id} className="inventory-item">
      <img
        alt={itemName}
        draggable={false}
        src={`/game_assets/ui_images/inventory/${itemName}.webp`}
      />
    </div>
  );
};

export const ITEM_RATIO = 1;
export const NUM_COLS = 4;

interface GridDimensionsTypes {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

export interface GetGridDimensionsReturnTypes {
  width: number;
  height: number;
}

export const getItemDimensions = (
  gridDimensions: GridDimensionsTypes,
): GetGridDimensionsReturnTypes => {
  const width = gridDimensions.width / NUM_COLS;
  const height = width * ITEM_RATIO;
  return { width, height };
};

export const swap = (arr: DraggableItemsTypes[], from: number, to: number) => {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
};

export {
  MiscCategoryTitle,
  ToolsCategoryTitle,
  MiscCategoryStyleObject,
  ToolsCategoryStyleObject,
  IngredientsCategoryTitle,
  handleRenderInventoryItem,
  IngredientsCategoryStyleObject,
};
