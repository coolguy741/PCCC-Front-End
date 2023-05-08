import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import PlayerCamera from "../2-Entities/0-Cameras/PlayerCamera";
import InteractiveGameEntity from "../2-Entities/2-HOCEntity/InteractiveGameEntity";
import Garden from "../2-Entities/Garden";
import Environment from "../3-Environment/Environment";
import { GATE_POSITION } from "../5-Constants/0-Garden/GARDEN_POSITION";
import SceneHelpers from "../6-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Global State
  const { activeCamera } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
    }),
    shallow,
  );

  // HOOKS
  const { axes, perf, gizmo } = useControls({
    debugHelpers: folder({
      axes: false,
      perf: true,
      gizmo: true,
    }),
  });

  return (
    <Fragment>
      <Garden />
      <InteractiveGameEntity name={"Berries"} tempOffset={0} />
      <InteractiveGameEntity name={"Branches"} tempOffset={0.15} />
      <InteractiveGameEntity name={"Bee Hive Top"} tempOffset={-0.15} />

      <PlayerCamera />
      {/* <RigTest /> */}
      {/* <Bee /> */}
      <Environment />
      <SceneHelpers
        axes={axes}
        perf={perf}
        gizmo={gizmo}
        hotspotDebug={true}
        initOrbitPosition={GATE_POSITION}
        orbit={activeCamera === "OrbitControls"}
      />
    </Fragment>
  );
};

export default memo(GameStage);
