import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { FC, Fragment, memo, useCallback, useEffect } from "react";
import KitchenRaw from "../2-Entities/KitchenRaw";
import Environment from "../3-Environment/Environment";
import SceneHelpers from "../4-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Hooks
  const camera = useThree((state) => state.camera);

  const handleInitializeCamera = useCallback(() => {
    camera.position.set(5, 5, 5);
  }, []);

  useEffect(handleInitializeCamera, []);

  return (
    <Fragment>
      <KitchenRaw />
      <Environment />
      <OrbitControls makeDefault />
      <SceneHelpers perf gizmo grid axes />
    </Fragment>
  );
};

export default memo(GameStage);
