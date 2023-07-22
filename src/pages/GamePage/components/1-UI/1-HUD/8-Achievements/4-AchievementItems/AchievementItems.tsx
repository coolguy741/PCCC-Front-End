import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import { FC, Fragment, useCallback, useEffect, useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import { shallow } from "zustand/shallow";
import {
  AchievementAllKeyType,
  AchievementAllObjectType,
} from "../../../../../globalState/modules/AchievementModule/AchievementModuleTypes";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import AchievementItem from "./AchievementItem";
import { getItemDimensions, NUM_COLS } from "./AchievementItemsConstants";
import AchievementItemsStyleContainer from "./AchievementItemsStyleContainer";

const AchievementItems: FC = () => {
  // Global State
  const {
    activeCCC,
    activeAchievementsModalTab,
    activeGardenAllAchievements,
    activeKitchenAllAchievements,
    activeGardenCleanAchievements,
    activeKitchenCleanAchievements,
    activeGardenCarefulAchievements,
    activeKitchenCarefulAchievements,
    activeGardenConfidentAchievements,
    activeKitchenConfidentAchievements,
  } = useGlobalState(
    (state) => ({
      activeCCC: state.activeCCC,
      activeAchievementsModalTab: state.activeAchievementsModalTab,
      activeGardenAllAchievements: state.activeGardenAllAchievements,
      activeKitchenAllAchievements: state.activeKitchenAllAchievements,
      activeGardenCleanAchievements: state.activeGardenCleanAchievements,
      activeKitchenCleanAchievements: state.activeKitchenCleanAchievements,
      activeGardenCarefulAchievements: state.activeGardenCarefulAchievements,
      activeKitchenCarefulAchievements: state.activeKitchenCarefulAchievements,
      activeGardenConfidentAchievements:
        state.activeGardenConfidentAchievements,
      activeKitchenConfidentAchievements:
        state.activeKitchenConfidentAchievements,
    }),
    shallow,
  );

  // Custom Hooks
  const [gridRef, gridDimensions] = useMeasure();

  // Meno Defines
  const itemDimensions = useMemo(() => {
    const itemDimensions = getItemDimensions(gridDimensions);
    return itemDimensions;
  }, [gridDimensions]);

  const activeAchievementObject = useMemo(() => {
    if (activeAchievementsModalTab === "garden") {
      switch (activeCCC) {
        case "all":
          return activeGardenAllAchievements;
        case "confident":
          return activeGardenConfidentAchievements;
        case "clean":
          return activeGardenCleanAchievements;
        case "careful":
          return activeGardenCarefulAchievements;
        default:
          return activeGardenAllAchievements;
      }
    } else {
      switch (activeCCC) {
        case "all":
          return activeKitchenAllAchievements;
        case "confident":
          return activeKitchenConfidentAchievements;
        case "clean":
          return activeKitchenCleanAchievements;
        case "careful":
          return activeKitchenCarefulAchievements;
        default:
          return activeKitchenAllAchievements;
      }
    }
  }, [
    activeCCC,
    activeAchievementsModalTab,
    activeGardenAllAchievements,
    activeKitchenAllAchievements,
    activeGardenCleanAchievements,
    activeKitchenCleanAchievements,
    activeGardenCarefulAchievements,
    activeKitchenCarefulAchievements,
    activeGardenConfidentAchievements,
    activeKitchenConfidentAchievements,
  ]);

  // Local State
  const [items, setItems] = useState(
    Object.keys(activeAchievementObject).map((item) => {
      return {
        id: nanoid(),
        item: item as AchievementAllKeyType,
        value: (activeAchievementObject as AchievementAllObjectType)[
          item as AchievementAllKeyType
        ],
      };
    }),
  );

  // Handlers
  const handleUpdateItems: ConstantVoidFunctionType = useCallback((): void => {
    setItems(
      Object.keys(activeAchievementObject).map((item) => {
        return {
          id: nanoid(),
          item: item as AchievementAllKeyType,
          value: (activeAchievementObject as AchievementAllObjectType)[
            item as AchievementAllKeyType
          ],
        };
      }),
    );
  }, [setItems, activeAchievementObject]);

  // Listeners
  useEffect(handleUpdateItems, [handleUpdateItems, activeAchievementObject]);

  return (
    <AchievementItemsStyleContainer ref={gridRef}>
      <div
        className="achievement-items"
        style={{
          height: Math.ceil(items.length / NUM_COLS) * itemDimensions.height,
        }}
      >
        <AnimatePresence mode={"wait"}>
          {activeCCC === "all" && (
            <Fragment>
              {items.map(({ item, id, value }) =>
                value ? (
                  <AchievementItem key={id} item={item} badgeColor={"red"} />
                ) : null,
              )}
            </Fragment>
          )}

          {activeCCC === "confident" && (
            <Fragment>
              {items.map(({ item, id, value }) =>
                value ? (
                  <AchievementItem key={id} item={item} badgeColor={"blue"} />
                ) : null,
              )}
            </Fragment>
          )}

          {activeCCC === "clean" && (
            <Fragment>
              {items.map(({ item, id, value }) =>
                value ? (
                  <AchievementItem key={id} item={item} badgeColor={"green"} />
                ) : null,
              )}
            </Fragment>
          )}

          {activeCCC === "careful" && (
            <Fragment>
              {items.map(({ item, id, value }) =>
                value ? (
                  <AchievementItem key={id} item={item} badgeColor={"peach"} />
                ) : null,
              )}
            </Fragment>
          )}
        </AnimatePresence>
      </div>
    </AchievementItemsStyleContainer>
  );
};

export default AchievementItems;
