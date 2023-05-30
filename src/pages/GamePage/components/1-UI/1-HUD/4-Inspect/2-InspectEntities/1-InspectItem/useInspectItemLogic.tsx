import { RootState, useFrame } from "@react-three/fiber";
import { useCallback, useRef, useState } from "react";
import { RefGroupType } from "../../../../../../shared/Types/RefTypes";

// Types
interface UseInspectItemLogicReturnTypes {
  inspectItemMeshRef: RefGroupType;
  handleIsActivatedDown: () => void;
  handleIsActivatedUp: () => void;
}

const useInspectItemLogic = (): UseInspectItemLogicReturnTypes => {
  // Refs
  const inspectItemMeshRef: RefGroupType = useRef(null);

  // TODO: is activated not used
  const [isActivated, setIsActivated] = useState(true);

  // Handlers
  const handleOnFrame = useCallback((state: RootState, delta: number): void => {
    // if (!isActivated) return;
    if (!inspectItemMeshRef.current) return;
    inspectItemMeshRef.current.rotation.y += 1 * delta;
  }, []);

  const handleIsActivatedDown = useCallback(() => {
    setIsActivated(false);
  }, [setIsActivated]);

  const handleIsActivatedUp = useCallback(() => {
    setIsActivated(true);
  }, [setIsActivated]);
  // Hooks
  useFrame(handleOnFrame);

  return { inspectItemMeshRef, handleIsActivatedDown, handleIsActivatedUp };
};

export { useInspectItemLogic };
