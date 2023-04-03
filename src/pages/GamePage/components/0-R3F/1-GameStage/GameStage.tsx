import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { FC, Fragment, memo, useCallback, useEffect } from "react";
import Kitchen from "../2-Entities/Kitchen";
import Environment from "../3-Environment/Environment";
import SceneHelpers from "../4-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Hooks
  const camera = useThree((state) => state.camera);

  const handleInitializeCamera = useCallback(() => {
    camera.position.set(
      -13.343773738107854,
      12.722521359474685,
      16.161540739896658
    );
  }, []);

  useEffect(handleInitializeCamera, []);

  return (
    <Fragment>
      <Kitchen />
      <Environment />
      <OrbitControls makeDefault />
      <SceneHelpers perf gizmo grid axes />
    </Fragment>
  );
};

export default memo(GameStage);
