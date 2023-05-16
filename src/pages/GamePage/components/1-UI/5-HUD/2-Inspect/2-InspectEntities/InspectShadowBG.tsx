import { FC, memo } from "react";

const InspectShadowBG: FC = () => {
  return (
    <mesh receiveShadow position={[0, 0, -2]} scale={100}>
      <planeGeometry />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  );
};

export default memo(InspectShadowBG);
