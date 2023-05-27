import { DraggableItemsTypes } from "./DraggableGrid";

export interface InventoryCategoryDataTypes {
  itemName: string;
}

export interface InventoryCategoryConvertedDataTypes {
  id: string;
  itemName: string;
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

const tempToolsData: InventoryCategoryDataTypes[] = [
  { itemName: "hat" },
  { itemName: "shovel" },
  { itemName: "gloves" },
  { itemName: "shovel" },
  { itemName: "rake" },
  { itemName: "hat" },
  { itemName: "hat" },
  { itemName: "gloves" },
  { itemName: "hat" },
  { itemName: "rake" },
  { itemName: "shovel" },
  { itemName: "gloves" },
  { itemName: "rake" },
];

const tempIngredientsData: InventoryCategoryDataTypes[] = [
  { itemName: "rake" },
  { itemName: "gloves" },
  { itemName: "hat" },
  { itemName: "gloves" },
  { itemName: "rake" },
  { itemName: "hat" },
];

const tempMiscData: InventoryCategoryDataTypes[] = [
  { itemName: "rake" },
  { itemName: "hat" },
  { itemName: "gloves" },
  { itemName: "hat" },
  { itemName: "gloves" },
  { itemName: "rake" },
  { itemName: "hat" },
  { itemName: "rake" },
  { itemName: "gloves" },
  { itemName: "rake" },
  { itemName: "hat" },
  { itemName: "gloves" },
  { itemName: "hat" },
  { itemName: "gloves" },
];

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
  tempMiscData,
  tempToolsData,
  MiscCategoryTitle,
  ToolsCategoryTitle,
  tempIngredientsData,
  MiscCategoryStyleObject,
  ToolsCategoryStyleObject,
  IngredientsCategoryTitle,
  handleRenderInventoryItem,
  IngredientsCategoryStyleObject,
};
