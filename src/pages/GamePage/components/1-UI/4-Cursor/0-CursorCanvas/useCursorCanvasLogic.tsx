import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import {
  RefBooleanType,
  RefCanvasType,
  RefNumberType,
} from "../../../../shared/Types/RefTypes";
import {
  animateCursorCanvasToFollowPosition,
  animateCursorCanvasToMenuPosition,
} from "./CursorCanvasAnimations";
import {
  cursorCanvasCenterOffset,
  cursorCanvasDampedFollowLocation,
  cursorCanvasFollowLocation,
  cursorCanvasTempCopyCurrentLocation,
  handleDampCursorCanvasLocation,
  handleUpdateCursorCanvasElementLocation,
  handleUpdateCursorCanvasFinalLocation,
} from "./CursorCanvasDefines";

const useCursorCanvasLogic = () => {
  // Refs
  const cursorCanvasRef: RefCanvasType = useRef(null);
  const enableOnFrameFollow: RefBooleanType = useRef(true);
  const cursorCanvasDampedFollowStepRef: RefNumberType = useRef(0.01);

  // Global State
  const { menuActive, cursorLocation } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleAnimateCursorToMenuPosition = useCallback(() => {
    if (!menuActive || !enableOnFrameFollow.current) return;

    enableOnFrameFollow.current = false;

    const currentCursorLocation =
      cursorCanvasTempCopyCurrentLocation.copy(cursorLocation);

    animateCursorCanvasToMenuPosition(
      cursorCanvasDampedFollowLocation,
      currentCursorLocation,
      () => {
        cursorCanvasDampedFollowStepRef.current = 0;
      },
    );
  }, [menuActive, cursorLocation]);

  const handleAnimateCursorToFollowPosition = useCallback(() => {
    if (menuActive || enableOnFrameFollow.current) return;

    enableOnFrameFollow.current = true;

    const currentCursorLocation =
      cursorCanvasTempCopyCurrentLocation.copy(cursorLocation);

    cursorCanvasFollowLocation.set(
      currentCursorLocation.x - cursorCanvasCenterOffset.x,
      currentCursorLocation.y - cursorCanvasCenterOffset.y,
    );

    animateCursorCanvasToFollowPosition(cursorCanvasDampedFollowStepRef);
  }, [menuActive, cursorLocation]);

  const handleCursorCanvasAnimationFrame = useCallback(
    (time: number, delta: number) => {
      if (!cursorCanvasRef.current) return;

      if (enableOnFrameFollow.current) {
        handleDampCursorCanvasLocation(
          delta,
          cursorCanvasDampedFollowStepRef.current,
        );
      }

      handleUpdateCursorCanvasFinalLocation();

      handleUpdateCursorCanvasElementLocation(cursorCanvasRef.current);
    },
    [],
  );

  // Listeners
  useEffect(() => {
    handleAnimateCursorToMenuPosition();
    handleAnimateCursorToFollowPosition();
  }, [
    menuActive,
    handleAnimateCursorToMenuPosition,
    handleAnimateCursorToFollowPosition,
  ]);

  // Hooks
  useAnimationFrame(handleCursorCanvasAnimationFrame);

  return { cursorCanvasRef };
};

export { useCursorCanvasLogic };
