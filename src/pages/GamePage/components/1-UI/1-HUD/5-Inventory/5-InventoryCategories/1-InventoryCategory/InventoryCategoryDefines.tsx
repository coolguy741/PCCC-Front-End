export interface InventoryCategoryDataTypes {
  id: number;
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
}: InventoryCategoryDataTypes) => {
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
  { id: 0, itemName: "hat" },
  { id: 1, itemName: "hat" },
  { id: 2, itemName: "hat" },
  { id: 3, itemName: "hat" },
  { id: 4, itemName: "hat" },
  { id: 5, itemName: "hat" },
  { id: 6, itemName: "hat" },
  { id: 7, itemName: "hat" },
  { id: 8, itemName: "hat" },
  { id: 9, itemName: "hat" },
  { id: 10, itemName: "hat" },
  { id: 11, itemName: "hat" },
  { id: 12, itemName: "hat" },
];

const tempIngredientsData: InventoryCategoryDataTypes[] = [
  { id: 0, itemName: "hat" },
  { id: 1, itemName: "hat" },
  { id: 2, itemName: "hat" },
  { id: 3, itemName: "hat" },
  { id: 4, itemName: "hat" },
  { id: 5, itemName: "hat" },
];

const tempMiscData: InventoryCategoryDataTypes[] = [
  { id: 0, itemName: "hat" },
  { id: 1, itemName: "hat" },
  { id: 2, itemName: "hat" },
  { id: 3, itemName: "hat" },
  { id: 4, itemName: "hat" },
  { id: 5, itemName: "hat" },
  { id: 6, itemName: "hat" },
  { id: 7, itemName: "hat" },
  { id: 8, itemName: "hat" },
  { id: 9, itemName: "hat" },
  { id: 10, itemName: "hat" },
  { id: 11, itemName: "hat" },
  { id: 12, itemName: "hat" },
  { id: 13, itemName: "hat" },
];

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
