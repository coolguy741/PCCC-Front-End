import { useCallback, useEffect, useRef, useState } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import {
  RefDivType,
  RefTimeoutType,
} from "../../../../../shared/Types/RefTypes";
import { InspectData } from "../../4-Inspect/7-InspectData/INSPECT_DATA";
import { UseCursorMenuChoiceColliderLogicReturnTypes } from "./CursorMenuChoiceColliderTypes";

const useCursorMenuChoiceColliderLogic =
  (): UseCursorMenuChoiceColliderLogicReturnTypes => {
    // Refs
    const cursorMenuChoiceColliderRef: RefDivType = useRef(null);
    const cursorMenuChoiceColliderTimeoutRef: RefTimeoutType = useRef(null);
    const cursorMenuChoiceColliderAudioTimeoutRef: RefTimeoutType =
      useRef(null);

    // Local State
    const [
      isCursorMenuChoiceColliderDisabled,
      setIsCursorMenuChoiceColliderDisabled,
    ] = useState(true);

    // Global State
    const {
      playAudio,
      PCCCAudio,
      menuActive,
      setMenuActive,
      hoveredSection,
      setInspectActive,
      activeHoveredEntity,
      setActiveMiscInventory,
      setActiveToolInventory,
      setItemToRemoveFromScene,
      setActiveIngredientInventory,
    } = useGlobalState(
      (state) => ({
        playAudio: state.playAudio,
        PCCCAudio: state.PCCCAudio,
        menuActive: state.menuActive,
        setMenuActive: state.setMenuActive,
        hoveredSection: state.hoveredSection,
        setInspectActive: state.setInspectActive,
        activeHoveredEntity: state.activeHoveredEntity,
        setActiveMiscInventory: state.setActiveMiscInventory,
        setActiveToolInventory: state.setActiveToolInventory,
        setItemToRemoveFromScene: state.setItemToRemoveFromScene,
        setActiveIngredientInventory: state.setActiveIngredientInventory,
      }),
      shallow,
    );

    // Handlers
    const handlePickUpItem: ConstantVoidFunctionType = useCallback(() => {
      if (!menuActive) return;
      if (!activeHoveredEntity) return;

      const itemType = InspectData[activeHoveredEntity].type;

      switch (itemType) {
        case "tool":
          setActiveToolInventory(InspectData[activeHoveredEntity].assetName);
          break;
        case "ingredient":
          setActiveIngredientInventory(
            InspectData[activeHoveredEntity].assetName,
          );
          break;
        case "misc":
          setActiveMiscInventory(InspectData[activeHoveredEntity].assetName);
          break;
        default:
          break;
      }
      setItemToRemoveFromScene(InspectData[activeHoveredEntity].assetName);

      if (cursorMenuChoiceColliderAudioTimeoutRef.current) {
        clearTimeout(cursorMenuChoiceColliderAudioTimeoutRef.current);
      }

      cursorMenuChoiceColliderAudioTimeoutRef.current = setTimeout(() => {
        if (!PCCCAudio["InventoryNotification"]) return;
        if (PCCCAudio["InventoryNotification"].playing()) return;
        playAudio("InventoryNotification");
      }, 750);
    }, [
      playAudio,
      PCCCAudio,
      menuActive,
      activeHoveredEntity,
      setActiveMiscInventory,
      setActiveToolInventory,
      setItemToRemoveFromScene,
      setActiveIngredientInventory,
    ]);

    const handleCursorMenuOptionChoice: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        if (isCursorMenuChoiceColliderDisabled) return;

        switch (hoveredSection) {
          case "inspect":
            setInspectActive(true);
            break;
          case "pickup":
            handlePickUpItem();
            break;
          case "dynamic":
            console.log("dynamic");
            break;
          case "exit":
            console.log("exit");
            break;
          default:
            console.log("exit");
            break;
        }

        setMenuActive(false);
        setIsCursorMenuChoiceColliderDisabled(true);

        if (cursorMenuChoiceColliderTimeoutRef.current) {
          clearTimeout(cursorMenuChoiceColliderTimeoutRef.current);
        }

        cursorMenuChoiceColliderTimeoutRef.current = setTimeout(() => {
          if (!cursorMenuChoiceColliderRef.current) return;
          cursorMenuChoiceColliderRef.current.style.visibility = "hidden";
          cursorMenuChoiceColliderRef.current.style.pointerEvents = "none";
        }, 1250);
      }, [
        menuActive,
        setMenuActive,
        hoveredSection,
        setInspectActive,
        handlePickUpItem,
        isCursorMenuChoiceColliderDisabled,
        setIsCursorMenuChoiceColliderDisabled,
      ]);

    const handleRevealCursorMenuChoiceCollider: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        if (!cursorMenuChoiceColliderRef.current) return;
        cursorMenuChoiceColliderRef.current.style.visibility = "visible";
        cursorMenuChoiceColliderRef.current.style.pointerEvents = "auto";
        if (cursorMenuChoiceColliderTimeoutRef.current) {
          clearTimeout(cursorMenuChoiceColliderTimeoutRef.current);
        }

        cursorMenuChoiceColliderTimeoutRef.current = setTimeout(() => {
          setIsCursorMenuChoiceColliderDisabled(false);
        }, 1250);
      }, [menuActive, setIsCursorMenuChoiceColliderDisabled]);

    // Listers
    useEffect(handleRevealCursorMenuChoiceCollider, [
      menuActive,
      handleRevealCursorMenuChoiceCollider,
    ]);

    return { cursorMenuChoiceColliderRef, handleCursorMenuOptionChoice };
  };

export { useCursorMenuChoiceColliderLogic };
