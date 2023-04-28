import { OrbitControls } from "@react-three/drei";
import { FC, Fragment, memo } from "react";
import { Vector3 } from "three";
import AxesHelperController from "./AxesHelperController";
import GizmoHelperController from "./GizmoHelperController";
import GridHelperController from "./GridHelperController";
import HotSpotHelperController from "./HotSpotHelperController";
import PerfHelperController from "./PerfHelperController";

interface SceneHelpersPropTypes {
  perf?: boolean;
  axes?: boolean;
  grid?: boolean;
  gizmo?: boolean;
  orbit?: boolean;
  axesArgs?: number[];
  gridArgs?: number[];
  hotspotDebug?: boolean;
  initOrbitPosition?: Vector3 | undefined;
}

const SceneHelpers: FC<SceneHelpersPropTypes> = ({
  perf = false,
  axes = false,
  grid = false,
  gizmo = false,
  orbit = false,
  axesArgs = [10],
  hotspotDebug = false,
  gridArgs = [10.5, 10.5],
  initOrbitPosition = undefined,
}) => {
  return (
    <Fragment>
      {perf && <PerfHelperController />}
      {gizmo && <GizmoHelperController />}
      {hotspotDebug && <HotSpotHelperController />}
      {axes && <AxesHelperController axesArgs={axesArgs} />}
      {grid && <GridHelperController gridArgs={gridArgs} />}
      {orbit && <OrbitControls makeDefault position={initOrbitPosition} />}
    </Fragment>
  );
};

export default memo(SceneHelpers);
