import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../shared/Types/RefTypes";
import { UseCursorMenuChoiceColliderLogicReturnTypes } from "./CursorMenuChoiceColliderTypes";

const useCursorMenuChoiceColliderLogic =
  (): UseCursorMenuChoiceColliderLogicReturnTypes => {
    // Refs
    const cursorMenuChoiceColliderRef: RefDivType = useRef(null);

    // Global State
    const { menuActive, setMenuActive, hoveredSection } = useGlobalState(
      (state) => ({
        menuActive: state.menuActive,
        setMenuActive: state.setMenuActive,
        hoveredSection: state.hoveredSection,
      }),
      shallow,
    );

    // Handlers
    const handleCursorMenuOptionChoice: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        if (!cursorMenuChoiceColliderRef.current) return;

        cursorMenuChoiceColliderRef.current.style.visibility = "hidden";
        cursorMenuChoiceColliderRef.current.style.pointerEvents = "none";

        switch (hoveredSection) {
          case "inspect":
            console.log("inspect");
            break;
          case "actionOne":
            console.log("actionOne");
            break;
          case "actionTwo":
            console.log("actionTwo");
            break;
          case "exit":
            console.log("exit");
            break;
          default:
            console.log("exit");
            break;
        }

        setMenuActive(false);
      }, [menuActive, setMenuActive, hoveredSection]);

    const handleRevealCursorMenuChoiceCollider: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        if (!cursorMenuChoiceColliderRef.current) return;
        cursorMenuChoiceColliderRef.current.style.visibility = "visible";
        cursorMenuChoiceColliderRef.current.style.pointerEvents = "auto";
      }, [menuActive]);

    // Listers
    useEffect(handleRevealCursorMenuChoiceCollider, [
      menuActive,
      handleRevealCursorMenuChoiceCollider,
    ]);

    return { cursorMenuChoiceColliderRef, handleCursorMenuOptionChoice };
  };

export { useCursorMenuChoiceColliderLogic };
