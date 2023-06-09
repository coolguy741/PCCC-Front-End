import { Sphere } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useEffect, useRef } from "react";
import { RefDirectionalLightType } from "../../../../shared/Types/RefTypes";

const SunLight: FC = () => {
  // Refs
  const sunLightRef: RefDirectionalLightType = useRef(null);

  // Hooks
  const { size, color, intensity, positionX, positionY, positionZ } =
    useControls({
      MainLight: folder(
        {
          intensity: {
            value: 4,
            min: 0,
            max: 10,
            step: 0.001,
          },
          color: "#faf5ac",
          enable: true,
          positionX: {
            value: -5.4,
            min: -15,
            max: 15,
            step: 0.001,
          },
          positionY: {
            value: 10.7,
            min: -15,
            max: 15,
            step: 0.001,
          },
          positionZ: {
            value: 6,
            min: -15,
            max: 15,
            step: 0.001,
          },
        },
        { collapsed: true },
      ),
      shadows: folder(
        {
          shadowMap: folder(
            {
              size: 6,
            },
            { collapsed: true },
          ),
        },
        { collapsed: true },
      ),
    });

  useEffect(() => {
    setTimeout(() => {
      if (!sunLightRef.current) return;
      sunLightRef.current.position.set(-5.4, 10.7, 6);
    }, 50);
  }, []);

  return (
    <directionalLight
      castShadow
      color={color}
      ref={sunLightRef}
      shadow-bias={-0.001}
      shadow-mapSize={2048}
      intensity={intensity}
      position={[positionX, positionY, positionZ]}
    >
      <orthographicCamera
        attach="shadow-camera"
        args={[size, size * -1, size, size * -1, 0.1, 100]}
      />
      <Sphere scale={0.1}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </directionalLight>
  );
};

export default memo(SunLight);
