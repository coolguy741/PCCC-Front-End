import { PresentationControls } from "@react-three/drei";
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
    <PresentationControls
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      cursor={false}
    >
      <mesh castShadow ref={meshRef} scale={1.1}>
        <torusKnotGeometry args={[1, 0.25, 64, 8, 2, 3]} />
        <meshStandardMaterial color="hotpink" emissiveIntensity={0} />
      </mesh>
    </PresentationControls>
  );
};

export default memo(InspectItem);
