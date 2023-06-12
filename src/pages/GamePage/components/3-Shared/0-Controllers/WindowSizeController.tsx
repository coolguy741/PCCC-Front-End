import { FC, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import useWindowResize from "../1-Hooks/useWindowResize";

const WindowSizeController: FC = () => {
  // Global State
  const { windowSize, setWindowResizeEventTrigger } = useGlobalState(
    (state) => ({
      windowSize: state.windowSize,
      setWindowResizeEventTrigger: state.setWindowResizeEventTrigger,
    }),
    shallow,
  );

  // Hooks
  useWindowResize({ windowSize, setWindowResizeEventTrigger });

  return null;
};

export default memo(WindowSizeController);
