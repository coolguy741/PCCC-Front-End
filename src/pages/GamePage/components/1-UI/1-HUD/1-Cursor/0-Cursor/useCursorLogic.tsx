import { useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import useMouseMove from "../../../5-Hooks/useMouseMove";

const useCursorLogic = (): void => {
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

  // Hooks
  useMouseMove(handleSetCursorLocation);
};

export { useCursorLogic };
