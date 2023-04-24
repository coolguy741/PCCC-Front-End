import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { FC, Fragment, memo, useCallback, useEffect } from "react";
import Garden from "../2-Entities/Garden";
import Environment from "../3-Environment/Environment";
import SceneHelpers from "../4-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Hooks
  const camera = useThree((state) => state.camera);

  const handleInitializeCamera = useCallback(() => {
    camera.position.set(
      -13.343773738107854,
      12.722521359474685,
      16.161540739896658,
    );
  }, []);

  useEffect(handleInitializeCamera, []);

  return (
    <Fragment>
      <group scale={0.25}>
        <Garden />
      </group>

      <Environment />
      <OrbitControls makeDefault />
      <SceneHelpers perf gizmo />
    </Fragment>
  );
};

export default memo(GameStage);
