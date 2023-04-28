import { PerspectiveCamera } from "@react-three/drei";
import { FC, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";
import { GATE_POSITION } from "../../4-Constants/0-Garden_Constants/GARDEN_POSITION";

const PlayerCamera: FC = () => {
  // Global State
  const { activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
    }),
    shallow,
  );

  return (
    <PerspectiveCamera
      fov={43}
      position={GATE_POSITION}
      makeDefault={activeCamera === "PlayerCamera" ? true : false}
    />
  );
};

export default memo(PlayerCamera);
