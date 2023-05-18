import { useTexture } from "@react-three/drei";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { LinearEncoding, Texture } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { RefMeshType } from "../../../../../shared/Types/RefTypes";
import {
  animateCursorHandScaleIn,
  animateCursorHandScaleOut,
} from "./CursorHandAnimations";

interface UseCursorHandLogicReturnTypes {
  cursorHandRef: RefMeshType;
  cursorTexture: Texture;
}

const useCursorHandLogic = (): UseCursorHandLogicReturnTypes => {
  // Refs
  const cursorHandRef: RefMeshType = useRef(null);

  // Texture
  const cursorTexture = useTexture("/game_assets/textures/cursor.webp");

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
  const handleCursorHandScale = useCallback((): void => {
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
