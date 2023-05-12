import { useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

const useWindowResize = (): void => {
  // Global State
  const { windowSize } = useGlobalState(
    (state) => ({
      windowSize: state.windowSize,
    }),
    shallow,
  );

  const handleResize = useCallback((): void => {
    windowSize.set(window.innerWidth, window.innerHeight);
  }, [windowSize]);

  useEffect((): (() => void) => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
};

export default useWindowResize;
