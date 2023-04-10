import { Plane } from "@react-three/drei";
import { memo } from "react";

const Floor = () => {
  return (
    <Plane
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.01, 0]}
      scale={30}
      receiveShadow
    >
      <meshStandardMaterial color={"#40e0d0"} />
    </Plane>
  );
};

export default memo(Floor);
