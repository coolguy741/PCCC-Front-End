import { RootState, useFrame } from "@react-three/fiber";
import { useCallback, useRef } from "react";
import { RefMeshType } from "../../../../../../shared/Types/RefTypes";

// Types
interface UseInspectItemLogicReturnTypes {
  inspectItemMeshRef: RefMeshType;
}

const useInspectItemLogic = (): UseInspectItemLogicReturnTypes => {
  // Refs
  const inspectItemMeshRef: RefMeshType = useRef(null);

  // Handlers
  const handleOnFrame = useCallback((state: RootState, delta: number): void => {
    if (!inspectItemMeshRef.current) return;
    inspectItemMeshRef.current.rotation.y += 1 * delta;
  }, []);

  // Hooks
  useFrame(handleOnFrame);

  return { inspectItemMeshRef };
};

export { useInspectItemLogic };
