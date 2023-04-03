import { SoftShadows } from "@react-three/drei";
import { useControls } from "leva";
import { Fragment, memo, MutableRefObject, useRef, useState } from "react";
import { Group } from "three";

const Light = () => {
  const ref: MutableRefObject<Group | null> = useRef(null);

  const { intensity, color } = useControls({ intensity: 10, color: "#ffffff" });

  // useFrame((state, delta) => {
  //   console.log(ref.current?.getWorldPosition(new Vector3()));
  // });

  return (
    <group
      ref={ref}
      position={[3.386257562668803, 4.710346678759947, 2.662153116199844]}
    >
      <directionalLight
        castShadow
        intensity={intensity}
        shadow-mapSize={2048}
        shadow-bias={-0.001}
        color={color}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-25, 25, 25, -25, 0.1, 15]}
        />
      </directionalLight>
    </group>
  );
};

const Lighting = () => {
  const [bad, set] = useState(false);

  return (
    <Fragment>
      <Light />
      {/* <BakeShadows /> */}
      <SoftShadows samples={16} focus={0.75} size={35} />
    </Fragment>
  );
};

export default memo(Lighting);
