import { useCallback, useEffect } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import { ConstantVoidFunctionType } from "../../../shared/Types/DefineTypes";

const useWindowResize = (): void => {
  // Global State
  const { windowSize, setWindowResizeEventTrigger } = useGlobalState(
    (state) => ({
      windowSize: state.windowSize,
      setWindowResizeEventTrigger: state.setWindowResizeEventTrigger,
    }),
    shallow,
  );

  const handleResize: ConstantVoidFunctionType = useCallback((): void => {
    windowSize.set(window.innerWidth, window.innerHeight);
    setWindowResizeEventTrigger();
  }, [windowSize, setWindowResizeEventTrigger]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return (): void => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);
};

export default useWindowResize;
