import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import {
  ConstantVoidFunctionType,
  FramerAnimFrameFunctionType,
} from "../../../../../shared/Types/DefineTypes";
import {
  RefBooleanType,
  RefCanvasType,
} from "../../../../../shared/Types/RefTypes";
import {
  animateCursorCanvasToFollowPosition,
  animateCursorCanvasToMenuPosition,
} from "./CursorCanvasAnimations";
import {
  cursorCanvasCenterOffset,
  cursorCanvasDampedFollowLocation,
  cursorCanvasDampedFollowStep,
  cursorCanvasFollowLocation,
  cursorCanvasTempCopyCurrentLocation,
  handleDampCursorCanvasLocation,
  handleSetCursorCanvasLocation,
  handleUpdateCursorCanvasElementLocation,
  handleUpdateCursorCanvasFinalLocation,
} from "./CursorCanvasDefines";
import {
  UseCursorCanvasLogicHookTypes,
  UseCursorCanvasLogicReturnTypes,
} from "./CursorCanvasTypes";

const useCursorCanvasLogic: UseCursorCanvasLogicHookTypes =
  (): UseCursorCanvasLogicReturnTypes => {
    // Refs
    const cursorCanvasRef: RefCanvasType = useRef(null);
    const enableOnFrameFollow: RefBooleanType = useRef(true);

    // Global State
    const { menuActive, cursorLocation } = useGlobalState(
      (state) => ({
        menuActive: state.menuActive,
        cursorLocation: state.cursorLocation,
      }),
      shallow,
    );

    // Handlers
    const handleAnimateCursorToMenuPosition: ConstantVoidFunctionType =
      useCallback((): void => {
        if (!menuActive) return;
        if (!enableOnFrameFollow.current) return;

        enableOnFrameFollow.current = false;

        const currentCursorLocation =
          cursorCanvasTempCopyCurrentLocation.copy(cursorLocation);

        animateCursorCanvasToMenuPosition(
          cursorCanvasDampedFollowLocation,
          currentCursorLocation,
          () => {
            cursorCanvasDampedFollowStep.setX(0);
          },
        );
      }, [menuActive, cursorLocation]);

    const handleAnimateCursorToFollowPosition: ConstantVoidFunctionType =
      useCallback((): void => {
        if (menuActive) return;
        if (enableOnFrameFollow.current) return;

        enableOnFrameFollow.current = true;

        const currentCursorLocation =
          cursorCanvasTempCopyCurrentLocation.copy(cursorLocation);

        cursorCanvasFollowLocation.set(
          currentCursorLocation.x - cursorCanvasCenterOffset.x,
          currentCursorLocation.y - cursorCanvasCenterOffset.y,
        );

        animateCursorCanvasToFollowPosition(cursorCanvasDampedFollowStep);
      }, [menuActive, cursorLocation]);

    const handleCursorCanvasAnimationFrame: FramerAnimFrameFunctionType =
      useCallback(
        (time: number, delta: number): void => {
          if (!cursorCanvasRef.current) return;

          if (enableOnFrameFollow.current) {
            handleSetCursorCanvasLocation(cursorLocation);

            handleDampCursorCanvasLocation(
              delta,
              cursorCanvasDampedFollowStep.x,
            );
          }

          handleUpdateCursorCanvasFinalLocation();

          handleUpdateCursorCanvasElementLocation(cursorCanvasRef.current);
        },
        [cursorLocation],
      );

    // Listeners
    useEffect((): void => {
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
