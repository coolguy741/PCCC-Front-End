import { FC, memo } from "react";
import { inspectLightShadowMapSize } from "./InspectLightingDefines";
import { useInspectLightingLogic } from "./useInspectLightingLogic";

const InspectLighting: FC = () => {
  // Hooks
  const { inspectLightRef } = useInspectLightingLogic();

  return (
    <directionalLight
      castShadow
      intensity={1}
      color={"white"}
      ref={inspectLightRef}
      shadow-mapSize={1024}
      position={[-1.75, 1.75, 4]}
    >
      <orthographicCamera
        attach="shadow-camera"
        args={[
          inspectLightShadowMapSize,
          inspectLightShadowMapSize * -1,
          inspectLightShadowMapSize,
          inspectLightShadowMapSize * -1,
          0.1,
          100,
        ]}
      />
    </directionalLight>
  );
};

export default memo(InspectLighting);
