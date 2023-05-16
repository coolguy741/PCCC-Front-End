import { FC, memo, MutableRefObject, useRef } from "react";
import { DirectionalLight } from "three";
const size = 5;

const InspectLighting: FC = () => {
  // Refs
  const inspectLightingRef: MutableRefObject<DirectionalLight | null> =
    useRef(null);

  return (
    <directionalLight
      position={[-1.75, 1.75, 4]}
      castShadow
      color={"white"}
      ref={inspectLightingRef}
      shadow-mapSize={1024}
      intensity={1}
    >
      <orthographicCamera
        attach="shadow-camera"
        args={[size, size * -1, size, size * -1, 0.1, 100]}
      />
    </directionalLight>
  );
};

export default memo(InspectLighting);
