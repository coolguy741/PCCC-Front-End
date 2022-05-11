import { Canvas } from "@react-three/fiber";
import {
  PresentationControls,
  Environment,
  ContactShadows,
  Bounds,
} from "@react-three/drei";
import styled from "styled-components";
import Pancake from "./models/Pancake";
import Lights from "./Lights";
import { useControls } from "leva";

/*
         polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
           rotation={[0, 0.3, 0]}
*/

export default function Scene() {
  const { X,Y,Z } = useControls({
    // X: { value: 0.35, min: 0, max: 2, step: 0.001 },
    // Y: { value: 1.85, min: 0, max: 2, step: 0.001 },
    // Z: { value: 0.38, min: 0, max: 2, step: 0.001 },
    X: { value: .15, min: 0, max: 2, step: 0.001 },
    Y: { value: 0, min: 0, max: 2, step: 0.001 },
    Z: { value: 0, min: 0, max: 2, step: 0.001 },
  });
  return (
    <StyledHolder>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <Lights />
        <Bounds fit clip margin={1.2}>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
        >
            <Pancake rotation={[Math.PI * X, Math.PI * Y, Math.PI * Z]} position={[0,0,0]} scale={0.075} />
        </PresentationControls>
        </Bounds>
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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
