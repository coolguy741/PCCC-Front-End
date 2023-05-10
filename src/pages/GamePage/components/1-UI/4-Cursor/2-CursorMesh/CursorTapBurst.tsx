import { RootState, useFrame } from "@react-three/fiber";
import { FC, memo, useCallback } from "react";
import { MathUtils } from "three";
import { tapBurstGeometry, tapBurstMaterial } from "./CursorTapBurstDefines";
const CursorTapBurst: FC = () => {
  const handleOnFrame = useCallback((state: RootState, delta: number) => {
    tapBurstMaterial.uniforms.uTime.value = MathUtils.mapLinear(
      Math.sin(state.clock.getElapsedTime() * 7),
      -1,
      1,
      -3,
      0.4,
    );
  }, []);

  useFrame(handleOnFrame);

  return (
    <mesh
      position={[-0.28, 0.48, -1]}
      scale={0.5}
      rotation={[0, 0, 0.14]}
      material={tapBurstMaterial}
      geometry={tapBurstGeometry}
    />
  );
};

export default memo(CursorTapBurst);
