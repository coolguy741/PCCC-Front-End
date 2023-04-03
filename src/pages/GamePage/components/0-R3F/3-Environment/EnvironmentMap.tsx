import { Environment } from "@react-three/drei";
import { memo } from "react";

const EnvironmentMap = () => {
  return <Environment files={"forest.hdr"} path={"/game_assets/envMaps/"} />;
};

export default memo(EnvironmentMap);
