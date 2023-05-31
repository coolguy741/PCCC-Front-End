import { folder, useControls } from "leva";
import { FC, Fragment, memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";
import PlayerCamera from "../2-Entities/0-Cameras/PlayerCamera";
import GardenOG from "../2-Entities/1-Garden/GardenOG";
import DynamicEnitity from "../2-Entities/DynamicEnitity";
import Environment from "../3-Environment/Environment";
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
    debugHelpers: folder(
      {
        axes: false,
        perf: false,
        gizmo: true,
      },
      { collapsed: true },
    ),
  });

  return (
    <Fragment>
      <GardenOG />
      <DynamicEnitity />
      <PlayerCamera />
      <Environment />

      {/* {!isDebugUIVisible && (
        <Fragment>
          <InteractiveGameEntity
            name={"Gardening Hat"}
            pos={new Vector3(-0.15, 0.4253210127353668, 2.78058123588562)}
          />
          <InteractiveGameEntity
            name={"Shovel"}
            pos={new Vector3(0.3, 0.4253210127353668, 2.78058123588562)}
          />
          <InteractiveGameEntity
            name={"Gardening Gloves"}
            pos={new Vector3(0.1, 0.4253210127353668, 2.78058123588562)}
          />
        </Fragment>
      )} */}

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
