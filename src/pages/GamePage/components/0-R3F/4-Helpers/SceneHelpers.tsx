import { FC, Fragment, memo } from 'react';
import AxesHelperController from './AxesHelperController';
import GizmoHelperController from './GizmoHelperController';
import GridHelperController from './GridHelperController';
import PerfHelperController from './PerfHelperController';

interface SceneHelpersPropTypes {
  perf?: boolean;
  axes?: boolean;
  grid?: boolean;
  gizmo?: boolean;
  axesArgs?: number[];
  gridArgs?: number[];
}

const SceneHelpers: FC<SceneHelpersPropTypes> = ({
  perf = false,
  axes = false,
  grid = false,
  gizmo = false,
  axesArgs = [10],
  gridArgs = [10.5, 10.5],
}) => {
  return (
    <Fragment>
      {perf && <PerfHelperController />}
      {gizmo && <GizmoHelperController />}
      {axes && <AxesHelperController axesArgs={axesArgs} />}
      {grid && <GridHelperController gridArgs={gridArgs} />}
    </Fragment>
  );
};

export default memo(SceneHelpers);
