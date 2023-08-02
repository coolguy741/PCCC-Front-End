import { useAnimationFrame } from "framer-motion";
import { FC, memo, useCallback, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Vector2 } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefBooleanType, RefDivType } from "../../../../shared/Types/RefTypes";
import { DisableTouchPointerEvents } from "../../../../styles/Snippets/DisableTouchPointerEvents";
import { MarginPaddingNone } from "../../../../styles/Snippets/MarginPaddingNone";
import { UserSelectNone } from "../../../../styles/Snippets/UserSelectNone";
import useMouseMove from "../../6-Hooks/useMouseMove";
const cursorBoundingRectDimensions = new Vector2();

const CursorDebug: FC = () => {
  // Refs
  const cursorDebugRef: RefDivType = useRef(null);
  const hasSetCursorDebugBoundsRef: RefBooleanType = useRef(false);

  // Global State
  const { cursorLocation } = useGlobalState(
    (state) => ({
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleSetCursorLocation = useCallback(
    (event: MouseEvent): void => {
      cursorLocation.set(event.clientX, event.clientY);
    },
    [cursorLocation],
  );

  const handleUpdateCursorDebugBoundingRect = useCallback(() => {
    if (!cursorDebugRef.current) return;
    if (hasSetCursorDebugBoundsRef.current) return;

    hasSetCursorDebugBoundsRef.current = true;

    const cursorDebugBoundingRect =
      cursorDebugRef.current.getBoundingClientRect();

    cursorBoundingRectDimensions.set(
      cursorDebugBoundingRect.width,
      cursorDebugBoundingRect.height,
    );
  }, []);

  const handleUpdateDebugCursorLocation = useCallback(() => {
    if (!cursorDebugRef.current) return;

    cursorDebugRef.current.style.left = `${
      cursorLocation.x - cursorBoundingRectDimensions.x / 2
    }px`;
    cursorDebugRef.current.style.top = `${
      cursorLocation.y - cursorBoundingRectDimensions.y / 2
    }px`;
  }, [cursorLocation]);

  // Listeners
  useLayoutEffect(handleUpdateCursorDebugBoundingRect, [
    handleUpdateCursorDebugBoundingRect,
  ]);

  // Hooks
  useMouseMove(handleSetCursorLocation);
  useAnimationFrame((time, delta) => {
    handleUpdateDebugCursorLocation();
  });

  return <CursorDebugStyleContainer ref={cursorDebugRef} />;
};

export default memo(CursorDebug);

const CursorDebugStyleContainer = styled.div`
  width: 1rem;
  height: 1rem;
  position: fixed;
  border-radius: 100%;
  background-color: red;
  opacity: 0.5;
  ${UserSelectNone};
  ${MarginPaddingNone};
  ${DisableTouchPointerEvents};
`;
