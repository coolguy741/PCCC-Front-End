import { useCallback, useEffect } from "react";

const useMouseMove = (callback: (event: MouseEvent) => void) => {
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
