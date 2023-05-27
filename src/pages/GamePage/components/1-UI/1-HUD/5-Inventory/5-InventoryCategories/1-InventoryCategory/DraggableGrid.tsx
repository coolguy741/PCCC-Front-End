import { animated } from "@react-spring/web";
import { FC, PointerEvent, useMemo } from "react";
import useMeasure from "react-use-measure";
import { getItemDimensions, NUM_COLS } from "./InventoryCategoryDefines";
// @ts-ignore
import useAnimatedItems from "./useAnimatedItems";

// Types
export interface DraggableItemsTypes {
  id: string;
  itemName: string;
}

interface DraggableGridPropTypes {
  items: DraggableItemsTypes[];
  addItem?: () => void;
  removeItem?: (id: string) => void;
}

const DraggableGrid: FC<DraggableGridPropTypes> = ({ items }) => {
  const [gridRef, gridDimensions] = useMeasure();

  const itemDimensions = useMemo(() => {
    const itemDimensions = getItemDimensions(gridDimensions);
    return itemDimensions;
  }, [gridDimensions]);

  const { animatedItems, bindGesture } = useAnimatedItems({
    items,
    itemDimensions,
  });

  const handleStopPropogation = (e: PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="inventory-category-items-container">
      <div
        ref={gridRef}
        className="inventory-category-items"
        style={{
          width: "100%",
          height: Math.ceil(items.length / NUM_COLS) * itemDimensions.height,
        }}
        onPointerDown={handleStopPropogation}
        onMouseDown={handleStopPropogation}
      >
        {/* @ts-ignore */}
        {animatedItems.map(({ id, controller, itemName }) => (
          <animated.div
            key={id}
            {...bindGesture(id)}
            className="item-wrapper"
            style={controller.springs}
          >
            <div className="item">
              <img
                alt={itemName}
                draggable={false}
                src={`/game_assets/ui_images/inventory/${itemName}.webp`}
              />
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default DraggableGrid;
