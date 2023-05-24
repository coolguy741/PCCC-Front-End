import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, memo, useCallback, useEffect, useRef } from "react";
import { PerspectiveCamera as PerspectiveCameraType } from "three";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { RefPerspectiveCameraType } from "../../../../shared/Types/RefTypes";
import { DampVector3 } from "../../../../shared/Utility/UtilityFunctions";

const PlayerCamera: FC = () => {
  // Refs
  const playerCameraRef: RefPerspectiveCameraType = useRef(null);

  // Global State
  const {
    activeCamera,
    playerCameraActiveFov,
    playerCameraActiveLookAt,
    playerCameraActivePosition,
  } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
      playerCameraActiveFov: state.playerCameraActiveFov,
      playerCameraActiveLookAt: state.playerCameraActiveLookAt,
      playerCameraActivePosition: state.playerCameraActivePosition,
    }),
    shallow,
  );

  const updatePlayerCameraLookAt = useCallback(
    (playerCameraReference: PerspectiveCameraType) => {
      playerCameraReference.lookAt(playerCameraActiveLookAt);
    },
    [playerCameraActiveLookAt],
  );

  const updatePlayerCameraPosition = useCallback(
    (playerCameraReference: PerspectiveCameraType, delta: number) => {
      if (!playerCameraReference.position.equals(playerCameraActivePosition)) {
        DampVector3(
          playerCameraReference.position,
          playerCameraActivePosition,
          1,
          delta,
        );
      }
    },
    [playerCameraActivePosition],
  );

  const updatePlayerCameraFov = useCallback(
    (playerCameraReference: PerspectiveCameraType, delta: number) => {
      if (playerCameraReference.fov !== playerCameraActiveFov.x) {
        playerCameraReference.fov = playerCameraActiveFov.x;
      }
    },
    [playerCameraActiveFov],
  );

  useFrame((state, delta) => {
    if (!playerCameraRef.current) return;
    updatePlayerCameraLookAt(playerCameraRef.current);
    updatePlayerCameraFov(playerCameraRef.current, delta);
    updatePlayerCameraPosition(playerCameraRef.current, delta);
    playerCameraRef.current.updateProjectionMatrix();
  });

  useEffect(() => {
    if (!playerCameraRef.current) return;
    playerCameraRef.current.position.copy(playerCameraActivePosition);
  }, [playerCameraActivePosition]);

  return (
    <PerspectiveCamera
      ref={playerCameraRef}
      makeDefault={activeCamera === "PlayerCamera"}
    />
  );
};

export default memo(PlayerCamera);
