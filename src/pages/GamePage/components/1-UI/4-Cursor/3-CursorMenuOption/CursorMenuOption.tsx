// CursorMenuOption.js
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { Vector2 } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefDivType } from "../../../../shared/Types/RefTypes";
import {
  animateCursorMenuOptionIn,
  animateCursorMenuOptionOut,
} from "./CursorMenuOptionAnimations";
import CursorMenuOptionStyleContainer from "./CursorMenuOptionStyleContainer";

interface CursorMenuOptionPropTypes {
  color: string;
  label: string;
  iconURL: string;
  animOffset: number;
  menuPositionEnd: Vector2;
  menuPositionDriver: Vector2;
  boundingRectVector: Vector2;
  menuPositionOffset: Vector2;
  tempCursorLocationCopy: Vector2;
}

const CursorMenuOption: FC<CursorMenuOptionPropTypes> = ({
  color,
  label,
  iconURL,
  animOffset,
  menuPositionEnd,
  menuPositionDriver,
  boundingRectVector,
  menuPositionOffset,
  tempCursorLocationCopy,
}) => {
  // Refs
  const cursorMenuOptionRef: RefDivType = useRef(null);

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
      );
    } else {
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
  useLayoutEffect(handleCursorMenuOptionBoundingRect, [
    handleCursorMenuOptionBoundingRect,
  ]);

  useEffect(handleRevealHideCursorMenuOption, [
    menuActive,
    handleRevealHideCursorMenuOption,
  ]);

  return (
    <CursorMenuOptionStyleContainer
      style={styleObject}
      ref={cursorMenuOptionRef}
    >
      <h3 className="label">{label}</h3>
      <img className="icon" alt={label} src={iconURL} draggable={false} />
    </CursorMenuOptionStyleContainer>
  );
};

export default memo(CursorMenuOption);
