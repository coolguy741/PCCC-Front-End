import { Environment } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useMemo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../../globalState/useGlobalState";

const EnvironmentMap: FC = () => {
  // Global State
  const { dynamicEnvironmentMap } = useGlobalState(
    (state) => ({ dynamicEnvironmentMap: state.dynamicEnvironmentMap }),
    shallow,
  );

  // Hooks
  const { blurHDR, projectHDR } = useControls({
    HDR: folder(
      {
        blurHDR: {
          value: 0.1,
          min: 0,
          max: 1,
          step: 0.1,
        },
        projectHDR: true,
      },
      { collapsed: true },
    ),
  });

  const { dataURL, dataPath } = useMemo(() => {
    const dataURL = dynamicEnvironmentMap ? dynamicEnvironmentMap : "sky.hdr";
    const dataPath = dynamicEnvironmentMap
      ? undefined
      : "/game_assets/envMaps/";
    return { dataURL, dataPath };
  }, [dynamicEnvironmentMap]);

  return (
    <Environment
      blur={blurHDR}
      path={dataPath}
      files={dataURL}
      background={projectHDR}
    />
  );
};

export default memo(EnvironmentMap);
