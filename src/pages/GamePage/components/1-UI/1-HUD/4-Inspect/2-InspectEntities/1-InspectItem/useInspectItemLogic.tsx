import { RootState, useFrame } from "@react-three/fiber";
import { useCallback, useRef } from "react";
import { RefGroupType } from "../../../../../../shared/Types/RefTypes";
import {
  UseInspectItemLogicHookType,
  UseInspectItemLogicReturnTypes,
} from "./InspectItemTypes";

const useInspectItemLogic: UseInspectItemLogicHookType =
  (): UseInspectItemLogicReturnTypes => {
    // Refs
    const inspectItemMeshRef: RefGroupType = useRef(null);

    // Handlers
    const handleOnFrame = useCallback(
      (state: RootState, delta: number): void => {
        if (!inspectItemMeshRef.current) return;
        inspectItemMeshRef.current.rotation.y += 1 * delta;
      },
      [],
    );

    // Hooks
    useFrame(handleOnFrame);

    return { inspectItemMeshRef };
  };

export { useInspectItemLogic };
