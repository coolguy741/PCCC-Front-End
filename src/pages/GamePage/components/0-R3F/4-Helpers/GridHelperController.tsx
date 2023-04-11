import { Grid } from '@react-three/drei';
import { FC, memo } from 'react';

interface GridHelperControllerPropTypes {
  gridArgs: number[];
}

const GridHelperController: FC<GridHelperControllerPropTypes> = ({
  gridArgs,
}) => {
  return (
    <Grid
      infiniteGrid
      cellSize={1}
      sectionSize={1}
      fadeDistance={30}
      followCamera={false}
      sectionThickness={3}
      cellColor={'#89958C'}
      sectionColor={'#89958C'}
      position={[0, -0.02, 0]}
      args={gridArgs as [number]}
    />
  );
};

export default memo(GridHelperController);
