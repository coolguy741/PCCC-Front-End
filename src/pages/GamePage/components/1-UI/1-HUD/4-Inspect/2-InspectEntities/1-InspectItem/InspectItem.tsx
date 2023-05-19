import { FC, memo } from "react";
import { useInspectItemLogic } from "./useInspectItemLogic";

const InspectItem: FC = () => {
  // Hooks
  const { inspectItemMeshRef } = useInspectItemLogic();

  return (
    <mesh castShadow ref={inspectItemMeshRef} scale={1.1}>
      <torusKnotGeometry args={[1, 0.25, 64, 8, 2, 3]} />
      <meshStandardMaterial color="hotpink" emissiveIntensity={0} />
    </mesh>
  );
};

export default memo(InspectItem);
