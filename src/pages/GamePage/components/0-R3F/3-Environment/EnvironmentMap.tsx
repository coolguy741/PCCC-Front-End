import { Environment } from '@react-three/drei';
import { folder, useControls } from 'leva';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import { useGlobalState } from '../../../globalState/useGlobalState';

const EnvironmentMap = () => {
  // Global State
  const { dynamicEnvironmentMap } = useGlobalState(
    (state) => ({ dynamicEnvironmentMap: state.dynamicEnvironmentMap }),
    shallow,
  );

  // Hooks
  const { blurHDR, projectHDR } = useControls({
    HDR: folder({
      blurHDR: 0,
      projectHDR: true,
    }),
  });

  return dynamicEnvironmentMap ? (
    <Environment
      blur={blurHDR}
      background={projectHDR}
      files={dynamicEnvironmentMap}
    />
  ) : (
    <Environment
      blur={blurHDR}
      background={projectHDR}
      files={'forest.hdr'}
      path={'/game_assets/envMaps/'}
    />
  );
};

export default memo(EnvironmentMap);
