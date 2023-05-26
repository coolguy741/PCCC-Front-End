import { PointerEvent, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";

import { useGlobalState } from "../../../../../globalState/useGlobalState";
import {
  RefBooleanType,
  RefDivType,
} from "../../../../../shared/Types/RefTypes";
import { animateInventoryIn, animateInventoryOut } from "./InventoryAnimations";

// Types
interface UseInventoryLogicReturnTypes {
  inventoryContainerRef: RefDivType;
  handlePointerOut: (event: PointerEvent<HTMLDivElement>) => void;
  handlePointerOver: (event: PointerEvent<HTMLDivElement>) => void;
}

const useInventoryLogic = (): UseInventoryLogicReturnTypes => {
  // Refs
  const inventoryIsInRef: RefBooleanType = useRef(false);
  const inventoryContainerRef: RefDivType = useRef(null);

  // Global State
  const { activeHoveredHudMenuOption, setActiveHoveredHudMenuOption } =
    useGlobalState(
      (state) => ({
        activeHoveredHudMenuOption: state.activeHoveredHudMenuOption,
        setActiveHoveredHudMenuOption: state.setActiveHoveredHudMenuOption,
      }),
      shallow,
    );

  const handleAnimateInventory = useCallback((): void => {
    if (!inventoryContainerRef.current) return;

    if (activeHoveredHudMenuOption === "inventory") {
      inventoryIsInRef.current = true;
      animateInventoryIn(inventoryContainerRef.current, () => {
        if (!inventoryContainerRef.current) return;
        inventoryContainerRef.current.style.pointerEvents = "auto";
      });
    }
  }, [activeHoveredHudMenuOption]);

  const handlePointerOver = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (!inventoryContainerRef.current) return;
      console.log("pointer over");
      // if (inventoryIsInRef.current) {
      //   inventoryIsInRef.current = false;
      //   animateInventoryOut(inventoryContainerRef.current, () => {
      //     if (!inventoryContainerRef.current) return;
      //     inventoryContainerRef.current.style.pointerEvents = "none";
      //   });
      // }
    },
    [],
  );

  const handlePointerOut = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      event.stopPropagation();
      console.log("pointer out");
      if (!inventoryContainerRef.current) return;
      if (inventoryIsInRef.current) {
        inventoryIsInRef.current = false;
        setActiveHoveredHudMenuOption(null);
        animateInventoryOut(inventoryContainerRef.current, () => {
          if (!inventoryContainerRef.current) return;
          inventoryContainerRef.current.style.pointerEvents = "none";
        });
      }
    },
    [setActiveHoveredHudMenuOption],
  );

  useEffect(handleAnimateInventory, [
    handleAnimateInventory,
    activeHoveredHudMenuOption,
  ]);

  return {
    handlePointerOut,
    handlePointerOver,
    inventoryContainerRef,
  };
};

export { useInventoryLogic };
