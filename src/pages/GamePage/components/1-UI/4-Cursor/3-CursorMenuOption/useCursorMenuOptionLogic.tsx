import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Vector2 } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefBooleanType, RefDivType } from "../../../../shared/Types/RefTypes";
import {
  animateCursorMenuOptionIn,
  animateCursorMenuOptionOut,
  animateCursorOptionsHoverIn,
  animateCursorOptionsHoverOut,
} from "./CursorMenuOptionAnimations";

interface UseCursorMenuOptionLogicPropTypes {
  color: string;
  animOffset: number;
  hoverTrigger: boolean;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
}

const useCursorMenuOptionLogic = ({
  color,
  animOffset,
  hoverTrigger,
  menuPositionEnd,
  menuPositionDriver,
  boundingRectVector,
  menuPositionOffset,
  tempCursorLocationCopy,
}: UseCursorMenuOptionLogicPropTypes) => {
  // Refs
  const cursorMenuOptionRef: RefDivType = useRef(null);
  const cursorMenuOptionHoverEnableRef: RefBooleanType = useRef(false);

  // Global Stated
  const { menuActive, cursorLocation } = useGlobalState(
    (state) => ({
      menuActive: state.menuActive,
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Defines
  const styleObject = useMemo(() => {
    return {
      "--icon-border-color": color,
      "--label-background-color": color,
    };
  }, [color]);

  // Handlers
  const handleCursorMenuOptionBoundingRect = useCallback(() => {
    if (!cursorMenuOptionRef.current) return;
    if (boundingRectVector.x > 0 || boundingRectVector.y > 0) return;

    const cursorMenuOptionBoundingRect =
      cursorMenuOptionRef.current.getBoundingClientRect();

    boundingRectVector.set(
      cursorMenuOptionBoundingRect.width,
      cursorMenuOptionBoundingRect.height,
    );
  }, [boundingRectVector]);

  const handleUpdateCursorMenuOptionElementPosition = useCallback(() => {
    if (!cursorMenuOptionRef.current) return;
    cursorMenuOptionRef.current.style.left = `${menuPositionDriver.x}px`;
    cursorMenuOptionRef.current.style.top = `${menuPositionDriver.y}px`;
  }, [menuPositionDriver]);

  const handleHoverTrigger = useCallback(() => {
    if (!menuActive) return;
    if (!cursorMenuOptionRef.current) return;
    if (!cursorMenuOptionHoverEnableRef.current) return;
    if (hoverTrigger) {
      animateCursorOptionsHoverIn(cursorMenuOptionRef.current);
    } else {
      animateCursorOptionsHoverOut(cursorMenuOptionRef.current);
    }
  }, [menuActive, hoverTrigger]);

  const handleRevealHideCursorMenuOption = useCallback(() => {
    if (!cursorMenuOptionRef.current) return;

    if (menuActive) {
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
          cursorMenuOptionHoverEnableRef.current = true;
        },
      );
    } else {
      cursorMenuOptionHoverEnableRef.current = false;
      animateCursorMenuOptionOut(
        cursorMenuOptionRef.current,
        menuPositionDriver,
        menuPositionEnd,
        tempCursorLocationCopy,
        handleUpdateCursorMenuOptionElementPosition,
        animOffset,
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
    handleUpdateCursorMenuOptionElementPosition,
  ]);

  // Listeners
  useEffect(handleRevealHideCursorMenuOption, [
    menuActive,
    handleRevealHideCursorMenuOption,
  ]);

  useLayoutEffect(handleCursorMenuOptionBoundingRect, [
    handleCursorMenuOptionBoundingRect,
  ]);

  useEffect(handleHoverTrigger, [menuActive, hoverTrigger, handleHoverTrigger]);

  return { styleObject, cursorMenuOptionRef };
};

export { useCursorMenuOptionLogic };
