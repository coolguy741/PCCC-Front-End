import { useTexture } from "@react-three/drei";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { LinearEncoding } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../../shared/Types/DefineTypes";
import { RefMeshType } from "../../../../../../shared/Types/RefTypes";
import {
  animateCursorHandScaleIn,
  animateCursorHandScaleOut,
} from "./CursorHandAnimations";
import {
  UseCursorHandLogicHookType,
  UseCursorHandLogicReturnTypes,
} from "./CursorHandTypes";

const useCursorHandLogic: UseCursorHandLogicHookType =
  (): UseCursorHandLogicReturnTypes => {
    // Refs
    const cursorHandRef: RefMeshType = useRef(null);

    // Texture
    const cursorTexture = useTexture("/game_assets/textures/cursor.webp");

    // Defines
    useMemo((): void => {
      cursorTexture.encoding = LinearEncoding;
    }, [cursorTexture]);

    // Global State
    const { isCursorDown } = useGlobalState(
      (state) => ({
        isCursorDown: state.isCursorDown,
      }),
      shallow,
    );

    // Handlers
    const handleCursorHandScale: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!cursorHandRef.current) return;

        if (isCursorDown) {
          animateCursorHandScaleIn(cursorHandRef.current);
        } else {
          animateCursorHandScaleOut(cursorHandRef.current);
        }
      }, [isCursorDown]);

    // Listeners
    useEffect(handleCursorHandScale, [isCursorDown, handleCursorHandScale]);

    return { cursorHandRef, cursorTexture };
  };

export { useCursorHandLogic };
