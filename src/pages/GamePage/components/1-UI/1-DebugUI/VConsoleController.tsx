import { memo, useEffect, useRef } from "react";
import VConsole from "vconsole";

const VConsoleController = () => {
  // Refs
  const vConsoleRef = useRef<VConsole | null>(null);

  useEffect(() => {
    vConsoleRef.current = new VConsole();

    return () => {
      if (vConsoleRef.current) {
        vConsoleRef.current.destroy();
      }
    };
  }, []);

  return null;
};

export default memo(VConsoleController);
