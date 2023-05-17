import { Environment } from "@react-three/drei";
import { FC, memo } from "react";

const InspectEnvironment: FC = () => {
  return <Environment files="forest.hdr" path={"/game_assets/envMaps/"} />;
};

export default memo(InspectEnvironment);
