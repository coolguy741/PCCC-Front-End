import { Perf } from "r3f-perf";
import { FC, Fragment, memo } from "react";
import { GizmoHelper, GizmoViewport, Grid } from "@react-three/drei";
import { Leva } from "leva";

interface GridArgsType {
  width?: number | undefined;
  height?: number | undefined;
  widthSegments?: number | undefined;
  heightSegments?: number | undefined;
}

interface SceneHelpersPropTypes {
  perf?: boolean;
  axes?: boolean;
  grid?: boolean;
  leva?: boolean;
  gizmo?: boolean;
  axesArgs?: GridArgsType;
  gridArgs?: GridArgsType;
}

const SceneHelpers: FC<SceneHelpersPropTypes> = ({
  perf = false,
  axes = false,
  grid = false,
  leva = false,
  gizmo = false,
  axesArgs = [10],
  gridArgs = [10.5, 10.5],
}) => {
  return (
    <Fragment>
      {leva && <Leva />}
      {perf && <Perf position={"top-left"} />}
      {axes && (
        <axesHelper args={axesArgs as [number]} position={[0, +0.01, 0]} />
      )}
      {grid && (
        <Grid
          infiniteGrid
          cellSize={1}
          sectionSize={1}
          fadeDistance={30}
          followCamera={false}
          sectionThickness={3}
          cellColor={"#89958C"}
          sectionColor={"#89958C"}
          position={[0, -0.01, 0]}
          args={gridArgs as [number]}
        />
      )}
      {gizmo && (
        <GizmoHelper alignment="bottom-left" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["#B45B4B", "#50AF74", "#477FB8"]}
            labelColor="white"
            disabled
          />
        </GizmoHelper>
      )}
    </Fragment>
  );
};

export default memo(SceneHelpers);
