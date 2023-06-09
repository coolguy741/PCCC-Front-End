import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import PlayerCamera from "../2-Entities/0-Cameras/0-PlayerCamera/PlayerCamera";
import GardenDebug from "../2-Entities/1-Garden/0-Garden/GardenDebug";
import HotSpotLabels from "../2-Entities/2-HotSpotLabels/HotSpotLabels";
import DynamicEnitity from "../2-Entities/3-DynamicEntity/DynamicEnitity";
import Kitchen from "../2-Entities/5-Kitchen/Kitchen";
import Environment from "../3-Environment/Environment";
import { GATE_POSITION } from "../5-Constants/0-Garden/GARDEN_POSITION";
import SceneHelpers from "../6-Helpers/SceneHelpers";

const GameStage: FC = () => {
  // Global State
  const { activeCamera, isDebugMode, isDebugUIVisible } = useGlobalState(
    (state) => ({
      isDebugMode: state.isDebugMode,
      activeCamera: state.activeCamera,
      isDebugUIVisible: state.isDebugUIVisible,
    }),
    shallow,
  );

  // HOOKS
  const { axes, perf, gizmo } = useControls({
    debugHelpers: folder(
      {
        axes: false,
        perf: false,
        gizmo: false,
      },
      { collapsed: true },
    ),
  });

  return (
    <Fragment>
      {isDebugMode && <Kitchen />}
      <GardenDebug />
      <DynamicEnitity />
      <PlayerCamera />
      <Environment />
      <HotSpotLabels />

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
