import { Plane, useTexture } from "@react-three/drei";
import { FC, memo, useCallback, useEffect, useMemo, useRef } from "react";
import { LinearEncoding } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { RefMeshType } from "../../../../../shared/Types/RefTypes";
import {
  animateCursorHandScaleIn,
  animateCursorHandScaleOut,
} from "./CursorHandAnimations";

const CursorHand: FC = () => {
  // Refs
  const cursorHandRef: RefMeshType = useRef(null);
  // Texture
  const cursorTexture = useTexture("/game_assets/textures/cursor.webp");

  // Calculate
  useMemo((): void => {
    if (cursorTexture) {
      cursorTexture.encoding = LinearEncoding;
    }
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

  return (
    <Plane ref={cursorHandRef} position={[0.05, 0, -1]}>
      <meshBasicMaterial transparent map={cursorTexture} />
    </Plane>
  );
};

export default memo(CursorHand);
