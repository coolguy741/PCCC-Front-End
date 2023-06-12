import { useCallback, useEffect } from "react";
import { Vector2 } from "three";
import { ConstantVoidFunctionType } from "../../../shared/Types/DefineTypes";

interface WindowSizePropTypes {
  windowSize: Vector2;
  setWindowResizeEventTrigger: ConstantVoidFunctionType;
}

const useWindowResize = ({
  windowSize,
  setWindowResizeEventTrigger,
}: WindowSizePropTypes) => {
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
