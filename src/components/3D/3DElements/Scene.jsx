import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
  //Bounds,
} from "@react-three/drei";
import styled from "styled-components";
import Pancake from "./models/Pancake";
import Lights from "./Lights";
import { useControls } from "leva";

export default function Scene() {
  const { X, Y, Z } = useControls({
    X: { value: 0.15, min: 0, max: 2, step: 0.001 },
    Y: { value: 0.24, min: 0, max: 2, step: 0.001 },
    Z: { value: 0, min: 0, max: 2, step: 0.001 },
  });
  return (
    <StyledHolder>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 0.6], fov: 50 }}>
        <Lights />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
          >
            <group position={[0,-0.07,0]}>
<Pancake rotation={[Math.PI * X, Math.PI * Y, Math.PI * Z]} />
            </group>
            
          </PresentationControls>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -1.4, 0]}
          opacity={0.75}
          width={10}
          height={10}
          blur={2.6}
          far={2}
        />
        <Environment preset="city" />
      </Canvas>
    </StyledHolder>
  );
}

const StyledHolder = styled.div`
  height: 100%;
  width: 100%;
`;
