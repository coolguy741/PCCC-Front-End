import { useCallback, useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../../../../shared/Types/DefineTypes";
import { RefDivType } from "../../../../../../shared/Types/RefTypes";
import {
  animateCursorMenuOptionIn,
  animateCursorMenuOptionOut,
  animateCursorOptionsHoverIn,
  animateCursorOptionsHoverOut,
} from "./CursorMenuOptionAnimations";
import {
  UseCursorMenuOptionLogicPropTypes,
  UseCursorMenuOptionLogicReturnTypes,
} from "./CursorMenuOptionTypes";

const useCursorMenuOptionLogic: UseCursorMenuOptionLogicReturnTypes = ({
  type,
  animOffset,
  hoverTrigger,
  offsetFactor,
  menuPositionEnd,
  menuPositionDriver,
  boundingRectVector,
  menuPositionOffset,
  tempCursorLocationCopy,
}: UseCursorMenuOptionLogicPropTypes) => {
  // Refs
  const cursorMenuOptionRef: RefDivType = useRef(null);

  // Measure Ref
  const [cursorMenuOptionMeasureRef, cursorMenuOptionMeasureRefDimensions] =
    useMeasure();

  // Local State
  const [cursorMenuOptionIsShowing, setCursorMenuOptionIsShowing] =
    useState(false);

  // Global State
  const { menuActive, cursorLocation } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleResizeEventTrigger: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!cursorMenuOptionRef.current) return;
      if (boundingRectVector.x === cursorMenuOptionMeasureRefDimensions.width)
        return;
      if (boundingRectVector.y === cursorMenuOptionMeasureRefDimensions.height)
        return;

      cursorMenuOptionRef.current.style.opacity = "0";
      cursorMenuOptionRef.current.style.transform = "scale(1)";

      menuPositionOffset.set(
        cursorMenuOptionMeasureRefDimensions.width * offsetFactor.x,
        cursorMenuOptionMeasureRefDimensions.height * offsetFactor.y,
      );

      boundingRectVector.set(
        cursorMenuOptionMeasureRefDimensions.width,
        cursorMenuOptionMeasureRefDimensions.height,
      );
    }, [
      offsetFactor,
      boundingRectVector,
      menuPositionOffset,
      cursorMenuOptionMeasureRefDimensions,
    ]);

  const handleUpdateCursorMenuOptionElementPosition: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!cursorMenuOptionRef.current) return;

      cursorMenuOptionRef.current.style.left = `${menuPositionDriver.x}px`;
      cursorMenuOptionRef.current.style.top = `${menuPositionDriver.y}px`;
    }, [menuPositionDriver]);

  const handleHoverTrigger = useCallback(() => {
    if (!menuActive) return;
    if (!cursorMenuOptionIsShowing) return;
    if (!cursorMenuOptionRef.current) return;

    if (hoverTrigger) {
      animateCursorOptionsHoverIn(cursorMenuOptionRef.current);
    } else {
      animateCursorOptionsHoverOut(cursorMenuOptionRef.current);
    }
  }, [menuActive, hoverTrigger, cursorMenuOptionIsShowing]);

  const handleRevealHideCursorMenuOption: ConstantVoidFunctionType =
    useCallback((): void => {
      if (!cursorMenuOptionRef.current) return;

      if (menuActive && !cursorMenuOptionIsShowing) {
        tempCursorLocationCopy.set(
          cursorLocation.x - boundingRectVector.x / 2,
          cursorLocation.y - boundingRectVector.y / 2,
        );

        menuPositionEnd.set(
          tempCursorLocationCopy.x + menuPositionOffset.x,
          tempCursorLocationCopy.y + menuPositionOffset.y,
        );

        animateCursorMenuOptionIn(
          cursorMenuOptionRef.current,
          menuPositionDriver,
          tempCursorLocationCopy,
          menuPositionEnd,
          handleUpdateCursorMenuOptionElementPosition,
          animOffset,
          () => {
            setCursorMenuOptionIsShowing(true);
          },
        );
      }

      if (!menuActive && cursorMenuOptionIsShowing) {
        animateCursorMenuOptionOut(
          cursorMenuOptionRef.current,
          menuPositionDriver,
          menuPositionEnd,
          tempCursorLocationCopy,
          handleUpdateCursorMenuOptionElementPosition,
          animOffset,
          () => {
            setCursorMenuOptionIsShowing(false);
          },
        );
      }
    }, [
      animOffset,
      menuActive,
      cursorLocation,
      menuPositionEnd,
      menuPositionDriver,
      boundingRectVector,
      menuPositionOffset,
      tempCursorLocationCopy,
      cursorMenuOptionIsShowing,
      setCursorMenuOptionIsShowing,
      handleUpdateCursorMenuOptionElementPosition,
    ]);

  // Listeners
  useEffect(handleResizeEventTrigger, [
    handleResizeEventTrigger,
    cursorMenuOptionMeasureRefDimensions,
  ]);

  useEffect(handleRevealHideCursorMenuOption, [
    menuActive,
    handleRevealHideCursorMenuOption,
  ]);

  useEffect(handleHoverTrigger, [menuActive, hoverTrigger, handleHoverTrigger]);

  return { cursorMenuOptionRef, cursorMenuOptionMeasureRef };
};

export { useCursorMenuOptionLogic };
