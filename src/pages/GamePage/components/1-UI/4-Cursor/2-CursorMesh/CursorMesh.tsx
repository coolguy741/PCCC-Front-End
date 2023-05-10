import { Plane, useTexture } from "@react-three/drei";
import { FC, memo } from "react";
import { LinearEncoding } from "three";

const CursorMesh: FC = () => {
  // Texture
  const cursorTexture = useTexture("/game_assets/textures/cursor.webp");
  cursorTexture.encoding = LinearEncoding;

  return (
    <Plane position={[0.05, 0, -1]}>
      <meshBasicMaterial transparent map={cursorTexture} />
    </Plane>
  );
};

export default memo(CursorMesh);
