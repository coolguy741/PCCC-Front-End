import { PerspectiveCamera } from "@react-three/drei";
import { RootState, useFrame } from "@react-three/fiber";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../../globalState/useGlobalState";
import {
  RefGroupType,
  RefObject3DType,
  RefPerspectiveCameraType,
} from "../../../../../shared/Types/RefTypes";
import {
  handlePlayerCameraInit,
  updatePlayerCameraBeeNullPosition,
  updatePlayerCameraFov,
  updatePlayerCameraLookAt,
  updatePlayerCameraMouseRotationMultiplier,
  updatePlayerCameraPosition,
} from "./PlayerCameraDefines";

const PlayerCamera: FC = () => {
  // Refs
  const playerCameraParentRef: RefGroupType = useRef(null);
  const playerCameraBeeNullRef: RefObject3DType = useRef(null);
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
    if (!playerCameraParentRef.current) return;
    if (!playerCameraRef.current) return;
    if (!playerCameraBeeNullRef.current) return;
    handlePlayerCameraInit(
      playerCameraParentRef.current,
      playerCameraRef.current,
      playerCameraBeeNullRef.current,
    );
  }, []);

  const handlePlayerCameraOnFrame = useCallback(
    (state: RootState, delta: number) => {
      if (!playerCameraParentRef.current) return;
      if (!playerCameraRef.current) return;
      if (!playerCameraBeeNullRef.current) return;
      updatePlayerCameraBeeNullPosition(playerCameraBeeNullRef.current);
      updatePlayerCameraFov(playerCameraRef.current, delta);
      updatePlayerCameraPosition(playerCameraParentRef.current, delta);
      updatePlayerCameraLookAt(playerCameraParentRef.current, delta);
      updatePlayerCameraMouseRotationMultiplier(
        playerCameraParentRef.current,
        state.mouse,
        delta,
      );
    },
    [],
  );

  // Hooks;
  useFrame(handlePlayerCameraOnFrame);

  // Listeners
  useEffect(handlePlayerCameraInitialize, [handlePlayerCameraInitialize]);

  return (
    <group ref={playerCameraParentRef}>
      <PerspectiveCamera
        ref={playerCameraRef}
        rotation={[0, Math.PI, 0]}
        makeDefault={activeCamera === "PlayerCamera"}
      />
      <object3D ref={playerCameraBeeNullRef} position={[0.125, -0.05, 0.4]} />
      {/* <Sphere scale={0.1} position={[0.25, 0, 1]} /> */}
    </group>
  );
};

export default memo(PlayerCamera);
