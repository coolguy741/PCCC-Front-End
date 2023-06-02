import { PerspectiveCamera } from "@react-three/drei";
import { RootState, useFrame } from "@react-three/fiber";
import { FC, Fragment, memo, useCallback, useEffect, useRef } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import {
  RefMeshType,
  RefPerspectiveCameraType,
} from "../../../../shared/Types/RefTypes";
import {
  handlePlayerCameraInit,
  playerCameraLookAtDampener,
  updatePlayerCameraFov,
  updatePlayerCameraLookAt,
  updatePlayerCameraMouseMouseRotationMultiplier,
  updatePlayerCameraPosition,
} from "./PlayerCameraDefines";

const PlayerCamera: FC = () => {
  // Refs
  const playerCameraRef: RefPerspectiveCameraType = useRef(null);
  const playerSphereRef: RefMeshType = useRef(null);

  // Global State
  const { activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
    }),
    shallow,
  );

  // Handlers
  const handlePlayerCameraOnFrame = useCallback(
    (state: RootState, delta: number) => {
      if (!playerCameraRef.current) return;
      updatePlayerCameraLookAt(playerCameraRef.current, delta);
      updatePlayerCameraMouseMouseRotationMultiplier(
        playerCameraRef.current,
        state.mouse,
        delta,
      );
      updatePlayerCameraFov(playerCameraRef.current, delta);
      updatePlayerCameraPosition(playerCameraRef.current, delta);
      playerSphereRef.current?.position.copy(playerCameraLookAtDampener);
      playerCameraRef.current.updateProjectionMatrix();
    },
    [],
  );

  // Listeners
  useEffect(() => {
    if (!playerCameraRef.current) return;
    handlePlayerCameraInit(playerCameraRef.current);
  }, []);

  // Hooks
  useFrame(handlePlayerCameraOnFrame);

  return (
    <Fragment>
      <PerspectiveCamera
        ref={playerCameraRef}
        makeDefault={activeCamera === "PlayerCamera"}
      />
      {/* <Sphere ref={playerSphereRef} scale={0.05} /> */}
    </Fragment>
  );
};

export default memo(PlayerCamera);
