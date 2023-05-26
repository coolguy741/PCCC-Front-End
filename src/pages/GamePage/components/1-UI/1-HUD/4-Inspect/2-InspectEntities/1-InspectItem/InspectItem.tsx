import { PresentationControls } from "@react-three/drei";
import { FC, memo } from "react";
import { useInspectItemLogic } from "./useInspectItemLogic";

const InspectItem: FC = () => {
  // Hooks
  const { inspectItemMeshRef } = useInspectItemLogic();

  return (
    <PresentationControls
      global
      cursor={false}
      zoom={0.8}
      rotation={[0, -Math.PI / 4, 0]}
      polar={[0, Math.PI / 4]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <mesh castShadow ref={inspectItemMeshRef} scale={1.1}>
        <torusKnotGeometry args={[1, 0.25, 64, 8, 2, 3]} />
        <meshStandardMaterial color="hotpink" emissiveIntensity={0} />
      </mesh>
    </PresentationControls>
  );
};

export default memo(InspectItem);
