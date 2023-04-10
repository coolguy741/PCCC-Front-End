import { Environment } from "@react-three/drei";
import { memo } from "react";
import { shallow } from "zustand/shallow";
import { useGlobalState } from "../../../globalState/useGlobalState";

const EnvironmentMap = () => {
  // Global State
  const { dynamicEnvironmentMap } = useGlobalState(
    (state) => ({ dynamicEnvironmentMap: state.dynamicEnvironmentMap }),
    shallow
  );

  return dynamicEnvironmentMap ? (
    <Environment files={dynamicEnvironmentMap} />
  ) : (
    <Environment files={"forest.hdr"} path={"/game_assets/envMaps/"} />
  );
};

export default memo(EnvironmentMap);
