import { useAnimationFrame } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef } from "react";
import useMeasure from "react-use-measure";
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
  cursorCanvasCenterOffseOffsetPercent,
  cursorCanvasCenterOffset,
  cursorCanvasDampedFollowLocation,
  cursorCanvasDampedFollowStep,
  cursorCanvasFollowLocation,
  cursorCanvasTempCopyCurrentLocation,
  cursorCanvasToMenuOffset,
  cursorCanvasToMenuOffsetPercent,
  handleDampCursorCanvasLocation,
  handleSetCursorCanvasLocation,
  handleUpdateCursorCanvasElementLocation,
  handleUpdateCursorCanvasFinalLocation,
} from "./CursorCanvasConstants";
import {
  UseCursorCanvasLogicHookTypes,
  UseCursorCanvasLogicReturnTypes,
} from "./CursorCanvasTypes";

const useCursorCanvasLogic: UseCursorCanvasLogicHookTypes =
  (): UseCursorCanvasLogicReturnTypes => {
    // Refs
    const cursorCanvasRef: RefCanvasType = useRef(null);
    const enableOnFrameFollow: RefBooleanType = useRef(true);

    // Measure Ref
    const [cursorCanvasMeasureRef, cursorCanvasMeasureRefDimensions] =
      useMeasure();

    // Global State
    const { menuActive, cursorSize, cursorLocation } = useGlobalState(
      (state) => ({
        menuActive: state.menuActive,
        cursorSize: state.cursorSize,
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

    useMemo(() => {
      cursorSize.set(
        cursorCanvasMeasureRefDimensions.width,
        cursorCanvasMeasureRefDimensions.height,
      );

      cursorCanvasCenterOffset.set(
        cursorCanvasMeasureRefDimensions.width *
          cursorCanvasCenterOffseOffsetPercent.x,
        cursorCanvasMeasureRefDimensions.height *
          cursorCanvasCenterOffseOffsetPercent.y,
      );

      cursorCanvasToMenuOffset.set(
        cursorCanvasMeasureRefDimensions.width *
          cursorCanvasToMenuOffsetPercent.x,
        cursorCanvasMeasureRefDimensions.height *
          cursorCanvasToMenuOffsetPercent.y,
      );
    }, [
      cursorSize,
      cursorCanvasMeasureRefDimensions.width,
      cursorCanvasMeasureRefDimensions.height,
    ]);

    useAnimationFrame(handleCursorCanvasAnimationFrame);

    return { cursorCanvasRef, cursorCanvasMeasureRef };
  };

export { useCursorCanvasLogic };
