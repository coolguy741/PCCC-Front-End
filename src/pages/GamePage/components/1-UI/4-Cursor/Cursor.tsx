import { FC, Fragment, memo, useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import useMouseMove from "../10-Hooks/useMouseMove";
import CursorCanvas from "./0-CursorCanvas/CursorCanvas";
import CursorR3FStage from "./1-CursorR3FStage/CursorR3FStage";
import CursorUIStage from "./4-CursorUIStage.tsx/CursorUIStage";

const Cursor: FC = () => {
  // Global State
  const { cursorLocation } = useGlobalState(
    (state) => ({
      cursorLocation: state.cursorLocation,
    }),
    shallow,
  );

  // Handlers
  const handleSetCursorLocation = useCallback(
    (event: MouseEvent) => {
      cursorLocation.set(event.clientX, event.clientY);
    },
    [cursorLocation],
  );

  // Hooks
  useMouseMove(handleSetCursorLocation);

  return (
    <Fragment>
      <CursorUIStage />
      <CursorCanvas>
        <CursorR3FStage />
      </CursorCanvas>
    </Fragment>
  );
};

export default memo(Cursor);
