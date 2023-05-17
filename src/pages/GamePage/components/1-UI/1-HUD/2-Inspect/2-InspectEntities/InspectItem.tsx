import { RootState, useFrame } from "@react-three/fiber";
import { FC, memo, useCallback, useRef } from "react";
import { RefMeshType } from "../../../../../shared/Types/RefTypes";

const InspectItem: FC = () => {
  // Refs
  const meshRef: RefMeshType = useRef(null);

  // Handlers
  const handleOnFrame = useCallback((state: RootState, delta: number) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 1 * delta;
  }, []);

  // Hooks
  useFrame(handleOnFrame);

  return (
    <mesh castShadow ref={meshRef} scale={1.1}>
      <torusKnotGeometry args={[1, 0.25, 64, 8, 2, 3]} />
      <meshStandardMaterial color="hotpink" emissiveIntensity={0} />
    </mesh>
  );
};

export default memo(InspectItem);
