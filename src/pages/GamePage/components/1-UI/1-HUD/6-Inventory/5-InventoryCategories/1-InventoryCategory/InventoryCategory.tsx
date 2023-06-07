// @ts-ignore
import sample from "lodash-es/sample";
import { nanoid } from "nanoid";
import { FC, memo, useEffect, useMemo, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import DraggableGrid, { DraggableItemsTypes } from "./DraggableGrid";
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
  // Global State
  const {
    activeToolInventory,
    activeMiscInventory,
    activeIngredientInventory,
  } = useGlobalState(
    (state) => ({
      activeToolInventory: state.activeToolInventory,
      activeMiscInventory: state.activeMiscInventory,
      activeIngredientInventory: state.activeIngredientInventory,
    }),
    shallow,
  );

  // Defines
  const inventoryCategoryItems = useMemo(() => {
    if (categoryTitle === "Tools") {
      return activeToolInventory;
    } else if (categoryTitle === "Ingredients") {
      return activeIngredientInventory;
    } else {
      return activeMiscInventory;
    }
  }, [
    categoryTitle,
    activeMiscInventory,
    activeToolInventory,
    activeIngredientInventory,
  ]);

  const [items, setItems] = useState(
    inventoryCategoryItems.map((item) => ({ id: nanoid(), ...item })),
  );

  const nItems: DraggableItemsTypes[] = useMemo(
    () => [
      { id: nanoid(), itemName: "blank" },
      { id: nanoid(), itemName: "blank" },
      { id: nanoid(), itemName: "blank" },
      { id: nanoid(), itemName: "blank" },
    ],
    [],
  );

  useEffect(() => {
    setItems(inventoryCategoryItems.map((item) => ({ id: nanoid(), ...item })));
  }, [
    setItems,
    inventoryCategoryItems,
    activeMiscInventory,
    activeToolInventory,
    activeIngredientInventory,
  ]);

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
      {items.length === 0 ? (
        <DraggableGrid
          items={nItems}
          addItem={handleAdd}
          removeItem={handleRemove}
        />
      ) : (
        <DraggableGrid
          items={items}
          addItem={handleAdd}
          removeItem={handleRemove}
        />
      )}
    </InventoryCategoryStyleContainer>
  );
};

export default memo(InventoryCategory);
