import { Sphere } from "@react-three/drei";
import { folder, useControls } from "leva";
import { FC, memo, useRef } from "react";
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
            value: 5,
            min: 0,
            max: 10,
            step: 0.001,
          },
          color: "#ffffff",
          enable: true,
          positionX: {
            value: 3.5,
            min: -15,
            max: 15,
            step: 0.001,
          },
          positionY: {
            value: 5,
            min: -15,
            max: 15,
            step: 0.001,
          },
          positionZ: {
            value: 2.5,
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
