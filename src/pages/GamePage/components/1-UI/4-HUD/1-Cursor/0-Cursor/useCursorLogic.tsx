import { useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import {
  ConstantVoidFunctionType,
  MouseEventFunctionType,
} from "../../../../../shared/Types/DefineTypes";
import useMouseMove from "../../../6-Hooks/useMouseMove";

const useCursorLogic: ConstantVoidFunctionType = (): void => {
  // Global State
  const { cursorLocation } = useGlobalState(
    (state) => ({
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleSetCursorLocation: MouseEventFunctionType = useCallback(
    (event: MouseEvent): void => {
      cursorLocation.set(event.clientX, event.clientY);
    },
    [cursorLocation],
  );

  // Hooks
  useMouseMove(handleSetCursorLocation);
};

export { useCursorLogic };
