import { GizmoHelper, GizmoViewport } from '@react-three/drei';
import { FC, memo } from 'react';

const GizmoHelperController: FC = () => {
  return (
    <GizmoHelper alignment="bottom-left" margin={[80, 80]}>
      <GizmoViewport
        axisColors={['#B45B4B', '#50AF74', '#477FB8']}
        labelColor="white"
        disabled
      />
    </GizmoHelper>
  );
};

export default memo(GizmoHelperController);
