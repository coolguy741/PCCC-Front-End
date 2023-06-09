import { PerspectiveCamera } from "@react-three/drei";
import { RootState, useFrame } from "@react-three/fiber";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import { RefPerspectiveCameraType } from "../../../../../shared/Types/RefTypes";
import {
  handlePlayerCameraInit,
  updatePlayerCameraFov,
  updatePlayerCameraLookAt,
  updatePlayerCameraMouseRotationMultiplier,
  updatePlayerCameraPosition,
} from "./PlayerCameraDefines";

const PlayerCamera: FC = () => {
  // Refs
  const playerCameraRef: RefPerspectiveCameraType = useRef(null);

  // Global State
  const { activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
    }),
    shallow,
  );

  // Handlers
  const handlePlayerCameraInitialize = useCallback(() => {
    if (!playerCameraRef.current) return;
    handlePlayerCameraInit(playerCameraRef.current);
  }, []);

  const handlePlayerCameraOnFrame = useCallback(
    (state: RootState, delta: number) => {
      if (!playerCameraRef.current) return;
      updatePlayerCameraFov(playerCameraRef.current, delta);
      updatePlayerCameraPosition(playerCameraRef.current, delta);
      updatePlayerCameraLookAt(playerCameraRef.current, delta);
      updatePlayerCameraMouseRotationMultiplier(
        playerCameraRef.current,
        state.mouse,
        delta,
      );
    },
    [],
  );

  // Hooks
  useFrame(handlePlayerCameraOnFrame);

  // Listeners
  useEffect(handlePlayerCameraInitialize, [handlePlayerCameraInitialize]);

  return (
    <PerspectiveCamera
      ref={playerCameraRef}
      makeDefault={activeCamera === "PlayerCamera"}
    />
  );
};

export default memo(PlayerCamera);
