import { useCallback, useEffect } from "react";
import { MouseEventFunctionType } from "../../../shared/Types/DefineTypes";

const useMouseMove = (callback: MouseEventFunctionType) => {
  // Handlers
  const handleMouseMoveCallback = useCallback(callback, [callback]);

  // Listeners
  useEffect((): (() => void) => {
    window.addEventListener("mousemove", handleMouseMoveCallback);

    return (): void => {
      window.removeEventListener("mousemove", handleMouseMoveCallback);
    };
  }, [handleMouseMoveCallback]);
};

export default useMouseMove;
