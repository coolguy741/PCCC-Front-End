import { TransformControls } from "@react-three/drei";
import { folder, useControls } from "leva";
import { memo, MutableRefObject, useCallback, useMemo, useRef } from "react";
import { Group, Vector3 } from "three";

const SunLight = () => {
  // Refs
  const ref: MutableRefObject<Group | null> = useRef(null);

  // Hooks
  const { size, color, intensity } = useControls({
    MainLight: folder({
      intensity: 10,
      color: "#ffffff",
    }),
    shadows: folder({
      shadowMap: folder({
        size: 8,
      }),
    }),
  });

  const { newLightPos } = useMemo(() => {
    const newLightPos = new Vector3();
    return { newLightPos };
  }, []);

  // Handlers
  const handleLogLightPos = useCallback(() => {
    if (ref.current) {
      console.clear();
      const newPos = ref.current.getWorldPosition(newLightPos);
      console.log("lightPosition:", newPos);
    }
  }, [newLightPos]);

  return (
    <TransformControls
      onChange={handleLogLightPos}
      position={[3.386257562668803, 4.710346678759947, 2.662153116199844]}
    >
      <group ref={ref}>
        <directionalLight
          castShadow
          intensity={intensity}
          shadow-mapSize={4096}
          shadow-bias={-0.001}
          color={color}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[size, size * -1, size, size * -1, 0.1, 100]}
          />
        </directionalLight>
      </group>
    </TransformControls>
  );
};

export default memo(SunLight);
