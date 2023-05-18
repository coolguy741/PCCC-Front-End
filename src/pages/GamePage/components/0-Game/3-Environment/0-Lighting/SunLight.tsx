import { TransformControls } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useCallback, useRef } from "react";
import { RefDirectionalLightType } from "../../../../shared/Types/RefTypes";
import { sunLightWorldPos } from "./LightingDefines";

const SunLight: FC = () => {
  // Refs
  const sunLightRef: RefDirectionalLightType = useRef(null);

  // Hooks
  const { size, color, intensity } = useControls({
    MainLight: folder({
      intensity: 7,
      color: "#ffffff",
    }),
    shadows: folder({
      shadowMap: folder({
        size: 6,
      }),
    }),
  });

  // Handlers
  const handleLogLightPos = useCallback(() => {
    if (sunLightRef.current) {
      const newPos = sunLightRef.current.getWorldPosition(sunLightWorldPos);
      console.clear();
      console.log("lightPosition:", newPos);
    }
  }, []);

  return (
    <TransformControls
      onMouseUp={handleLogLightPos}
      position={[3.386257562668803, 4.710346678759947, 2.662153116199844]}
    >
      <directionalLight
        castShadow
        color={color}
        ref={sunLightRef}
        shadow-bias={-0.001}
        shadow-mapSize={2048}
        intensity={intensity}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[size, size * -1, size, size * -1, 0.1, 100]}
        />
      </directionalLight>
    </TransformControls>
  );
};

export default memo(SunLight);
