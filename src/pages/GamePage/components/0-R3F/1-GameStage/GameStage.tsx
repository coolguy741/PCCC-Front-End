import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import PlayerCamera from "../2-Entities/0-Cameras/PlayerCamera";
import InteractiveGameEntity from "../2-Entities/1-HOCEntity/InteractiveGameEntity";
import ScreenSpace from "../2-Entities/2-ScreenSpace/ScreenSpace";
import Garden from "../2-Entities/Garden";
import Environment from "../3-Environment/Environment";
import {
  BIGTREE_LOOKAT_POSITION,
  PLANTBOX_LOOKAT_POSITION,
  TOOLRACK_LOOKAT_POSITION,
} from "../5-Constants/0-Garden/GARDEN_LOOKAT_POSITION";
import { GATE_POSITION } from "../5-Constants/0-Garden/GARDEN_POSITION";
import SceneHelpers from "../6-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Global State
  const { activeCamera, isDebugUIVisible } = useGlobalState(
    (state) => ({
      activeCamera: state.activeCamera,
      isDebugUIVisible: state.isDebugUIVisible,
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
      {/* <Kitchen /> */}
      <InteractiveGameEntity name={"Berries"} pos={BIGTREE_LOOKAT_POSITION} />
      <InteractiveGameEntity name={"Branches"} pos={TOOLRACK_LOOKAT_POSITION} />
      <InteractiveGameEntity
        name={"Bee Hive Top"}
        pos={PLANTBOX_LOOKAT_POSITION}
      />
      <ScreenSpace />
      <PlayerCamera />
      {/* <RigTest /> */}
      {/* <Bee /> */}
      <Environment />
      <SceneHelpers
        axes={axes}
        hotspotDebug={true}
        perf={perf && isDebugUIVisible}
        gizmo={gizmo && isDebugUIVisible}
        initOrbitPosition={GATE_POSITION}
        orbit={activeCamera === "OrbitControls"}
      />
    </Fragment>
  );
};

export default memo(GameStage);
