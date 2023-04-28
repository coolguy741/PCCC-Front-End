import { OrbitControls } from "@react-three/drei";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import Garden from "../2-Entities/Garden";
import PlayerCamera from "../2-Entities/PlayerCamera";
import Environment from "../3-Environment/Environment";
import SceneHelpers from "../5-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Hooks
  // const camera = useThree((state) => state.camera);

  // const handleInitializeCamera = useCallback(() => {
  //   camera.position.set(-3.895013, 2.909739, 4.410319);
  // }, []);

  // useEffect(handleInitializeCamera, []);
  // Global State
  const { activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
    }),
    shallow,
  );

  return (
    <Fragment>
      <Garden />
      <PlayerCamera />

      <Environment />
      {activeCamera === "OrbitControls" && (
        <OrbitControls makeDefault={activeCamera === "OrbitControls"} />
      )}
      <SceneHelpers perf gizmo />
    </Fragment>
  );
};

export default memo(GameStage);
