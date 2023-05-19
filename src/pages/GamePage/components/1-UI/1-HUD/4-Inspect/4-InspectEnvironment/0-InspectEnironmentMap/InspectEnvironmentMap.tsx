import { Environment } from "@react-three/drei";
import { FC, memo } from "react";

const InspectEnvironmentMap: FC = () => {
  return <Environment files="forest.hdr" path={"/game_assets/envMaps/"} />;
};

export default memo(InspectEnvironmentMap);
