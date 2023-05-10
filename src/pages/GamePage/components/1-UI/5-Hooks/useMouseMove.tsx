import { useCallback, useEffect } from "react";

const useMouseMove = (callback: (event: MouseEvent) => void) => {
  const onMouseMove = useCallback(callback, [callback]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);
};

export default useMouseMove;
