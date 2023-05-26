// @ts-ignore
import sample from "lodash-es/sample";
import { nanoid } from "nanoid";
import { FC, memo, useMemo, useState } from "react";
import DraggableGrid from "./DraggableGrid";
import {
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

  const [items, setItems] = useState(
    inventoryCategoryItems.map((item) => ({ id: nanoid(), ...item })),
  );

  const handleRemove = (id: string) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setItems((items) => [
      ...items,
      { id: nanoid(), ...sample(inventoryCategoryItems) },
    ]);
  };

  return (
    <InventoryCategoryStyleContainer style={styleObject}>
      <div className="inventory-category-title">
        <div className="inventory-category-title-spacer" />
        <h3 className="inventory-category-title-text">{categoryTitle}</h3>
      </div>

      <DraggableGrid
        items={items}
        addItem={handleAdd}
        removeItem={handleRemove}
      />
    </InventoryCategoryStyleContainer>
  );
};

export default memo(InventoryCategory);
