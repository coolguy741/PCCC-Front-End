import { Fragment, memo, MutableRefObject, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { TransformControls } from "@react-three/drei";
import { useControls } from "leva";

function Light() {
  const ref: MutableRefObject<Group | null> = useRef(null);

  const { intensity, color } = useControls({ intensity: 1, color: "#ffffff" });

  useFrame((state, delta) => {});

  return (
    <TransformControls>
      <group ref={ref}>
        <directionalLight
          position={[5, 5, -8]}
          castShadow
          intensity={intensity}
          shadow-mapSize={2048}
          shadow-bias={-0.001}
          color={color}
        />
      </group>
    </TransformControls>
  );
}

const Lighting = () => {
  return (
    <Fragment>
      <Light />
      <ambientLight intensity={0} />
    </Fragment>
  );
};

export default memo(Lighting);
