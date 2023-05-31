import { FC, memo } from "react";
import { tapBurstGeometry, tapBurstMaterial } from "./CursorTapBurstDefines";
import { useCursorTapBurstLogic } from "./useCursorTapBurstLogic";

const CursorTapBurst: FC = () => {
  // Component Logic
  useCursorTapBurstLogic();

  return (
    <mesh
      scale={0.7}
      rotation={[0, 0, 0.14]}
      material={tapBurstMaterial}
      geometry={tapBurstGeometry}
      position={[-0.28, 0.48, -1]}
    />
  );
};

export default memo(CursorTapBurst);
